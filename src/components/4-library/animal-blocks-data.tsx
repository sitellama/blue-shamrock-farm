import { atom } from "jotai";

const drupalBaseUrl = (import.meta.env.VITE_DRUPAL_BASE_URL || "").replace(/\/$/, "");
const drupalOrigin = (() => {
    try { return new URL(drupalBaseUrl).origin; } catch { return drupalBaseUrl; }
})();
const drupalIncludeCredentials = import.meta.env.VITE_DRUPAL_INCLUDE_CREDENTIALS === "true";

// Derive a root-relative JSON:API path so requests go through the Vite dev
// proxy (which maps /drupal → https://blueshamrock.farm/drupal) and stay
// same-origin in production.
const drupalPath = (() => {
    try { return new URL(drupalBaseUrl).pathname.replace(/\/$/, ""); } catch { return ""; }
})();
const JSONAPI_BASE = `${drupalPath}/jsonapi`;

const fetchOptions = (): RequestInit => ({
    credentials: drupalIncludeCredentials ? "include" : "same-origin",
    headers: { Accept: "application/vnd.api+json" },
});

type DrupalResource = {
    id: string;
    type: string;
    attributes?: Record<string, unknown>;
    relationships?: Record<string, {
        data?: { id: string; type: string } | { id: string; type: string }[] | null;
    }>;
};

const resolveFileUrl = (rawUrl: string): string => {
    if (!rawUrl) return "";
    if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) return rawUrl;
    return `${drupalOrigin}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`;
};

const buildIncludedMap = (included: DrupalResource[]): Map<string, DrupalResource> =>
    new Map(included.map((r) => [`${r.type}:${r.id}`, r]));

const decodeHtmlEntities = (value: string): string =>
    value
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;/gi, "'");

const toPlainText = (value?: string): string => {
    if (!value || typeof value !== "string") return "";

    const withBreaks = value
        .replace(/<\s*br\s*\/?>/gi, "\n")
        .replace(/<\s*li[^>]*>/gi, "- ")
        .replace(/<\/(p|div|li|h1|h2|h3|h4|h5|h6|ul|ol)>/gi, "\n");

    const withoutTags = withBreaks.replace(/<[^>]*>/g, "");
    const decoded = decodeHtmlEntities(withoutTags);

    return decoded
        .split("\n")
        .map((line) => line.replace(/\s+/g, " ").trim())
        .filter(Boolean)
        .join("\n");
};

// ─── text_block ───────────────────────────────────────────────────────────────

export type TextBlock = {
    id: string;
    text: string;
    centerText: boolean;
    colorTheme: string;
};

export type TextBlockWithRef = TextBlock & {
    referenceNodeId: string | null;
    referenceNodeType: string | null;
    referenceNodeIds: string[];
};

type TextBlockAttrs = {
    field_text_block?: { value?: string };
    field_animal_description_block?: { value?: string };
    field_center_text?: boolean;
    field_color_theme?: string;
};

const mapTextBlock = (r: DrupalResource): TextBlockWithRef => {
    const a = (r.attributes ?? {}) as TextBlockAttrs;
    const rawReferenceRel = r.relationships?.field_reference?.data;
    const referenceRels = toRelationshipArray(rawReferenceRel);
    const referenceRel = referenceRels[0] ?? null;

    return {
        id: r.id,
        text: toPlainText(a.field_text_block?.value ?? a.field_animal_description_block?.value ?? ""),
        centerText: a.field_center_text ?? false,
        colorTheme: a.field_color_theme ?? "",
        referenceNodeId: referenceRel?.id ?? null,
        referenceNodeType: referenceRel?.type ?? null,
        referenceNodeIds: referenceRels.map((rel) => rel.id),
    };
};

// ─── new_animal_by_name ─────────────────────────────────────────────────────

export type AnimalCard = {
    id: string;
    name: string;
    description: string;
    images: { url: string; alt: string }[];
};
// referenceNodeId: UUID of the node--animal this block explicitly belongs to.
// null means no explicit reference was set in Drupal.
export type AnimalCardWithRef = AnimalCard & {
    referenceNodeId: string | null;
    referenceNodeType: string | null;
    referenceNodeIds: string[];
};

type AnimalCardAttrs = {
    info?: string;
    field_animal_name?: string;
    field_animal_description?: { value?: string };
    field_text?: { value?: string };
};

type MediaRelData = { id: string; type: string };

const toRelationshipArray = (
    data: { id: string; type: string } | { id: string; type: string }[] | null | undefined
): { id: string; type: string }[] => {
    if (!data) return [];
    return Array.isArray(data) ? data : [data];
};

const getImagesFromMedia = (
    mediaIds: MediaRelData[],
    includedMap: Map<string, DrupalResource>
): { url: string; alt: string }[] =>
    mediaIds.flatMap(({ id, type }) => {
        const media = includedMap.get(`${type}:${id}`);
        if (!media) return [];

        const fileRel = media.relationships?.field_media_image?.data;
        if (!fileRel || Array.isArray(fileRel)) return [];

        const file = includedMap.get(`${fileRel.type}:${fileRel.id}`);
        if (!file) return [];

        const rawUrl = (file.attributes?.uri as { url?: string } | undefined)?.url ?? "";
        const alt = (media.attributes?.name as string | undefined) ?? "";

        return rawUrl ? [{ url: resolveFileUrl(rawUrl), alt }] : [];
    });

const mapAnimalCard = (
    r: DrupalResource,
    includedMap: Map<string, DrupalResource>
): AnimalCardWithRef => {
    const a = (r.attributes ?? {}) as AnimalCardAttrs;

    const rawMediaRels = r.relationships?.field_animal_images?.data;
    const mediaIds: MediaRelData[] = Array.isArray(rawMediaRels) ? rawMediaRels : [];
    const rawReferenceRel = r.relationships?.field_reference?.data;
    const referenceRels = toRelationshipArray(rawReferenceRel);
    const referenceRel = referenceRels[0] ?? null;

    return {
        id: r.id,
        name: a.field_animal_name ?? a.info ?? "",
        description: toPlainText(a.field_animal_description?.value ?? a.field_text?.value ?? ""),
        images: getImagesFromMedia(mediaIds, includedMap),
        referenceNodeId: referenceRel?.id ?? null,
        referenceNodeType: referenceRel?.type ?? null,
        referenceNodeIds: referenceRels.map((rel) => rel.id),
    };
};

// ─── Atoms ───────────────────────────────────────────────────────────────────

export type AnimalBlocks = {
    textBlocks: TextBlockWithRef[];
    animalCards: AnimalCardWithRef[];
};

export const animalBlocksAtom = atom<AnimalBlocks>({ textBlocks: [], animalCards: [] });
export const animalBlocksLoadingAtom = atom<boolean>(false);
export const animalBlocksErrorAtom = atom<string | null>(null);

export const fetchAnimalBlocksAtom = atom(null, async (_get, set) => {
    set(animalBlocksLoadingAtom, true);
    set(animalBlocksErrorAtom, null);

    try {
        const [textRes, cardRes] = await Promise.all([
            fetch(`${drupalPath}/jsonapi/block_content/text_block`, fetchOptions()),
            fetch(
                `${drupalPath}/jsonapi/block_content/new_animal_by_name?include=field_animal_images,field_animal_images.field_media_image,field_reference`,
                fetchOptions()
            ),
        ]);

        if (!textRes.ok) throw new Error(`text_block fetch failed: ${textRes.status}`);
        if (!cardRes.ok) throw new Error(`new_animal_by_name fetch failed: ${cardRes.status}`);

        const [textJson, cardJson] = await Promise.all([
            textRes.json() as Promise<{ data: DrupalResource[] }>,
            cardRes.json() as Promise<{ data: DrupalResource[]; included?: DrupalResource[] }>,
        ]);

        const includedMap = buildIncludedMap(cardJson.included ?? []);

        set(animalBlocksAtom, {
            textBlocks: (textJson.data ?? []).map(mapTextBlock),
            animalCards: (cardJson.data ?? []).map((r) => mapAnimalCard(r, includedMap)) as AnimalCardWithRef[],
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error loading animal blocks.";
        set(animalBlocksErrorAtom, message);
    } finally {
        set(animalBlocksLoadingAtom, false);
    }
});

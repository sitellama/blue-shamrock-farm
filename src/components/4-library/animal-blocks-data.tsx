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

// ─── text_block ───────────────────────────────────────────────────────────────

export type TextBlock = {
    id: string;
    html: string;
    centerText: boolean;
    colorTheme: string;
};

type TextBlockAttrs = {
    field_text_block?: { processed?: string };
    field_center_text?: boolean;
    field_color_theme?: string;
};

const mapTextBlock = (r: DrupalResource): TextBlock => {
    const a = (r.attributes ?? {}) as TextBlockAttrs;
    return {
        id: r.id,
        html: a.field_text_block?.processed ?? "",
        centerText: a.field_center_text ?? false,
        colorTheme: a.field_color_theme ?? "",
    };
};

// ─── img_left_text_right ─────────────────────────────────────────────────────

export type AnimalCard = {
    id: string;
    name: string;
    descriptionHtml: string;
    images: { url: string; alt: string }[];
};

type AnimalCardAttrs = {
    field_animal_name?: string;
    field_text?: { processed?: string };
};

type MediaRelData = { id: string; type: string };

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
): AnimalCard => {
    const a = (r.attributes ?? {}) as AnimalCardAttrs;

    const rawMediaRels = r.relationships?.field_img_left?.data;
    const mediaIds: MediaRelData[] = Array.isArray(rawMediaRels) ? rawMediaRels : [];

    return {
        id: r.id,
        name: a.field_animal_name ?? "",
        descriptionHtml: a.field_text?.processed ?? "",
        images: getImagesFromMedia(mediaIds, includedMap),
    };
};

// ─── Atoms ───────────────────────────────────────────────────────────────────

export type AnimalBlocks = {
    textBlocks: TextBlock[];
    animalCards: AnimalCard[];
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
                `${drupalPath}/jsonapi/block_content/img_left_text_right?include=field_img_left,field_img_left.field_media_image`,
                fetchOptions()
            ),
        ]);

        if (!textRes.ok) throw new Error(`text_block fetch failed: ${textRes.status}`);
        if (!cardRes.ok) throw new Error(`img_left_text_right fetch failed: ${cardRes.status}`);

        const [textJson, cardJson] = await Promise.all([
            textRes.json() as Promise<{ data: DrupalResource[] }>,
            cardRes.json() as Promise<{ data: DrupalResource[]; included?: DrupalResource[] }>,
        ]);

        const includedMap = buildIncludedMap(cardJson.included ?? []);

        set(animalBlocksAtom, {
            textBlocks: (textJson.data ?? []).map(mapTextBlock),
            animalCards: (cardJson.data ?? []).map((r) => mapAnimalCard(r, includedMap)),
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error loading animal blocks.";
        set(animalBlocksErrorAtom, message);
    } finally {
        set(animalBlocksLoadingAtom, false);
    }
});

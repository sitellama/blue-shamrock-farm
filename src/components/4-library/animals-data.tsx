import { atom } from "jotai";

export type Animal = {
    id: string;
    name: string;
    image: string;
    imageAlt: string;
    linkUrl: string;
    description: string;
    featured: boolean;
    sortOrder: number;
};

type DrupalResource = {
    id: string;
    type: string;
    attributes?: Record<string, unknown>;
    relationships?: Record<string, { data?: { id: string; type: string; meta?: Record<string, unknown> } | null }>;
};

type DrupalJsonApiResponse = {
    data: DrupalResource[];
    included?: DrupalResource[];
};

type DrupalLinkField = {
    uri?: string;
    title?: string;
};

type DrupalFormattedText = {
    value?: string;
};

type DrupalAnimalAttributes = {
    title?: string;
    field_field_description?: DrupalFormattedText;
    field_field_link_url?: DrupalLinkField;
    field_field_featured?: boolean;
    field_field_sort_order?: number | null;
};

const drupalBaseUrl = (import.meta.env.VITE_DRUPAL_BASE_URL || "").replace(/\/$/, "");
const drupalOrigin = (() => {
    try { return new URL(drupalBaseUrl).origin; } catch { return drupalBaseUrl; }
})();
const drupalAnimalsEndpoint = import.meta.env.VITE_DRUPAL_ANIMALS_ENDPOINT || "";
const drupalIncludeCredentials = import.meta.env.VITE_DRUPAL_INCLUDE_CREDENTIALS === "true";

const resolveUrl = (baseUrl: string, maybeUrl?: string): string => {
    if (!maybeUrl) return "";
    if (maybeUrl.startsWith("http://") || maybeUrl.startsWith("https://")) return maybeUrl;
    if (!baseUrl) return maybeUrl;
    return `${baseUrl}${maybeUrl.startsWith("/") ? maybeUrl : `/${maybeUrl}`}`;
};

const toText = (value?: string, fallback = ""): string => {
    if (typeof value !== "string") return fallback;
    return value.trim() || fallback;
};

const getImage = (
    resource: DrupalResource,
    includedByKey: Map<string, DrupalResource>
): { url: string; alt: string } => {
    const relation = resource.relationships?.field_image?.data;
    if (!relation) return { url: "", alt: "" };

    // field_image is a direct file reference (file--file), not a media entity
    // Alt text is stored in relationship meta by Drupal's image field
    const alt = (relation.meta?.alt as string) ?? "";
    const file = includedByKey.get(`${relation.type}:${relation.id}`);
    const fileAttrs = file?.attributes || {};
    const rawUrl = (fileAttrs.uri as { url?: string } | undefined)?.url || "";

    return { url: resolveUrl(drupalOrigin, rawUrl), alt };
};

const mapDrupalToAnimal = (
    resource: DrupalResource,
    includedByKey: Map<string, DrupalResource>
): Animal => {
    const attrs = (resource.attributes || {}) as DrupalAnimalAttributes;
    const name = toText(attrs.title, "Animal");
    const { url: imageUrl, alt: imageAlt } = getImage(resource, includedByKey);

    return {
        id: resource.id,
        name,
        image: imageUrl,
        imageAlt: toText(imageAlt, name),
        linkUrl: toText(attrs.field_field_link_url?.uri),
        description: toText(attrs.field_field_description?.value),
        featured: attrs.field_field_featured === true,
        sortOrder: typeof attrs.field_field_sort_order === "number" ? attrs.field_field_sort_order : 999,
    };
};

const buildRequestUrl = (): string => {
    if (drupalAnimalsEndpoint.startsWith("http://") || drupalAnimalsEndpoint.startsWith("https://")) {
        return drupalAnimalsEndpoint;
    }
    if (drupalAnimalsEndpoint.startsWith("/")) return drupalAnimalsEndpoint;
    return resolveUrl(drupalBaseUrl, drupalAnimalsEndpoint);
};

export const animalsAtom = atom<Animal[]>([]);
export const animalsLoadingAtom = atom<boolean>(false);
export const animalsErrorAtom = atom<string | null>(null);

export const fetchAnimalsAtom = atom(null, async (_get, set) => {
    const requestUrl = buildRequestUrl();

    if (!requestUrl) {
        set(animalsAtom, []);
        set(animalsErrorAtom, "Missing Drupal animals endpoint configuration.");
        set(animalsLoadingAtom, false);
        return;
    }

    set(animalsLoadingAtom, true);
    set(animalsErrorAtom, null);

    try {
        const response = await fetch(requestUrl, {
            credentials: drupalIncludeCredentials ? "include" : "same-origin",
            headers: { Accept: "application/vnd.api+json" },
        });

        if (!response.ok) {
            const body = await response.text().catch(() => "");
            throw new Error(`Drupal request failed with status ${response.status}${body ? `: ${body.slice(0, 300)}` : ""}`);
        }

        const json = (await response.json()) as DrupalJsonApiResponse;
        const includedByKey = new Map<string, DrupalResource>(
            (json.included || []).map((item) => [`${item.type}:${item.id}`, item])
        );

        const mapped = (json.data || [])
            .filter((item) => item.type === "node--animal")
            .map((item) => mapDrupalToAnimal(item, includedByKey))
            .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));

        set(animalsAtom, mapped);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error loading animals.";
        set(animalsAtom, []);
        set(animalsErrorAtom, message);
    } finally {
        set(animalsLoadingAtom, false);
    }
});

/**
 * Groups animals into chunks of 5: 4 regular + 1 featured.
 * Featured animals are pulled out first; remaining are regular cards.
 * Groups are built in sort order.
 */
export const groupAnimals = (animals: Animal[]): { regular: Animal[]; featured: Animal }[] => {
    const groups: { regular: Animal[]; featured: Animal }[] = [];
    let regularBuffer: Animal[] = [];

    for (const animal of animals) {
        if (animal.featured) {
            groups.push({ regular: regularBuffer.slice(0, 4), featured: animal });
            regularBuffer = regularBuffer.slice(4);
        } else {
            regularBuffer.push(animal);
        }
    }

    return groups;
};

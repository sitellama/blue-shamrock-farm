import { atom } from "jotai";

export type Service = {
    image: string;
    imageAlt: string;
    label: string;
    content: string;
    pdfName: string;
    pdfUrl: string;
    onsite?: boolean;
    travel?: boolean;
};

type DrupalResource = {
    id: string;
    type: string;
    attributes?: Record<string, unknown>;
    relationships?: Record<string, { data?: { id: string; type: string } | null }>;
};

type DrupalJsonApiResponse = {
    data: DrupalResource[];
    included?: DrupalResource[];
};

type DrupalFormattedText = {
    value?: string;
    processed?: string;
    format?: string;
};

type DrupalLinkField = {
    uri?: string;
    title?: string;
};

type DrupalServiceAttributes = {
    title?: string;
    field_field_content?: DrupalFormattedText;
    field_field_pdf_name?: string;
    field_field_pdf_url?: DrupalLinkField;
    field_field_onsite?: boolean;
    field_field_travel?: boolean;
    field_field_sort_order?: number | null;
};

const drupalBaseUrl = (import.meta.env.VITE_DRUPAL_BASE_URL || "").replace(/\/$/, "");
const drupalOrigin = (() => {
    try { return new URL(drupalBaseUrl).origin; } catch { return drupalBaseUrl; }
})();
const drupalServicesEndpoint = import.meta.env.VITE_DRUPAL_SERVICES_ENDPOINT || "";
const drupalIncludeCredentials = import.meta.env.VITE_DRUPAL_INCLUDE_CREDENTIALS === "true";

const resolveUrl = (baseUrl: string, maybeUrl?: string): string => {
    if (!maybeUrl) {
        return "";
    }

    if (maybeUrl.startsWith("http://") || maybeUrl.startsWith("https://")) {
        return maybeUrl;
    }

    if (!baseUrl) {
        return maybeUrl;
    }

    return `${baseUrl}${maybeUrl.startsWith("/") ? maybeUrl : `/${maybeUrl}`}`;
};

const toText = (value?: string, fallback = ""): string => {
    if (typeof value !== "string") {
        return fallback;
    }

    const trimmed = value.trim();
    return trimmed || fallback;
};

const getServiceLinkUrl = (attrs: DrupalServiceAttributes): string => {
    const raw = toText(attrs.field_field_pdf_url?.uri);
    if (!raw) return "";
    if (raw.startsWith("internal:")) return raw.replace(/^internal:/, "") || "/";
    return raw;
};

const getImageFromRelationship = (
    resource: DrupalResource,
    includedByKey: Map<string, DrupalResource>
): { url: string; alt: string } => {
    const relation = resource.relationships?.field_field_image?.data;
    if (!relation) {
        return { url: "", alt: "" };
    }

    const media = includedByKey.get(`${relation.type}:${relation.id}`);
    const fileRelation = media?.relationships?.field_media_image?.data;
    if (!fileRelation) {
        return { url: "", alt: "" };
    }

    const alt = (fileRelation as { meta?: { alt?: string } }).meta?.alt ?? "";

    const file = includedByKey.get(`${fileRelation.type}:${fileRelation.id}`);
    const fileAttrs = file?.attributes || {};
    const rawUrl =
        (fileAttrs.uri as { url?: string } | undefined)?.url ||
        (fileAttrs.image_style_uri as { large?: string } | undefined)?.large ||
        "";

    return { url: resolveUrl(drupalOrigin, rawUrl), alt };
};

const mapDrupalToService = (
    resource: DrupalResource,
    includedByKey: Map<string, DrupalResource>
): Service => {
    const attrs = (resource.attributes || {}) as DrupalServiceAttributes;
    const title = toText(attrs.title, "Service");
    const content = toText(attrs.field_field_content?.value);
    const { url: imageUrl, alt: imageAltText } = getImageFromRelationship(resource, includedByKey);

    console.log("Service attributes:", attrs);
    console.log("field_field_pdf_url:", attrs.field_field_pdf_url);

    return {
        image: imageUrl,
        imageAlt: toText(imageAltText, title),
        label: title,
        content,
        pdfName: toText(attrs.field_field_pdf_name, "Learn more"),
        pdfUrl: getServiceLinkUrl(attrs),
        onsite: attrs.field_field_onsite === true,
        travel: attrs.field_field_travel === true,
    };
};

const buildRequestUrl = (): string => {
    if (drupalServicesEndpoint.startsWith("http://") || drupalServicesEndpoint.startsWith("https://")) {
        return drupalServicesEndpoint;
    }

    // Root-relative path (e.g. /drupal-jsonapi/...) — let the browser resolve against
    // the current origin so Vite's dev proxy or a production reverse-proxy can handle it.
    if (drupalServicesEndpoint.startsWith("/")) {
        return drupalServicesEndpoint;
    }

    return resolveUrl(drupalBaseUrl, drupalServicesEndpoint);
};

export const servicesAtom = atom<Service[]>([]);
export const servicesLoadingAtom = atom<boolean>(false);
export const servicesErrorAtom = atom<string | null>(null);

export const fetchServicesAtom = atom(null, async (_get, set) => {
    const requestUrl = buildRequestUrl();

    if (!requestUrl) {
        set(servicesAtom, []);
        set(servicesErrorAtom, "Missing Drupal JSON:API endpoint configuration.");
        set(servicesLoadingAtom, false);
        return;
    }

    set(servicesLoadingAtom, true);
    set(servicesErrorAtom, null);

    try {
        const response = await fetch(requestUrl, {
            credentials: drupalIncludeCredentials ? "include" : "same-origin",
            headers: {
                Accept: "application/vnd.api+json",
            },
        });

        if (!response.ok) {
            throw new Error(`Drupal request failed with status ${response.status}`);
        }

        const json = (await response.json()) as DrupalJsonApiResponse;
        const includedByKey = new Map<string, DrupalResource>(
            (json.included || []).map((item) => [`${item.type}:${item.id}`, item])
        );

        const mapped = (json.data || [])
            .filter((item) => item.type === "node--service")
            .map((item) => {
                const attrs = (item.attributes || {}) as DrupalServiceAttributes;
                return {
                    service: mapDrupalToService(item, includedByKey),
                    sortOrder: attrs.field_field_sort_order,
                };
            })
            .sort((a, b) => {
                const aOrder = typeof a.sortOrder === "number" ? a.sortOrder : Number.MAX_SAFE_INTEGER;
                const bOrder = typeof b.sortOrder === "number" ? b.sortOrder : Number.MAX_SAFE_INTEGER;
                if (aOrder !== bOrder) {
                    return aOrder - bOrder;
                }
                return a.service.label.localeCompare(b.service.label);
            })
            .map((item) => item.service);
        set(servicesAtom, mapped);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error loading services.";
        set(servicesAtom, []);
        set(servicesErrorAtom, message);
    } finally {
        set(servicesLoadingAtom, false);
    }
});

export const filteredServicesAtom = atom<Service[]>(
    (get) => {
        const all = get(servicesAtom);
        const selected = get(dropdownSelectionAtom);

        const onsite = get(onsiteAtom);
        const travel = get(travelAtom);

        if (selected === "All") {
            const rv = all.filter((service) => {
                if (!onsite && !travel) {
                    return true;
                }
                const matched = !!service.onsite === onsite || !!service.travel === travel;
                return matched;
            });
            return rv;
        }

        const rv = all.filter((service) => {
            return selected === service.label;
        });

        return rv;
    }
);

// Dropdown List

export const dropdownSelectionAtom = atom<string>("All");

// Services Events

export const onsiteAtom = atom<boolean>(true);
export const travelAtom = atom<boolean>(true);
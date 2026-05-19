export type ContentOrigin = "animals" | "services";

export type NotFoundMeta = {
    title: string;
    backTo: string;
    backLabel: string;
};

export type ContentPageState =
    | { kind: "loading"; message: string }
    | { kind: "error"; message: string }
    | { kind: "not-found"; meta: NotFoundMeta }
    | { kind: "service" }
    | { kind: "animal" };

type ResolveContentPageStateArgs = {
    animalsLoading: boolean;
    servicesLoading: boolean;
    animalsError: string | null;
    servicesError: string | null;
    hasAnimal: boolean;
    hasService: boolean;
    origin: ContentOrigin | null;
};

const ROUTE_PREFIX_BY_ORIGIN: Record<ContentOrigin, string> = {
    animals: "/animals",
    services: "/services",
};

const NOT_FOUND_META_BY_ORIGIN: Record<ContentOrigin, NotFoundMeta> = {
    animals: {
        title: "Animal not found.",
        backTo: "/animals",
        backLabel: "Back to animals",
    },
    services: {
        title: "Service not found.",
        backTo: "/services",
        backLabel: "Back to services",
    },
};

const DEFAULT_ORIGIN: ContentOrigin = "animals";

export const normalizePath = (value?: string): string => {
    if (!value) return "";
    const raw = value.trim();
    if (!raw) return "";

    try {
        const parsed = new URL(raw, window.location.origin);
        return (parsed.pathname || "/").replace(/\/+$/, "") || "/";
    } catch {
        return (raw.startsWith("/") ? raw : `/${raw}`).replace(/\/+$/, "") || "/";
    }
};

export const getSameOriginReferrerPath = (referrer: string, currentOrigin: string): string => {
    if (!referrer) return "";

    try {
        const parsed = new URL(referrer);
        return parsed.origin === currentOrigin ? parsed.pathname : "";
    } catch {
        return "";
    }
};

export const inferContentOrigin = (fromState: string, referrerPath: string): ContentOrigin | null => {
    const cameFromServices =
        fromState.startsWith(ROUTE_PREFIX_BY_ORIGIN.services) ||
        referrerPath.startsWith(ROUTE_PREFIX_BY_ORIGIN.services);
    const cameFromAnimals =
        fromState.startsWith(ROUTE_PREFIX_BY_ORIGIN.animals) ||
        referrerPath.startsWith(ROUTE_PREFIX_BY_ORIGIN.animals);

    if (cameFromServices && !cameFromAnimals) return "services";
    if (cameFromAnimals && !cameFromServices) return "animals";
    return null;
};

export const getNotFoundMeta = (origin: ContentOrigin | null): NotFoundMeta => {
    return NOT_FOUND_META_BY_ORIGIN[origin || DEFAULT_ORIGIN];
};

export const resolveContentPageState = ({
    animalsLoading,
    servicesLoading,
    animalsError,
    servicesError,
    hasAnimal,
    hasService,
    origin,
}: ResolveContentPageStateArgs): ContentPageState => {
    if (animalsLoading || servicesLoading) {
        return { kind: "loading", message: "Loading..." };
    }

    if (animalsError) {
        return { kind: "error", message: `Error loading animal data: ${animalsError}` };
    }

    if (servicesError) {
        return { kind: "error", message: `Error loading service data: ${servicesError}` };
    }

    if (!hasAnimal && !hasService) {
        return { kind: "not-found", meta: getNotFoundMeta(origin) };
    }

    if (!hasAnimal && hasService) {
        return { kind: "service" };
    }

    return { kind: "animal" };
};
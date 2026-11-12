
import { useEffect, useState } from "react";
import icon from "../../assets/ultrasound-icon.webp";
import background from "../../assets/puppy-banner-background.webp";
import { Link, useLocation } from "react-router-dom";

const API = "/drupal/jsonapi";
const DRUPAL_ORIGIN = "https://blueshamrock.farm";

type PuppyBannerProps = {
    pagelink: boolean;
    announcement: boolean;
    description: boolean;
};

type ResourceIdentifier = {
    type: string;
    id: string;
};

type DrupalResource = ResourceIdentifier & {
    attributes?: {
        status?: boolean;
        field_activate_puppy_banner?: boolean;
        field_activate_on_puppy_banner?: boolean;
        field_puppy_breed?: string[] | null;
        field_litter_announcement_desc?: string | null;
        field_litter_description?: string | null;
        uri?: {
            url?: string;
        };
    };
    relationships?: {
        field_litter_announcement_poster?: {
            data?: ResourceIdentifier | null;
        };
        field_media_image?: {
            data?: ResourceIdentifier | null;
        };
    };
};

type DrupalResponse = {
    data: DrupalResource[];
    included?: DrupalResource[];
};

type Litter = {
    id: string;
    breed: string;
    url: string;
    announcement: string;
    description: string;
    imageUrl: string | null;
};

const breedMap: Record<string, { name: string; url: string; }> = {
    tornjak: {
        name: "Tornjak",
        url: "/tornjak",
    },
    croatian_sheepdog: {
        name: "Croatian Sheepdog",
        url: "/croatian-sheepdog",
    },
};

export function PuppyBanner({
    pagelink,
    announcement,
    description,
}: PuppyBannerProps) {
    const [litters, setLitters] = useState<Litter[]>([]);

    const [bannerEnabled, setBannerEnabled] = useState(false);

    const { pathname } = useLocation();

    const currentPath = pathname.replace(/\/+$/, "") || "/";

    const filteredLitters = litters.filter((litter) => {
        // Homepage: show all active litters.
        if (currentPath === "/") {
            return true;
        }

        // Breed pages: only show matching litters.
        return litter.url === currentPath;
    });

    useEffect(() => {
        const controller = new AbortController();

        async function loadBannerSettings() {
            try {
                const response = await fetch(
                    `${API}/node/puppy_banner`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error(
                        `Drupal banner settings returned HTTP ${response.status}`
                    );
                }

                const json: DrupalResponse = await response.json();

                const enabled = json.data.some(
                    (item) =>
                        item.attributes?.status === true &&
                        item.attributes?.field_activate_puppy_banner === true
                );

                if (!controller.signal.aborted) {
                    setBannerEnabled(enabled);
                }
            } catch (error) {
                if (!controller.signal.aborted) {
                    console.error("Error loading puppy banner settings:", error);
                }
            }
        }

        async function loadLitters() {
            try {
                const response = await fetch(
                    `${API}/node/puppy_litters?include=field_litter_announcement_poster.field_media_image`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error(
                        `Drupal returned HTTP ${response.status}`
                    );
                }

                const json: DrupalResponse = await response.json();
                const included = json.included ?? [];

                const findIncluded = (
                    identifier: ResourceIdentifier | null | undefined
                ) =>
                    identifier
                        ? included.find(
                            (item) =>
                                item.id === identifier.id &&
                                item.type === identifier.type
                        )
                        : undefined;

                const activeLitters: Litter[] = [];

                for (const item of json.data ?? []) {
                    const attrs = item.attributes;

                    if (
                        attrs?.status !== true ||
                        attrs.field_activate_on_puppy_banner !== true
                    ) {
                        continue;
                    }

                    const media = findIncluded(
                        item.relationships
                            ?.field_litter_announcement_poster?.data
                    );

                    const file = findIncluded(
                        media?.relationships?.field_media_image?.data
                    );

                    const relativeImageUrl = file?.attributes?.uri?.url;

                    const imageUrl = relativeImageUrl
                        ? new URL(relativeImageUrl, DRUPAL_ORIGIN).href
                        : null;

                    for (const breedKey of attrs.field_puppy_breed ?? []) {
                        const breed = breedMap[breedKey];

                        if (!breed) continue;

                        activeLitters.push({
                            id: `${item.id}-${breedKey}`,
                            breed: breed.name,
                            url: breed.url,
                            announcement:
                                attrs.field_litter_announcement_desc ?? "",
                            description:
                                attrs.field_litter_description ?? "",
                            imageUrl,
                        });
                    }
                }

                if (!controller.signal.aborted) {
                    setLitters(activeLitters);
                }
            } catch (error) {
                if (!controller.signal.aborted) {
                    console.error(
                        "Error loading puppy litters:",
                        error
                    );
                }
            }
        }

        loadBannerSettings();
        loadLitters();

        return () => controller.abort();
    }, []);

    if (
        !bannerEnabled ||
        (
            (currentPath === "/tornjak" ||
                currentPath === "/croatian-sheepdog") &&
            filteredLitters.length === 0
        )
    ) {
        return null;
    }

    return (
        <div
            className="block bg-blue-dark text-center text-white"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="max-content sm:w-[40rem] py-4 sm:py-8">
                <img src={icon} alt="" className="h-20 mx-auto" />

                <div className="my-6">
                    <h1 className="text-5xl mb-0">
                        We have puppies !
                    </h1>

                    <p className="mt-0 subheading">
                        Please reach out via{" "}
                        <a href="https://www.facebook.com/blueshamrockfarm">
                            facebook
                        </a>{" "}
                        or our{" "}
                        <a href="#contact">
                            contact form
                        </a>{" "}
                        for more information.
                    </p>
                </div>

                {filteredLitters.map((litter) => (
                    <div key={litter.id}>
                        {pagelink && (
                            <Link
                                to={litter.url}
                                className="no-underline"
                            >
                                <p className="mb-8">
                                    &#10084;{" "}
                                    <span className="uppercase underline my-1">
                                        {litter.breed} Puppies:
                                    </span>{" "}
                                    {litter.announcement}
                                </p>
                            </Link>
                        )}

                        {announcement && litter.imageUrl && (
                            <>
                                <span>{litter.announcement}</span>
                                <img
                                    src={litter.imageUrl}
                                    className="mx-auto"
                                    alt={`${litter.breed} litter announcement`}
                                    loading="lazy"
                                />
                            </>
                        )}

                        {description && litter.description && (
                            <p className="mb-8">
                                {litter.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

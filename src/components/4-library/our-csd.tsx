import cigoImg from "../../assets/csd-profile.webp";
import aryaImg from "../../assets/arya-profile-pic.webp";
import { ExpandableContent } from "./expandable-content";
import { useEffect, useState } from "react";

type DrupalLink = {
    uri: string;
    title: string;
    options: unknown[];
} | null;

export function OurCroatianSheepdogs() {
    type CSDProfile = {
        id: string;
        attributes: {
            title: string;
            status: boolean;
            field_csd_registered_name?: string | null;
            field_csd_profile_summary: string;
            field_csd_titles_earned?: string;
            field_csd_pedigree_link: DrupalLink;
            field_csd_ofa_link: DrupalLink;
            field_csd_dna_testing: DrupalLink;
            field_csd_animals_list: string;
            field_field_csd_fun_facts?: string[];
        };
        relationships: {
            field_csd_profile_image?: {
                data: {
                    id: string;
                    type: string;
                } | null;
            };
        };
        imageUrl?: string | null;
    };


    const [profiles, setProfiles] = useState<CSDProfile[]>([]);

    useEffect(() => {
        async function loadProfiles() {
            try {
                const response = await fetch(
                    "/drupal/jsonapi/node/csd_profiles?include=field_csd_profile_image.field_media_image"
                );

                if (!response.ok) {
                    throw new Error(`Drupal returned ${response.status}`);
                }

                const json = await response.json();

                const included = json.included ?? [];

                const profilesWithImages = json.data.map((profile: CSDProfile) => {
                    const mediaId =
                        profile.relationships.field_csd_profile_image?.data?.id;

                    const media = included.find(
                        (item: any) =>
                            item.type === "media--image" &&
                            item.id === mediaId
                    );

                    const fileId = media?.relationships?.field_media_image?.data?.id;

                    const file = included.find(
                        (item: any) =>
                            item.type === "file--file" &&
                            item.id === fileId
                    );

                    const imagePath = file?.attributes?.uri?.url;

                    return {
                        ...profile,
                        imageUrl: imagePath
                            ? new URL(imagePath, "https://blueshamrock.farm").href
                            : null,
                    };
                });

                setProfiles(profilesWithImages);

            } catch (error) {
                console.error("Error loading CSD profiles:", error);
            }
        }

        loadProfiles();
    }, []);

    
    return (
        <div>
            <section className="max-content text-center">
                <div>
                    <h2>Our Croatian Sheepdogs</h2>
                    <p >Unlike many breeds developed primarily for appearance, the Croatian Sheepdog evolved through practical farm work. Only dogs demonstrating intelligence, sound temperament, endurance, and exceptional working ability were selected for breeding. During the 20th century, Croatian breeders and cynologists established the modern breed standard while preserving the characteristics that had defined the breed for generations.</p>
                    <hr className="h-1 border-0 bg-blue-dark w-full mt-16 mx-auto"></hr>
                </div>
            </section>

             {profiles
                .filter((profile) => profile.attributes.status)
                .map((profile, index) => {
                    const dog = profile.attributes;
                    const image = profile.imageUrl;
                    const reversed = index % 2 === 1;

                    return (
                        <section
                            key={profile.id}
                            className="py-12 sm:py-16"
                        >
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:items-center md:gap-y-8 md:grid-cols-2 md:gap-x-16">

                                    <div className={reversed ? "md:order-2" : ""}>
                                        {image && (
                                            <img
                                                className="w-full max-w-lg mx-auto"
                                                src={image}
                                                alt={dog.title}
                                            />
                                        )}
                                    </div>

                                    <div className={reversed ? "md:order-1" : ""}>
                                        <h2>{dog.title}</h2>
                                        <p>{dog.field_csd_profile_summary}</p>
                                    </div>
                                </div>

                                <ExpandableContent title={`${dog.title}'s Details`}>
                                    {dog.field_csd_registered_name && (
                                        <p className="mt-0">
                                            <span className="subheading mb-0">
                                                Full Registered Name:{" "}
                                            </span>
                                            {dog.field_csd_registered_name}
                                        </p>
                                    )}

                                    {dog.field_csd_titles_earned && (
                                        <>
                                            <p className="subheading mb-0">
                                                Titles Earned
                                            </p>
                                            <p className="mt-0">
                                                {dog.field_csd_titles_earned}
                                            </p>
                                        </>
                                    )}

                                    {dog.field_csd_pedigree_link?.uri && (
                                        <p>
                                            <a
                                                href={dog.field_csd_pedigree_link.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Pedigree
                                            </a>
                                        </p>
                                    )}

                                    {dog.field_csd_ofa_link?.uri ? (
                                        <p>
                                            <a
                                                href={dog.field_csd_ofa_link.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                OFA testing
                                            </a>
                                        </p>
                                    ) : (
                                        <p>OFA testing - Not old enough yet</p>
                                    )}

                                    {dog.field_csd_dna_testing?.uri && (
                                        <p>
                                            <a
                                                href={dog.field_csd_dna_testing.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {dog.field_csd_dna_testing.title || "DNA testing"}
                                            </a>
                                        </p>
                                    )}

                                    {dog.field_csd_animals_list && (
                                        <>
                                            <p className="subheading mb-0">
                                                Animals Worked With
                                            </p>
                                            <p className="mt-0">
                                                {dog.field_csd_animals_list}
                                            </p>
                                        </>
                                    )}

                                    {dog.field_field_csd_fun_facts?.length ? (
                                        <>
                                            <p className="subheading mb-0">
                                                Fun Facts
                                            </p>
                                            <ul className="list-disc list-inside ml-4">
                                                {dog.field_field_csd_fun_facts.map(
                                                    (fact, factIndex) => (
                                                        <li key={factIndex}>{fact}</li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    ) : null}

                                </ExpandableContent>
                            </div>
                        </section>
                    );
                })}

            <hr className="h-1 border-0 bg-blue-dark max-content mt-16 mx-auto"></hr>
        </div>
    );
}
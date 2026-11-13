import meetTornjaks from "../../assets/pluto-and-ari.webp";
import plutoImg from "../../assets/pluto-with-goat.webp";
import nikaImg from "../../assets/nika-with-goats.webp";
import ariImg from "../../assets/ari-with-llamas.webp";
import { ExpandableContent } from "./expandable-content";
import { useEffect, useState } from "react";

const profileImages: Record<string, string> = {
    Pluto: plutoImg,
    Nika: nikaImg,
    Ariela: ariImg,
};

export function OurTornjaks() {
    type TornjakProfile = {
        id: string;
        attributes: {
            title: string;
            status: boolean;
            field_tornjak_registered_name?: string | null;
            field_tornjak_profile_summary: string;
            field_tornjak_titles_earned?: string;
            field_tornjak_pedigree_link: {
                uri: string;
                title: string;
                options: unknown[];
            } | null;
            field_tornjak_ofa_link: {
                uri: string;
                title: string;
                options: unknown[];
            } | null;
            field_tornjak_dna_testing: {
                uri: string;
                title: string;
                options: unknown[];
            } | null;
            field_tornjak_animals_list: string;
            field_field_tornjak_fun_facts?: string[];
        };
    };

    const [profiles, setProfiles] = useState<TornjakProfile[]>([]);

    useEffect(() => {
        async function loadProfiles() {
            try {
                const response = await fetch(
                    "/drupal/jsonapi/node/tornjak_profiles"
                );

                if (!response.ok) {
                    throw new Error(`Drupal returned ${response.status}`);
                }

                const json = await response.json();

                setProfiles(json.data);

                console.log("Tornjak profiles:", json.data);
            } catch (error) {
                console.error("Error loading Tornjak profiles:", error);
            }
        }

        loadProfiles();
    }, []);

    return (
        <div>
            <section className="max-content text-center">
                <div>
                    <h2>Our Tornjaks</h2>
                    <p >The Tornjak is a livestock guardian dog originating from Bosnia and Herzegovina and Croatia. The task of protecting all of Blue Shamrock Farm's precious animals falls to our Tornjaks. Whether it is on the farm or at the show ring, we are always proud to introduce our beautiful working dogs!</p>
                    <hr className="h-1 border-0 bg-blue-dark w-full mt-16 mx-auto"></hr>
                </div>
            </section>

            {profiles
                .filter((profile) => profile.attributes.status)
                .map((profile, index) => {
                    const dog = profile.attributes;
                    const image = profileImages[dog.title];
                    const reversed = index % 2 === 1;

                    return (
                        <section
                            key={profile.id}
                            className="py-12 sm:py-16 lg:py-20"
                        >
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">

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
                                        <p>{dog.field_tornjak_profile_summary}</p>
                                    </div>
                                </div>

                                <ExpandableContent title={`${dog.title}'s Details`}>
                                    {dog.field_tornjak_registered_name && (
                                        <p className="mt-0">
                                            <span className="subheading mb-0">
                                                Full Registered Name:{" "}
                                            </span>
                                            {dog.field_tornjak_registered_name}
                                        </p>
                                    )}
                                    
                                    {dog.field_tornjak_titles_earned && (
                                        <>
                                            <p className="subheading mb-0">
                                                Titles Earned
                                            </p>
                                            <p className="mt-0">
                                                {dog.field_tornjak_titles_earned}
                                            </p>
                                        </>
                                    )}

                                    {dog.field_tornjak_pedigree_link?.uri && (
                                        <p>
                                            <a
                                                href={dog.field_tornjak_pedigree_link.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Pedigree
                                            </a>
                                        </p>
                                    )}

                                    {dog.field_tornjak_ofa_link?.uri ? (
                                        <p>
                                            <a
                                                href={dog.field_tornjak_ofa_link.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                OFA testing
                                            </a>
                                        </p>
                                    ) : (
                                        <p>OFA testing - Not old enough yet</p>
                                    )}

                                    {dog.field_tornjak_dna_testing?.uri && (
                                        <p>
                                            <a
                                                href={dog.field_tornjak_dna_testing.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {dog.field_tornjak_dna_testing.title || "DNA testing"}
                                            </a>
                                        </p>
                                    )}

                                    {dog.field_tornjak_animals_list && (
                                        <>
                                            <p className="subheading mb-0">
                                                Animals Worked With
                                            </p>
                                            <p className="mt-0">
                                                {dog.field_tornjak_animals_list}
                                            </p>
                                        </>
                                    )}

                                    {dog.field_field_tornjak_fun_facts?.length ? (
                                        <>
                                            <p className="subheading mb-0">
                                                Fun Facts
                                            </p>
                                            <ul className="list-disc list-inside ml-4">
                                                {dog.field_field_tornjak_fun_facts.map(
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

            {/* <div className="btn-outer bg-blue-dark ">
                <div className="btn-inner">
                    <a href="https://sites.google.com/view/blueshamrockfarm/tornjak" target="_blank" className="btn-a">More Tornjak Details</a>
                </div>
            </div> */}
            <hr className="h-1 border-0 bg-blue-dark  max-content mt-16 mx-auto"></hr>
        </div>
    );
}
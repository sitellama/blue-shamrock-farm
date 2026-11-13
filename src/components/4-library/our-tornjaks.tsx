import meetTornjaks from "../../assets/pluto-and-ari.webp";
import plutoImg from "../../assets/pluto-with-goat.webp";
import nikaImg from "../../assets/nika-with-goats.webp";
import ariImg from "../../assets/ari-with-llamas.webp";
import { ExpandableContent } from "./expandable-content";
import { useEffect, useState } from "react";

export function OurTornjaks() {
    type TornjakProfile = {
        id: string;
        attributes: {
            title: string;
            status: boolean;
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
            {profiles
                .filter((profile) => profile.attributes.status)
                .map((profile) => (
                    <p key={profile.id}>{profile.attributes.title}</p>
                ))}

            <section className="max-content text-center">
                <div>
                    <h2>Our Tornjaks</h2>
                    <p >The Tornjak is a livestock guardian dog originating from Bosnia and Herzegovina and Croatia. The task of protecting all of Blue Shamrock Farm's precious animals falls to our Tornjaks. Whether it is on the farm or at the show ring, we are always proud to introduce our beautiful working dogs!</p>
                    <hr className="h-1 border-0 bg-blue-dark w-full mt-16 mx-auto"></hr>
                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">

                        <div className="">
                            <img className="w-full max-w-lg mx-auto" src={plutoImg} alt="" />
                        </div>

                        <div>
                            <h2>{profiles[0]?.attributes.title}</h2>
                            <p>{profiles[0]?.attributes.field_tornjak_profile_summary}</p>
                        </div>
                    </div>

                    <ExpandableContent title={`${profiles[0]?.attributes.title}'s Details`}>
                        <p className="mt-0"><span className="subheading mb-0">Full Registered Name: </span>Pluto Dalmatinski Vrisak</p>

                        <p className="subheading mb-0">Titles Earned</p>
                        {profiles[0]?.attributes.field_tornjak_titles_earned && (
                            <p className="mt-0">
                                {profiles[0]?.attributes.field_tornjak_titles_earned}
                            </p>
                        )}

                        <p>
                            <a href={profiles[0]?.attributes.field_tornjak_pedigree_link?.uri} target="_blank" rel="noopener noreferrer">Pedigree</a>
                        </p>

                        {/* if there is no value, default to a non link "OFA testing - Not old enough yet" */}
                        {profiles[0]?.attributes.field_tornjak_ofa_link?.uri ? (
                            <p>
                                <a
                                    href={profiles[0].attributes.field_tornjak_ofa_link.uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    OFA testing
                                </a>
                            </p>
                        ) : (
                            <p>OFA testing - Not old enough yet</p>
                        )}

                        <p>
                            <a href={profiles[0]?.attributes.field_tornjak_dna_testing?.uri} target="_blank" rel="noopener noreferrer">
                                {profiles[0]?.attributes.field_tornjak_dna_testing?.title}
                            </a>
                        </p>

                        <p className="subheading mb-0">Animals Worked With</p>

                        <p className="mt-0">
                            {profiles[0]?.attributes.field_tornjak_animals_list}
                        </p>

                        <p className="subheading mb-0">Fun Facts</p>
                        <ul className="list-disc list-inside ml-4">
                            {profiles[0]?.attributes.field_field_tornjak_fun_facts?.map(
                                (fact, index) => (
                                    <li key={index}>{fact}</li>
                                )
                            )}
                        </ul>
                    </ExpandableContent>

                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                        <div className="order-2 md:order-1">
                            <h2>Nika</h2>
                            <p >Nika's offical name is Sara-unique Herceg-bos-tor. She was the very first Tornjak to enter a dog show in the USA. Although she loves and protects all her animals, Nika has a soft spot for the tiny bunnies and guinea pigs. She counts them regularly to make sure everyone is accounted for. </p>
                            <p><a href="https://tornjak.pedigre.net/details.php?id=6513" target="_blank">Pedigree</a></p>
                            <p><a href="https://ofa.org/advanced-search/?appnum=2584057" target="_blank">OFA testing</a></p>
                        </div>

                        <div className="order-1 md:order-1">
                            <img className="w-full max-w-lg mx-auto" src={nikaImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                        <div>
                            <img className="w-full max-w-lg mx-auto" src={ariImg} alt="" />
                        </div>

                        <div>
                            <h2>Ariela </h2>
                            <p >Ariela's offical name is Ariela Hrvatska Dika. She is a big fan of water and loves to help with the chores. She is comfortable around horses, ponies, and miniature horses.</p>
                            <p><a href="https://tornjak.pedigre.net/en/details.php?id=6556 " target="_blank">Pedigree</a></p>
                            <p>OFA testing - Not old enough yet</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="btn-outer bg-blue-dark ">
                <div className="btn-inner">
                    <a href="https://sites.google.com/view/blueshamrockfarm/tornjak" target="_blank" className="btn-a">More Tornjak Details</a>
                </div>
            </div> */}
            <hr className="h-1 border-0 bg-blue-dark  max-content mt-16 mx-auto"></hr>
        </div>
    );
}
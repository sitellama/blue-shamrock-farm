import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/utils/seo";
import { animalsAtom, animalsErrorAtom, animalsLoadingAtom, fetchAnimalsAtom } from "@/components/4-library/animals-data";

export function AnimalPage() {
    const { animalSlug = "" } = useParams();
    const slug = animalSlug.trim().toLowerCase();

    const animals = useAtomValue(animalsAtom);
    const isLoading = useAtomValue(animalsLoadingAtom);
    const error = useAtomValue(animalsErrorAtom);
    const fetchAnimals = useSetAtom(fetchAnimalsAtom);

    useEffect(() => {
        if (!animals.length) void fetchAnimals();
    }, []);

    if (isLoading) return <p className="max-content mt-16">Loading…</p>;
    if (error) return <p className="max-content mt-16">Error loading animal data: {error}</p>;

    const animal = animals.find((a) => a.linkUrl === `/${slug}`);

    if (!animal) return <p className="max-content mt-16">Animal not found. <Link to="/animals">Back to animals</Link></p>;

    return (
        <>
            <SEO
                title={`${animal.name} | Blue Shamrock Farm`}
                description={animal.description || `Learn more about ${animal.name} at Blue Shamrock Farm.`}
                href={`/${slug}`}
            />

            <div className="mb-16 flex flex-col md:flex-row bg-blue-dark">
                <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white">
                    <div>
                        {animal.species && <p className="uppercase tracking-widest text-sm mb-2 opacity-70">{animal.species}</p>}
                        <h1 className="text-5xl md:text-7xl my-4">{animal.name}</h1>
                        {animal.description && <p>{animal.description}</p>}
                        <p className="mt-6"><Link to="/animals" className="text-white">← Back to Animals</Link></p>
                    </div>
                </div>
                {animal.image && (
                    <div className="flex-[1_1_33%] order-first md:order-last">
                        <img src={animal.image} alt={animal.imageAlt} className="w-full h-[250px] md:h-full object-cover" />
                    </div>
                )}
            </div>
        </>
    );
}

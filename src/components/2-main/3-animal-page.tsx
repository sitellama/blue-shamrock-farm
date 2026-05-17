import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/utils/seo";
import { animalsAtom, animalsErrorAtom, animalsLoadingAtom, fetchAnimalsAtom } from "@/components/4-library/animals-data";
import {
    animalBlocksAtom,
    animalBlocksErrorAtom,
    animalBlocksLoadingAtom,
    fetchAnimalBlocksAtom,
} from "@/components/4-library/animal-blocks-data";
// import shamrock from "@/assets/blue-shamrock.webp";
import shamrock from "@/assets/blue-shamrock-3.png";

type CardImage = {
    url: string;
    alt: string;
};

const normalize = (value: string): string =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, " ")
        .trim();

const singularize = (value: string): string => value.replace(/s$/, "");

const tokenSet = (value: string): Set<string> =>
    new Set(
        normalize(value)
            .split(/[-\s]+/)
            .map((v) => singularize(v))
            .filter(Boolean)
    );

const matchesSlugAndSpecies = (slug: string, pageSpecies: string, cardSpecies: string): boolean => {
    const slugTokens = tokenSet(slug);
    const pageSpeciesTokens = tokenSet(pageSpecies);
    const cardSpeciesTokens = tokenSet(cardSpecies);

    if (!slugTokens.size || !cardSpeciesTokens.size) return false;

    const speciesMatch = [...cardSpeciesTokens].some((token) => pageSpeciesTokens.has(token));
    const slugMatch = [...cardSpeciesTokens].some((token) => slugTokens.has(token));

    return speciesMatch || slugMatch;
};

function AnimalCardGallery({ images, name }: { images: CardImage[]; name: string; }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        setSelectedIndex(0);
    }, [images]);

    const selected = images[selectedIndex] || images[0];
    if (!selected) return null;

    return (
        <div className="w-full max-w-[450px] mx-auto">
            <img
                src={selected.url}
                alt={selected.alt || name}
                className="w-full aspect-square object-cover rounded"
            />

            {images.length > 1 && (
                <div className="mt-4 flex flex-wrap gap-3">
                    {images.map((img, i) => (
                        <button
                            key={`${img.url}-${i}`}
                            type="button"
                            onClick={() => setSelectedIndex(i)}
                            className={`rounded border-2 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-dark focus-visible:ring-offset-2 focus-visible:ring-offset-white ${i === selectedIndex ? "border-blue-dark" : "border-gray-300"}`}
                            aria-label={`Show image ${i + 1} for ${name || "animal"}`}
                        >
                            <img src={img.url} alt={img.alt || name} className="h-20 w-20 object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export function AnimalPage() {
    const { animalSlug = "" } = useParams();
    const slug = animalSlug.trim().toLowerCase();

    const animals = useAtomValue(animalsAtom);
    const isLoading = useAtomValue(animalsLoadingAtom);
    const error = useAtomValue(animalsErrorAtom);
    const fetchAnimals = useSetAtom(fetchAnimalsAtom);

    const { textBlocks, animalCards } = useAtomValue(animalBlocksAtom);
    const blocksLoading = useAtomValue(animalBlocksLoadingAtom);
    const blocksError = useAtomValue(animalBlocksErrorAtom);
    const fetchBlocks = useSetAtom(fetchAnimalBlocksAtom);

    useEffect(() => {
        if (!animals.length) void fetchAnimals();
        if (!textBlocks.length && !animalCards.length) void fetchBlocks();
    }, []);

    if (isLoading) return <p className="max-content mt-16">Loading…</p>;
    if (error) return <p className="max-content mt-16">Error loading animal data: {error}</p>;

    const animal = animals.find((a) => a.linkUrl === `/${slug}`);

    if (!animal) return <p className="max-content mt-16">Animal not found. <Link to="/animals">Back to animals</Link></p>;

    const filteredAnimalCards = animalCards.filter((card) =>
        matchesSlugAndSpecies(slug, animal.species || "", card.species || "")
    );
    const cardsToRender = filteredAnimalCards.length ? filteredAnimalCards : animalCards;

    return (
        <>
            <SEO
                title={`${animal.name} | Blue Shamrock Farm`}
                description={animal.description || `Learn more about ${animal.name} at Blue Shamrock Farm.`}
                href={`/${slug}`}
            />

            <div className="mb-16 bg-blue-dark max-h-[300px] ">
                <div className="max-content flex max-h-[300px]">
                    <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[200px] justify-center text-center text-white">
                        <div>
                            {animal.species && <p className="uppercase tracking-widest text-sm mb-2 opacity-70">{animal.species}</p>}
                            <h1 className="text-5xl md:text-7xl my-4">{animal.name}</h1>
                            {animal.description && <p>{animal.description}</p>}
                            <p className="mt-6"><Link to="/animals" className="text-white">← Back to Animals</Link></p>
                        </div>
                    </div>
                    {animal.image && (
                        <div className="flex-[1_1_33%] flex">
                            <div className="p-4 h-full">
                                <img src={animal.image} alt={animal.imageAlt} className="object-cover h-full rounded-full border-4 border-solid border-sky-200" />
                            </div>
                            <img src={shamrock} alt="" className="ml-[-4rem] h-[50%] pb-4 self-end" />
                        </div>
                    )}
                </div>
            </div>

            {blocksError && (
                <p className="max-content mt-4 text-red-700">Error loading animal blocks: {blocksError}</p>
            )}

            {!blocksLoading && (
                <>
                    {textBlocks.map((block) => (
                        <div
                            key={block.id}
                            className={`max-content my-8 ${block.centerText ? "text-center" : ""}`}
                            dangerouslySetInnerHTML={{ __html: block.html }}
                        />
                    ))}

                    {cardsToRender.length > 0 && (
                        <div className="max-content pb-16 space-y-8">
                            {cardsToRender.map((card) => (
                                <section key={card.id} className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16">
                                    <AnimalCardGallery images={card.images} name={card.name} />
                                    <div>
                                        {card.name && <h2 className="mt-0">{card.name}</h2>}
                                        {/* {card.species && <p className="mb-2 opacity-70">{card.species}</p>} */}
                                        {card.descriptionHtml && (
                                            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: card.descriptionHtml }} />
                                        )}
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
}

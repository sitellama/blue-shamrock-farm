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

type CardImage = {
    url: string;
    alt: string;
};

function AnimalCardGallery({ images, name }: { images: CardImage[]; name: string }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        setSelectedIndex(0);
    }, [images]);

    const selected = images[selectedIndex] || images[0];
    if (!selected) return null;

    return (
        <div>
            <img
                src={selected.url}
                alt={selected.alt || name}
                className="w-full h-[320px] object-cover rounded"
            />

            {images.length > 1 && (
                <div className="mt-4 flex flex-wrap gap-3">
                    {images.map((img, i) => (
                        <button
                            key={`${img.url}-${i}`}
                            type="button"
                            onClick={() => setSelectedIndex(i)}
                            className={`rounded border-2 overflow-hidden ${i === selectedIndex ? "border-blue-dark" : "border-gray-300"}`}
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

    const matchesReference = (card: { referenceNodeIds: string[]; referenceNodeId: string | null }): boolean =>
        card.referenceNodeIds.length > 0
            ? card.referenceNodeIds.includes(animal.id)
            : card.referenceNodeId === animal.id;

    const cardsToRender = animalCards.filter((card) => matchesReference(card));

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
                        <section className="max-content mb-16 space-y-8">
                            {cardsToRender.map((card) => (
                                <article key={card.id} className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                                    <AnimalCardGallery images={card.images} name={card.name} />
                                    <div>
                                        {card.name && <h2 className="text-2xl mb-3">{card.name}</h2>}
                                        {card.species && <p className="mb-2 opacity-70">{card.species}</p>}
                                        {card.descriptionHtml && (
                                            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: card.descriptionHtml }} />
                                        )}
                                    </div>
                                </article>
                            ))}
                        </section>
                    )}
                </>
            )}
        </>
    );
}

import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useParams, Link, useLocation } from "react-router-dom";
import { SEO } from "@/utils/seo";
import {
    getSameOriginReferrerPath,
    inferContentOrigin,
    normalizePath,
    resolveContentPageState,
} from "@/utils/content-not-found";
import { animalsAtom, animalsErrorAtom, animalsLoadingAtom, fetchAnimalsAtom } from "@/components/4-library/animals-data";
import {
    fetchServicesAtom,
    servicesAtom,
    servicesErrorAtom,
    servicesLoadingAtom,
} from "./4-services/8-services-data";
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
    const location = useLocation();

    const animals = useAtomValue(animalsAtom);
    const isLoading = useAtomValue(animalsLoadingAtom);
    const error = useAtomValue(animalsErrorAtom);
    const fetchAnimals = useSetAtom(fetchAnimalsAtom);

    const services = useAtomValue(servicesAtom);
    const servicesLoading = useAtomValue(servicesLoadingAtom);
    const servicesError = useAtomValue(servicesErrorAtom);
    const fetchServices = useSetAtom(fetchServicesAtom);

    const { textBlocks, animalCards } = useAtomValue(animalBlocksAtom);
    const blocksLoading = useAtomValue(animalBlocksLoadingAtom);
    const blocksError = useAtomValue(animalBlocksErrorAtom);
    const fetchBlocks = useSetAtom(fetchAnimalBlocksAtom);

    useEffect(() => {
        if (!animals.length) void fetchAnimals();
        if (!services.length) void fetchServices();
        if (!textBlocks.length && !animalCards.length) void fetchBlocks();
    }, []);

    const currentPath = normalizePath(`/${slug}`);
    const animal = animals.find((a) => normalizePath(a.linkUrl) === currentPath);
    const service = services.find((s) => normalizePath(s.pdfUrl) === currentPath);
    const fromState = (location.state as { from?: string } | null)?.from || "";
    const referrerPath = getSameOriginReferrerPath(document.referrer, window.location.origin);
    const origin = inferContentOrigin(fromState, referrerPath);
    const pageState = resolveContentPageState({
        animalsLoading: isLoading,
        servicesLoading,
        animalsError: error,
        servicesError,
        hasAnimal: !!animal,
        hasService: !!service,
        origin,
    });

    if (pageState.kind === "loading" || pageState.kind === "error") {
        return <p className="max-content mt-16">{pageState.message}</p>;
    }

    if (pageState.kind === "not-found") {
        const { title, backTo, backLabel } = pageState.meta;
        return <p className="max-content mt-16">{title} <Link to={backTo}>{backLabel}</Link></p>;
    }

    if (pageState.kind === "service" && service) {
        return (
            <div className="max-content mt-16">
                <h1>{service.label}</h1>
                {service.content && <p>{service.content}</p>}
                <p><Link to="/services">Back to services</Link></p>
            </div>
        );
    }

    const selectedAnimal = animal;
    if (!selectedAnimal) return null;

    const matchesReference = (card: { referenceNodeIds: string[]; referenceNodeId: string | null; }): boolean =>
        card.referenceNodeIds.length > 0
            ? card.referenceNodeIds.includes(selectedAnimal.id)
            : card.referenceNodeId === selectedAnimal.id;

    const cardsToRender = animalCards.filter((card) => matchesReference(card));

    return (
        <>
            <SEO
                title={`${selectedAnimal.name} | Blue Shamrock Farm`}
                description={selectedAnimal.description || `Learn more about ${selectedAnimal.name} at Blue Shamrock Farm.`}
                href={`/${slug}`}
            />

            <div className="mb-16 bg-blue-dark max-h-[300px] ">
                <div className="max-content flex max-h-[300px]">
                    <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[200px] justify-center text-center text-white">
                        <div>
                            <h1 className="text-5xl md:text-7xl my-4">{selectedAnimal.name}</h1>
                            {selectedAnimal.description && <p>{selectedAnimal.description}</p>}
                            <p className="mt-6"><Link to="/animals" className="text-white">← Back to Animals</Link></p>
                        </div>
                    </div>
                    {selectedAnimal.image && (
                        <div className="flex-[1_1_33%] flex">
                            <div className="p-4 h-full">
                                <img src={selectedAnimal.image} alt={selectedAnimal.imageAlt} className="object-cover h-full rounded-full border-4 border-solid border-sky-200" />
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

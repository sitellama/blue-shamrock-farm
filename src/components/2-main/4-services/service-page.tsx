import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/utils/seo";
import {
    normalizePath,
} from "@/utils/content-not-found";
import {
    contentBlocksAtom,
    contentBlocksErrorAtom,
    contentBlocksLoadingAtom,
    fetchContentBlocksAtom,
} from "@/components/4-library/content-blocks-data";
import {
    fetchServicesAtom,
    servicesAtom,
    servicesErrorAtom,
    servicesLoadingAtom,
} from "./8-services-data";

type CardImage = {
    url: string;
    alt: string;
};

function ServiceCardGallery({ images, name }: { images: CardImage[]; name: string; }) {
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
                            aria-label={`Show image ${i + 1} for ${name || "service"}`}
                        >
                            <img src={img.url} alt={img.alt || name} className="h-20 w-20 object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export function ServicePage() {
    const { slug = "" } = useParams();
    const serviceSlug = slug.trim().toLowerCase();

    const services = useAtomValue(servicesAtom);
    const isLoading = useAtomValue(servicesLoadingAtom);
    const error = useAtomValue(servicesErrorAtom);
    const fetchServices = useSetAtom(fetchServicesAtom);

    const { textBlocks, cards: serviceCards } = useAtomValue(contentBlocksAtom);
    const blocksLoading = useAtomValue(contentBlocksLoadingAtom);
    const blocksError = useAtomValue(contentBlocksErrorAtom);
    const fetchBlocks = useSetAtom(fetchContentBlocksAtom);

    useEffect(() => {
        if (!services.length) void fetchServices();
        void fetchBlocks();
    }, []);

    const currentPath = normalizePath(`/${serviceSlug}`);
    const service = services.find((s) => normalizePath(s.linkUrl) === currentPath);

    if (isLoading) {
        return <p className="max-content mt-16">Loading...</p>;
    }

    if (error) {
        return <p className="max-content mt-16">Error loading services: {error}</p>;
    }

    if (!service) {
        return <p className="max-content mt-16">Service not found <Link to="/services">Back to Services</Link></p>;
    }

    const selectedService = service;
    const matchesReference = (card: { referenceNodeIds: string[]; referenceNodeId: string | null; }): boolean =>
        card.referenceNodeIds.length > 0
            ? card.referenceNodeIds.includes(selectedService.id)
            : card.referenceNodeId === selectedService.id;

    const isUnreferenced = (card: { referenceNodeIds: string[]; referenceNodeId: string | null; }): boolean =>
        card.referenceNodeIds.length === 0 && card.referenceNodeId === null;

    const referencedCards = serviceCards.filter((card) => matchesReference(card));
    const referencedTextBlocks = textBlocks.filter((block) => matchesReference(block));

    // Fallback for legacy Drupal content where service reference fields were left empty.
    const fallbackCards = serviceCards.filter((card) => isUnreferenced(card));
    const fallbackTextBlocks = textBlocks.filter((block) => isUnreferenced(block));

    const cardsToRender = referencedCards.length > 0 ? referencedCards : fallbackCards;
    const textBlocksToRender = referencedTextBlocks.length > 0 ? referencedTextBlocks : fallbackTextBlocks;

    return (
        <>
            <SEO
                title={`${selectedService.label} | Blue Shamrock Farm`}
                description={selectedService.content || `Learn more about ${selectedService.label} at Blue Shamrock Farm.`}
                href={`/${serviceSlug}`}
            />

            <div className="max-content mt-16">
                <h1>{selectedService.label}</h1>
                {/* {selectedService.content && <p>{selectedService.content}</p>} */}

                {blocksError && (
                    <p className="max-content mt-4 text-red-700">Error loading service blocks: {blocksError}</p>
                )}

                {!blocksLoading && (
                    <>
                        {textBlocksToRender.map((block) => (
                            <div
                                key={block.id}
                                className={`max-content my-8 ${block.centerText ? "text-center" : ""}`}
                            >
                                <p className="whitespace-pre-line">{block.text}</p>
                            </div>
                        ))}

                        {cardsToRender.length == 0 && (
                            <div className="max-content space-y-8">
                                <p className="text-center">We are working on gathering details for this service. Please check back soon.</p>
                            </div>
                        )}

                        {cardsToRender.length > 0 && (
                            <div className="max-content pb-16 space-y-8">
                                {cardsToRender.map((card) => (
                                    <section key={card.id} className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16">
                                        <ServiceCardGallery images={card.images} name={card.name} />
                                        <div>
                                            {card.name && <h2 className="mt-0">{card.name}</h2>}
                                            {card.description && (
                                                <p className="prose max-w-none whitespace-pre-line">{card.description}</p>
                                            )}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        )}
                    </>
                )}

                <p><Link to="/services">Back to Services</Link></p>
            </div>
        </>
    );
}

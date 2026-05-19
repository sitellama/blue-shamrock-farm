import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { animalsAtom, animalsErrorAtom, animalsLoadingAtom, fetchAnimalsAtom, groupAnimals, type Animal } from "./animals-data";

function AnimalCard({ animal }: { animal: Animal }) {
    return (
        <div>
            {animal.image && <img src={animal.image} alt={animal.imageAlt} />}
            <h3 className="animal-tag">
                {animal.linkUrl
                    ? <a href={animal.linkUrl}>{animal.name}</a>
                    : animal.name
                }
            </h3>
        </div>
    );
}

function FeaturedAnimal({ animal, imageRight }: { animal: Animal; imageRight: boolean }) {
    const imgEl = (
        <div className={`flex-[1_1_33%] ${imageRight ? "order-first md:order-last" : "order-first"}`}>
            {animal.image && (
                <img src={animal.image} className="w-full h-[250px] md:h-full object-cover" alt={animal.imageAlt} loading="lazy" />
            )}
        </div>
    );

    return (
        <div className="mb-16 flex flex-col md:flex-row bg-blue-dark">
            <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white">
                <div>
                    <h3 className="text-5xl">{animal.name}</h3>
                    {animal.description && <p>{animal.description}</p>}
                    {animal.linkUrl && (
                        <a href={animal.linkUrl}>
                            More Info<span className="sr-only"> on {animal.name}</span>
                        </a>
                    )}
                </div>
            </div>
            {imgEl}
        </div>
    );
}

function RegularRow({ animals }: { animals: Animal[] }) {
    const pairs = [animals.slice(0, 2), animals.slice(2, 4)];
    return (
        <div className="mb-16 flex flex-col md:flex-row gap-[2rem]">
            {pairs.map((pair, i) => (
                <div key={i} className="flex gap-[2rem]">
                    {pair.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export function AnimalList() {
    const animals = useAtomValue(animalsAtom);
    const isLoading = useAtomValue(animalsLoadingAtom);
    const error = useAtomValue(animalsErrorAtom);
    const fetchAnimals = useSetAtom(fetchAnimalsAtom);

    useEffect(() => {
        void fetchAnimals();
    }, []);

    if (isLoading) {
        return (
            <section className="max-content mt-16 space-y-16" aria-busy="true" aria-label="Loading animals">
                <div className="animate-pulse" style={{ animationDelay: '0ms' }}>
                    <AnimalSkeletonRow />
                </div>
                <div className="animate-pulse" style={{ animationDelay: '100ms' }}>
                    <FeaturedAnimalSkeleton imageRight={false} />
                </div>
                <div className="animate-pulse" style={{ animationDelay: '200ms' }}>
                    <AnimalSkeletonRow />
                </div>
                <div className="animate-pulse" style={{ animationDelay: '300ms' }}>
                    <FeaturedAnimalSkeleton imageRight={true} />
                </div>
            </section>
        );
    }
    if (error) return <p className="max-content mt-16">Unable to load animals: {error}</p>;
    if (!animals.length) return <p className="max-content mt-16">No animals available.</p>;

    const groups = groupAnimals(animals);

    return (
        <section className="max-content mt-16">
            {groups.map((group, index) => (
                <div
                    key={group.featured.id}
                    className="animate-fadeIn"
                    style={{
                        animation: 'fadeIn 0.6s ease-in-out forwards',
                        animationDelay: `${index * 100}ms`,
                    } as React.CSSProperties}
                >
                    {group.regular.length > 0 && <RegularRow animals={group.regular} />}
                    <FeaturedAnimal animal={group.featured} imageRight={index % 2 !== 0} />
                </div>
            ))}
        </section>
    );
}

function AnimalSkeletonRow() {
    return (
        <div className="mb-16 flex flex-col md:flex-row gap-[2rem] animate-pulse">
            <div className="flex gap-[2rem]">
                <div className="w-[160px] md:w-[220px]">
                    <div className="h-[220px] bg-gray-200" />
                    <div className="mt-4 h-7 w-28 bg-gray-200" />
                </div>
                <div className="w-[160px] md:w-[220px]">
                    <div className="h-[220px] bg-gray-200" />
                    <div className="mt-4 h-7 w-28 bg-gray-200" />
                </div>
            </div>
            <div className="flex gap-[2rem]">
                <div className="w-[160px] md:w-[220px]">
                    <div className="h-[220px] bg-gray-200" />
                    <div className="mt-4 h-7 w-28 bg-gray-200" />
                </div>
                <div className="w-[160px] md:w-[220px]">
                    <div className="h-[220px] bg-gray-200" />
                    <div className="mt-4 h-7 w-28 bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

function FeaturedAnimalSkeleton({ imageRight }: { imageRight: boolean }) {
    return (
        <div className="mb-16 flex flex-col md:flex-row bg-blue-dark animate-pulse">
            <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white">
                <div className="space-y-4">
                    <div className="mx-auto h-12 w-2/3 bg-white/20" />
                    <div className="mx-auto h-5 w-11/12 bg-white/20" />
                    <div className="mx-auto h-5 w-10/12 bg-white/20" />
                    <div className="mx-auto h-5 w-1/2 bg-white/20" />
                </div>
            </div>
            <div className={`flex-[1_1_33%] ${imageRight ? "order-first md:order-last" : "order-first"}`}>
                <div className="h-[250px] md:h-full bg-gray-200" />
            </div>
        </div>
    );
}
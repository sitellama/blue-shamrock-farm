import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { animalsAtom, animalsLoadingAtom, fetchAnimalsAtom } from "@/components/4-library/animals-data";
import { servicesAtom, servicesLoadingAtom, fetchServicesAtom } from "./4-services/8-services-data";
import { normalizePath } from "@/utils/content-not-found";
import { AnimalPage } from "./3-animal-page";
import { ServicePage } from "./4-services/service-page";
import { ErrorPage } from "./7-error";

export function ContentPage() {
    const { slug = "" } = useParams();
    const animals = useAtomValue(animalsAtom);
    const animalsLoading = useAtomValue(animalsLoadingAtom);
    const fetchAnimals = useSetAtom(fetchAnimalsAtom);

    const services = useAtomValue(servicesAtom);
    const servicesLoading = useAtomValue(servicesLoadingAtom);
    const fetchServices = useSetAtom(fetchServicesAtom);

    useEffect(() => {
        if (!animals.length) void fetchAnimals();
        if (!services.length) void fetchServices();
    }, []);

    const currentPath = normalizePath(`/${slug.trim().toLowerCase()}`);
    const isAnimal = animals.some((a) => normalizePath(a.linkUrl) === currentPath);
    const isService = services.some((s) => normalizePath(s.pdfUrl) === currentPath);

    if (animalsLoading || servicesLoading) {
        return <p className="max-content mt-16">Loading...</p>;
    }

    if (isAnimal) {
        return <AnimalPage />;
    }

    if (isService) {
        return <ServicePage />;
    }

    // Unknown content, show 404
    return <ErrorPage />;
}

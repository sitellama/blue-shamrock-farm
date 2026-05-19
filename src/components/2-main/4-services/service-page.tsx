import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useParams, Link, useLocation } from "react-router-dom";
import { SEO } from "@/utils/seo";
import {
    getSameOriginReferrerPath,
    inferContentOrigin,
    normalizePath,
} from "@/utils/content-not-found";
import {
    fetchServicesAtom,
    servicesAtom,
    servicesErrorAtom,
    servicesLoadingAtom,
    Service,
} from "./8-services-data";

export function ServicePage() {
    const { slug = "" } = useParams();
    const serviceSlug = slug.trim().toLowerCase();
    const location = useLocation();

    const services = useAtomValue(servicesAtom);
    const isLoading = useAtomValue(servicesLoadingAtom);
    const error = useAtomValue(servicesErrorAtom);
    const fetchServices = useSetAtom(fetchServicesAtom);

    useEffect(() => {
        if (!services.length) void fetchServices();
    }, []);

    const currentPath = normalizePath(`/${serviceSlug}`);
    const service = services.find((s) => normalizePath(s.pdfUrl) === currentPath);
    const fromState = (location.state as { from?: string; } | null)?.from || "";
    const referrerPath = getSameOriginReferrerPath(document.referrer, window.location.origin);
    const origin = inferContentOrigin(fromState, referrerPath);

    if (isLoading) {
        return <p className="max-content mt-16">Loading...</p>;
    }

    if (error) {
        return <p className="max-content mt-16">Error loading services: {error}</p>;
    }

    if (!service) {
        const backTo = origin === "animals" ? "/animals" : "/services";
        const backLabel = origin === "animals" ? "Back to Animals" : "Back to Services";
        return <p className="max-content mt-16">Service not found <Link to={backTo}>{backLabel}</Link></p>;
    }

    const selectedService = service;

    return (
        <>
            <SEO
                title={`${selectedService.label} | Blue Shamrock Farm`}
                description={selectedService.content || `Learn more about ${selectedService.label} at Blue Shamrock Farm.`}
                href={`/${serviceSlug}`}
            />

            <div className="max-content mt-16">
                <h1>{selectedService.label}</h1>
                {selectedService.content && <p>{selectedService.content}</p>}
                <p><Link to="/services">Back to Services</Link></p>
            </div>
        </>
    );
}

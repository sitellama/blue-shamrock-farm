import { useAtomValue } from "jotai";
import { ServicesEvents } from "./3-service-item";
import { filteredServicesAtom, servicesErrorAtom, servicesLoadingAtom } from "./8-services-data";

export function ServicesList() {
    const services = useAtomValue(filteredServicesAtom);
    const isLoading = useAtomValue(servicesLoadingAtom);
    const error = useAtomValue(servicesErrorAtom);

    if (isLoading) {
        return <p>Loading services...</p>;
    }

    if (error) {
        return <p>Unable to load services right now: {error}</p>;
    }

    if (!services.length) {
        return <p>No services available.</p>;
    }

    return services.map(
        (service, index) => {
            return (
                <ServicesEvents
                    key={index}
                    image={service.image}
                    imageAlt={service.imageAlt}
                    label={service.label}
                    content={service.content}
                    pdfName={service.pdfName}
                    pdfUrl={service.pdfUrl}
                    onsite={service.onsite}
                    travel={service.travel} 
                />
            );
        }
    );
}

import { useAtomValue } from "jotai";
import { ServicesEvents } from "./3-service-item";
import { filteredServicesAtom } from "./8-services-data";

export function ServicesList() {
    const services = useAtomValue(filteredServicesAtom);
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

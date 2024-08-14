import { useAtomValue } from "jotai";
import { ServicesEvents } from "./3-service-item";
import { filteredServicesAtom } from "./8-services-data";

export function ServicesList() {
    const services = useAtomValue(filteredServicesAtom);
    return services.map(
        (service, index) => {
            return (
                <div>
                    <ServicesEvents
                        key={index}
                        image={service.image}
                        label={service.label}
                        content={service.content}
                        pdfName={service.pdfName}
                        pdfUrl={service.pdfUrl}
                        onsite={service.onsite}
                        travel={service.travel} />
                </div>
            );
        }
    );
}

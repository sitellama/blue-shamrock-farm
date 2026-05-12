import { useAtomValue } from "jotai";
import { ServicesEvents } from "./3-service-item";
import { filteredServicesAtom, servicesErrorAtom, servicesLoadingAtom } from "./8-services-data";

export function ServicesList() {
    const services = useAtomValue(filteredServicesAtom);
    const isLoading = useAtomValue(servicesLoadingAtom);
    const error = useAtomValue(servicesErrorAtom);

    if (isLoading) {
        return (
            <div className="space-y-8" aria-busy="true" aria-label="Loading services">
                <ServiceSkeleton />
                <ServiceSkeleton reverse />
                <ServiceSkeleton />
            </div>
        );
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

function ServiceSkeleton({ reverse }: { reverse?: boolean }) {
    return (
        <div className={`flex flex-col md:flex-row bg-white animate-pulse ${reverse ? "md:flex-row-reverse" : ""}`}>
            <div className="h-[220px] md:h-auto md:w-[320px] bg-gray-200" />

            <div className="p-4 flex-1 space-y-4">
                <div className="h-8 w-2/3 bg-gray-200" />
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200" />
                    <div className="h-4 w-11/12 bg-gray-200" />
                    <div className="h-4 w-10/12 bg-gray-200" />
                </div>
                <div className="h-5 w-40 bg-gray-200" />
                <div className="flex gap-6">
                    <div className="h-7 w-36 bg-gray-200" />
                    <div className="h-7 w-44 bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

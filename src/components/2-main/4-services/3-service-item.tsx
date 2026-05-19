import { Service } from "./8-services-data";

export function ServicesEvents({ image, imageAlt, label, content, pdfName, pdfUrl, onsite, travel }: Service) {
    return (
        <div className="flex flex-col md:flex-row bg-white">
            <img src={image} className="object-cover md:max-w-sm lg:max-w-md" alt={imageAlt} />

            <div className="p-4 text-black">
                <h3>{label}</h3>

                <p>{content}</p>

                <a href={pdfUrl} target="_blank" className="subheading">{pdfName}</a>

                <div className="mt-4 mb-0 flex gap-4">
                    {onsite && <div className="px-5 py-1 text-xs rounded-full bg-slate-200">Hosted on-site</div>}
                    {travel && <div className="px-5 py-1 text-xs rounded-full bg-slate-200">Available for travel</div>}
                </div>
            </div>
        </div>
    );
}
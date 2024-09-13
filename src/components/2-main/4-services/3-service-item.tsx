import { Service } from "./8-services-data";

export function ServicesEvents({ image, label, content, pdfName, pdfUrl, onsite, travel }: Service) {
    return (
        <div className="flex flex-col md:flex-row bg-white">
            <img src={image} className="object-cover md:max-w-sm lg:max-w-md" />

            <div className="p-4 text-black">
                <h3>{label}</h3>

                <p>{content}</p>

                <a href={pdfUrl} target="_blank" className="subheading">{pdfName}</a>

                <p className="flex gap-6 mb-0 ">
                    {onsite && <div className="px-5 py-1 bg-gray">Hosted on-site</div>}
                    {travel && <div className="px-5 py-1 bg-gray">Available for travel</div>}
                </p>
            </div>
        </div>
    );
}
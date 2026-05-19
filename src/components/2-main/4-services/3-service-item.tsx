import { Service } from "./8-services-data";
import { Link } from "react-router-dom";

const isExternalUrl = (url: string): boolean => /^(https?:)?\/\//i.test(url);

export function ServicesEvents({ image, imageAlt, label, content, linkText, linkUrl, onsite, travel }: Service) {
    const external = isExternalUrl(linkUrl);

    return (
        <div className="flex flex-col md:flex-row bg-white">
            <img src={image} className="object-cover md:max-w-sm lg:max-w-md" alt={imageAlt} />

            <div className="p-4 text-black">
                <h3>{label}</h3>

                <p>{content}</p>

                {external ? (
                    <a href={linkUrl} target="_blank" rel="noreferrer" className="subheading">{linkText}</a>
                ) : (
                    <Link to={linkUrl} className="subheading">{linkText}</Link>
                )}

                <div className="mt-4 mb-0 flex gap-4">
                    {onsite && <div className="px-5 py-1 text-xs rounded-full bg-slate-200">Hosted on-site</div>}
                    {travel && <div className="px-5 py-1 text-xs rounded-full bg-slate-200">Available for travel</div>}
                </div>
            </div>
        </div>
    );
}
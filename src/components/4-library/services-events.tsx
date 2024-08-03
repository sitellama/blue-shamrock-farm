export function ServicesEvents({ image, label, content, linkText, linkPDF }: { image: string, label: string, content: string, linkText: string, linkPDF: string; }) {
    return (
        <div className="max-w-7xl flex bg-white">
            <img src={image} className="flex" />

            <div className="p-4 flex-1 text-black">
                <h3>{label}</h3>

                <p>{content}</p>

                <a href={linkPDF} className="subheading">{linkText}</a>

                <p className="flex gap-6">
                    <div className="px-5 py-1 bg-gray">Hosted on-site</div>
                    <div className="px-5 py-1 bg-gray">Available for travel</div>
                </p>
            </div>
        </div>
    );
}
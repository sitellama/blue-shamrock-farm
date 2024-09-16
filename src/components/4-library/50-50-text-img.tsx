import facePainting from "@/assets/face-painting.webp";

export function TextImg() {
    return (
        <section className="max-content flex flex-col md:flex-row bg-blue-light mt-0">
            <div className="flex-1">
                <img src={facePainting} className="object-cover h-full w-full max-h-[250px] md:max-h-full" />
            </div>

            <div className="p-8 flex-1 text-white md:order-first">
                <h2>Add-on Services</h2>
                <p>Additional services are available upon request. Here is a list of commonly requested add-ons that we offer:</p>
                <ul>
                    <li>Pony Rides</li>
                    <li>Face painting or glitter tattoos</li>
                    <li>Piñatas and other party games</li>
                    <li>Food and Décor</li>
                    <li>Baby animal snuggles</li>
                    <li>Mobile drink bar</li>
                </ul>
                <p>P. S. If you don't see your idea listed, please ask! <a href="/services" className="subheading">View more add-ons here</a></p>
            </div>
        </section>
    );
}
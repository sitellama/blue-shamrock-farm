import facePainting from "@/assets/face-painting.jpg";

export function TextImg() {
    return (
        <section className="flex bg-blue-light mt-0">
            <div className="p-4 flex-1 text-white">
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
                <p>P. S. If you don't see your idea listed, please ask! <a href="#" className="subheading">View more add-ons here</a></p>
            </div>

            <div className="flex-1">
                <img src={facePainting} className="object-cover" />
            </div>
        </section>
    );
}
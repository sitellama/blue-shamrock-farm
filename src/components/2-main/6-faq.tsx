import { SEO } from "../../utils/seo";
import llamaFence from "@/assets/hero-faq.jpg";
import { HeroImg } from "../4-library/hero-img";

export function FAQs() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <SEO title="FAQs" description="Frequently asked questions about our events." href="/" />

            <HeroImg hero={llamaFence} />

            <section className="max-content">
                <h1 className="font-sans text-4xl text-center font-bold">Frequently Asked Questions</h1>

                <h2 className="font-sans text-2xl font-bold">How far do you travel?</h2>
                <p>Travel within 30 miles of the farm address is included in the cost of the event. Anything beyond 30 miles, we are willing to attend, with an additional travel fee of $0.50 per mile (round trip).</p>

                <h2 className="font-sans text-2xl font-bold">Is there a deposit?</h2>
                <p>Yes, we require a $50 non-refundable deposit to save your date. The deposit is applied towards your total and can be paid via Square invoice, Venmo, Paypal, or cash.</p>

                <h2 className="font-sans text-2xl font-bold">How much space do I need?</h2>
                <p>The small animal enclosure can fit to the space you have, if we do not need to use the tents. The tents are 10x10 each. We can set up with one or two tents. The animals of course prefer two tents for more space. The large animal enclosure is about 10' x 10'.</p>

                <h2 className="font-sans text-2xl font-bold">How much space is needed to park the animal trailer?</h2>
                <p>The animal truck and trailer set-up is 37' long, so I will need at least that, plus space for the trailer door to open.</p>

                <h2 className="font-sans text-2xl font-bold">What about weather?</h2>
                <p>Not to worry, we have a tent with sides in case of rain.</p>
                <p>If the weather is not appropriate, we can reschedule up to 24 hours ahead of party time. We may be able to set up inside a garage or other structure. Tent rentals may also be an option.</p>

                <h2 className="font-sans text-2xl font-bold">What do I need to provide as the site host?</h2>
                <p>We will need access to water to provide fresh water to the animals. Please let us know if this is not possible so we can bring water.</p>
                <p>Please let us know if there is shade for the animals (trees), otherwise we may need to set up the tent(s).</p>

                <h2 className="font-sans text-2xl font-bold">Is it safe to pet the animals?</h2>
                <p>We provide hand sanitizer for humans at all events. Adult helpers should help ensure that children (and adults) do not put their hands in their mouths or touch their faces while petting animals. Hands should be washed before touching faces or eating.</p>

                <h2 className="font-sans text-2xl font-bold">Can we feed the animals?</h2>
                <p>Yes! We provide snacks and treats for people to give the animals. Our animal friends love treats! Please do not feed our animals food other than our provided snacks.</p>

                <h2 className="font-sans text-2xl font-bold">When will you arrive?</h2>
                <p>We will arrive about half an hour prior to the event to set up. We will need a place about four cars long to park our truck and trailer. My truck and trailer set-up is 37' long, so I will need at least that, plus space for the trailer door to open.</p>

                <h2 className="font-sans text-2xl font-bold">Do you clean up?</h2>
                <p>We will stay for about half an hour after the event to pack up and clean up. You may have some clean-up to do, such as vacuuming for an inside event or raking for an outside event. Animals do go to the bathroom, and we cannot clean up all the tiny amounts. We will do our best to clean up as much as possible.</p>

                <h2 className="font-sans text-2xl font-bold">Are other animals allowed to be around?</h2>
                <p className="m-0 pb-6">For the safety of all animals, outside animals are not permitted to interact with our animals. Please ensure dogs, etc are contained and no outside animals "boop snoots".</p>
            </section>
        </>
    );
}

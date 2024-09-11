import { SupportUs } from "@/components/4-library/support-us";
import { HeroImg } from "@/components/4-library/hero-img";
import { SEO } from "../../../utils/seo";
import { DropdownSection } from "./1-dropdown-section";
import { ServicesList } from "./2-services-list";
import { ContactUs } from "@/components/4-library/contact-us";
import flowerBarn from "@/assets/hero-barn-flowers.webp";

export function Services() {
    return (<>
        <SEO title="Services Page" description="This is the services page" href="/" />

        <HeroImg hero={flowerBarn} />

        <div className="mt-0 mb-20 bg-blue-dark text-white py-12">
            <h1 className="text-center">Event Details</h1>
            <p className="text-center">
                At Blue Shamrock Farm, we offer a variety of events. Below, you’ll find a detailed list of all events and outed details like what to expect and package options.</p>
        </div>

        <section className="max-content flex flex-col items-center">
            <div className="space-y-16">
                <DropdownSection />

                <ServicesList />
            </div>
        </section>
        <SupportUs />

        <ContactUs />
    </>);
}

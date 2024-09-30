import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { SupportUs } from "@/components/4-library/support-us";
import { HeroImg } from "@/components/4-library/hero-img";
import { SEO } from "../../../utils/seo";
import { DropdownSection } from "./1-dropdown-section";
import { ServicesList } from "./2-services-list";
import { ContactUs } from "@/components/4-library/contact-us";
import flowerBarn from "@/assets/hero-barn-flowers.webp";
import { dropdownSelectionAtom, onsiteAtom, travelAtom } from "./8-services-data";

export function Services() {
    const setDropdownSelection = useSetAtom(dropdownSelectionAtom);
    const setOnsite = useSetAtom(onsiteAtom);
    const setTravel = useSetAtom(travelAtom);

    useEffect(() => {
        setDropdownSelection("All");
        setOnsite(true);
        setTravel(true);
    }, []);


    return (<>
        <SEO title="Services & Events" description="This is the services page" href="/" />

        <HeroImg hero={flowerBarn} />

        <div className="mt-0 mb-20 bg-blue-dark text-white py-12">
            <h1 className="text-center">Upcoming Events</h1>
            <p className="max-content text-center">
                At Blue Shamrock Farm there's always something happening — whether it's goat yoga, hosting a party, or cuddling with our animals.</p>
            <p className="max-content text-center"><a href="https://blue-shamrock-farm-llc.square.site/upcoming-events" target="_blank">Check out our list of upcoming events.</a></p>
        </div>

        <section className="max-content flex flex-col items-center">
            <h1 className="text-left mb-9">Services and Details</h1>
            <div className="space-y-16">
                <DropdownSection />

                <ServicesList />
            </div>
        </section>

        <SupportUs />

        <ContactUs />
    </>);
}

import { SupportUs } from "@/components/4-library/support-us";
import { SEO } from "../../../utils/seo";
import { DropdownSection } from "./1-dropdown-section";
import { ServicesList } from "./2-services-list";
import { ContactUs } from "@/components/4-library/contact-us";

export function Services() {
    return (<>
        <SEO title="Services Page" description="This is the services page" href="/" />

        <h1 className="flex justify-center">Services</h1>

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

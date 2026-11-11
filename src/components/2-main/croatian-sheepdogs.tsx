import { SEO } from "../../utils/seo";
import { ContactUs } from "../4-library/reach-out";
import { HeroImg } from "../4-library/hero-img";
import { OurTornjaks } from "../4-library/our-tornjaks";
import pluto from "../../assets/pluto-with-livestock.webp";
import { PuppyBanner } from "../4-library/puppy-banner";


export function CroatianSheepdogs() {
    return (
        <>
            <SEO title="Croatian Sheepdog Page" description="View the most recent information about our Croatian Sheepdogs." href="/croatian-sheepdogs" />
            <HeroImg hero={pluto} />
            <PuppyBanner pagelink={false} announcement={true} />
            <OurTornjaks />
            <ContactUs />
        </>
    );
}
import { SEO } from "../../utils/seo";
import { ContactUs } from "../4-library/reach-out";
import { HeroImg } from "../4-library/hero-img";
import { OurTornjaks } from "../4-library/our-tornjaks";
import cigoImg from "../../assets/cigo-on-log.webp";
import { PuppyBanner } from "../4-library/puppy-banner";
import { OurCroatianSheepdogs } from "../4-library/our-csd";


export function CroatianSheepdogs() {
    return (
        <>
            <SEO title="Croatian Sheepdog Page" description="View the most recent information about our Croatian Sheepdogs." href="/croatian-sheepdogs" />
            <HeroImg hero={cigoImg} />
            <PuppyBanner pagelink={false} announcement={true} description={true}/>
            <OurCroatianSheepdogs />
            <ContactUs />
        </>
    );
}
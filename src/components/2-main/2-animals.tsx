import { SEO } from "../../utils/seo";
import { HeroImg } from "@/components/4-library/hero-img";
import hero from "@/assets/hero-barn-doors.webp";

import { AnimalList } from "../4-library/amimal-list";
import { ContactUs } from "../4-library/contact-us";
import { SupportUs } from "../4-library/support-us";
import { Sections } from "@/components/4-library/section";
import { sections } from "@/components/4-library/sections-data";

export function Animals() {
  return (
    <>
      <SEO title="Meet the Animals" description="Meet the friendly farm animals available for events at Blue Shamrock Farm." href="/" />

      <HeroImg hero={hero} heroDiv={true} heroTitle="Welcome to the Barn" heroText="Please meet some of our friends" />

      <div className="bg-gray">
        <h2 className="mt-0 mx-auto p-4 max-content text-lg text-center font-['poppins']">If you’re interested in purchasing one of our animals, please take a look at our <a href="https://blue-shamrock-farm-llc.square.site/animals" target="_blank" className="text-lg font-['poppins']">current listings</a>. We also offer trial periods for select animals, giving you the opportunity to decide before making a purchase.</h2>
      </div>

      <AnimalList />

      <SupportUs />

      <ContactUs />

    </>
  );
}

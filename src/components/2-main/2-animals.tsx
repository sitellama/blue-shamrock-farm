import { SEO } from "../../utils/seo";
import { HeroImg } from "@/components/4-library/hero-img";
import hero from "@/assets/hero-horse.webp";

import { AnimalList } from "../4-library/amimal-list";
import { ContactUs } from "../4-library/contact-us";
import { SupportUs } from "../4-library/support-us";
import { Sections } from "@/components/4-library/section";
import { sections } from "@/components/4-library/sections-data";

export function Animals() {
  return (
    <>
      <SEO title="Animals Page" description="This is the Animals page" href="/" />

      <HeroImg hero={hero} heroDiv={true} heroTitle="Welcome to the Barn" heroText="This is a barn and here is some text describing it" />

      <h2>Please meet some of our friends</h2>

      {/* <Sections sections={sections} /> */}

      <AnimalList />

      <SupportUs />

      <ContactUs />

    </>
  );
}

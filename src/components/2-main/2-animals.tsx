import { SEO } from "../../utils/seo";
import { HeroImg } from "@/components/4-library/hero-img";
import { AnimalList } from "../4-library/amimal-list";
import { ContactUs } from "../4-library/contact-us";
import { SupportUs } from "../4-library/support-us";
import { Sections } from "@/components/4-library/section";
import { sections } from "@/components/4-library/sections-data";

export function Animals() {
  return (
    <>
      <SEO title="Animals Page" description="This is the Animals page" href="/" />

      <HeroImg />

      <h2>Please meet some of our friends</h2>

      {/* <Sections sections={sections} /> */}

      <AnimalList />

      <SupportUs />

      <ContactUs />

    </>
  );
}

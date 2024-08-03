import { SEO } from "../../utils/seo";
import { HeroImg } from "@/components/4-library/hero-img";
import { AnimalList } from "../4-library/amimal-list";

export function Animals() {
  return (
    <>
      <SEO title="Animals Page" description="This is the Animals page" href="/" />

      <HeroImg />

      <h2>Please meet some of our friends</h2>

      <AnimalList />

    </>
  );
}

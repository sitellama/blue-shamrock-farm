import { ImgText } from "@/components/4-library/50-50-img-text";
import { TextImg } from "@/components/4-library/50-50-text-img";
import { ContactUs } from "@/components/4-library/contact-us";
import { EventsSection } from "@/components/4-library/events-section";
import { GoatGram } from "@/components/4-library/goat-gram";
import { GoatYoga } from "@/components/4-library/goat-yoga";
import { HeroImg } from "@/components/4-library/hero-img";
import { MapIntro } from "@/components/4-library/map-intro";
import { PettingZoo } from "@/components/4-library/petting-zoo";
import { SEO } from "@/utils/seo";
import heroHorse from "@/assets/hero-horse.webp"

export function Home() {
  return (
    <>
      <SEO title="Blue Shamrock Farm" description="This is the home page" href="/" />

      <HeroImg hero={heroHorse} />

      <MapIntro />

      <PettingZoo />

      <GoatYoga />

      <GoatGram />

      <EventsSection />

      <ImgText />

      <TextImg />

      <ContactUs />

      {/* <WorkWithUs /> */}
    </>
  );
}

import { SEO } from "../../utils/seo";
import { Link } from "react-router-dom";
import llamaFence from "@/assets/bsf-puppies.webp";
import { HeroImg } from "../4-library/hero-img";
import { ContactUs } from "../4-library/reach-out";
import imageTornjaks from "@/assets/pluto-and-ari.webp";
import imageCSD from "@/assets/csd-profile.webp";
import imageLivestock from "@/assets/nigerian-dwarf-goat.webp";

export function Breeding() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <SEO title="Breeding" description="Animal breeding programs." href="/" />

            <HeroImg hero={llamaFence} />

            <section className="max-content">
                <h1 className="my-16 font-sans text-4xl text-center font-bold">Blue Shamrock Breeding Programs</h1>

                {/* Tornjak */}
                <div className="mb-16 flex flex-col md:flex-row bg-blue-dark">
                    <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white">
                        <div>
                            <h3 className="text-5xl">Tornjaks</h3>
                            <div className="space-y-4 prose prose-invert max-w-none">
                                <p className="whitespace-pre-line">Tornjaks are strong, loyal livestock guardian dogs from Croatia and Bosnia and Herzegovina. They are known for their protective nature, sturdy build, and thick coats, making them ideal for guarding flocks in harsh conditions. Valued for their gentle temperament with both family and animals, Tornjaks remain a respected breed for their dependable guardianship.</p>
                            </div>
                            <Link to="/tornjak">More Info<span className="sr-only"> on Tornjak breeding</span></Link>
                        </div>
                    </div>
                    <div className="flex-[1_1_33%] order-last md:order-first">
                        <img src={imageTornjaks} className="w-full h-[250px] md:h-full object-cover" alt="livestock guardian dog protecting the farm" loading="lazy"></img>
                    </div>
                </div>

                {/* Croatian Sheepdog  */}
                <div className="mb-16 flex flex-col md:flex-row bg-tan">
                    <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white">
                        <div>
                            <h3 className="text-5xl">Croatian Sheepdogs</h3>
                            <div className="space-y-4 prose prose-invert max-w-none">
                                <p className="whitespace-pre-line">Unlike many breeds developed primarily for appearance, the Croatian Sheepdog evolved through practical farm work. Only dogs demonstrating intelligence, sound temperament, endurance, and exceptional working ability were selected for breeding. During the 20th century, Croatian breeders and cynologists established the modern breed standard while preserving the characteristics that had defined the breed for generations.</p>
                            </div>
                            <Link to="/croatian-sheepdog">More Info<span className="sr-only"> on Croatian Sheepdog breeding</span></Link>
                        </div>
                    </div>
                    <div className="flex-[1_1_33%]">
                        <img src={imageCSD} className="w-full h-[250px] md:h-full object-cover" alt="livestock guardian dog protecting the farm" loading="lazy"></img>
                    </div>
                </div>

                {/* Livestock */}
                <div className="mb-16 flex flex-col md:flex-row bg-blue-medium">
                    <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white">
                        <div>
                            <h3 className="text-5xl">Livestock</h3>
                            <div className="space-y-4 prose prose-invert max-w-none">
                                <p className="whitespace-pre-line">Our breeding program is dedicated to raising healthy, well-tempered heritage and small-scale livestock with sound conformation and breed-true characteristics. Every animal is raised right here at home with daily hands-on care, good food, room to roam, and thoughtfully planned pairings. We pay close attention to long-term health and gentle temperaments, because we want every animal to have a great start in life. Whether you’re looking for a family companion, a fiber producer, or a foundation for your own herd or flock, we’d love to help you find your next favorite critter.</p>
                            </div>
                            <Link to="/shamrock-shop">More Info<span className="sr-only"> on livestock breeding</span></Link>
                        </div>
                    </div>
                    <div className="flex-[1_1_33%] order-last md:order-first">
                        <img src={imageLivestock} className="w-full h-[250px] md:h-full object-cover" alt="livestock guardian dog protecting the farm" loading="lazy"></img>
                    </div>
                </div>

            </section>

            <ContactUs />
        </>
    );
}

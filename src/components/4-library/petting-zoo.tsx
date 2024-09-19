import chickens from "@/assets/petting-zoo-chickens.webp";
import goats from "@/assets/petting-zoo-goats.webp";
import doubleImg from "@/assets/petting-zoo-animals.webp";

export function PettingZoo() {
    return (
        <section className="bg-blue-medium pb-[4.5rem] md:pb-36">
            <div className="max-content md:flex justify-center text-white gap-[7%] text-center">
                <img src={doubleImg} className="mx-auto -mt-16 mb-8 inline-block md:hidden" alt="a child gleefully hugging chickens and a goat being pet and hand fed" />
                <div className="flex-1 md:max-w-[500px] mt-6">
                    <h2>Blue Shamrock Petting Zoo</h2>
                    {/* <p className="uppercase text-bold">Open every Tuesday 2-4pm in June, July & August.</p> */}
                    <p className="uppercase text-bold">Available for events all year round</p>
                    <img src={chickens} className="mx-auto mt-8 hidden md:block" alt="child gleefully hugging chickens" />
                </div>
                <div className="flex-1 md:max-w-[500px] md:-mt-16">
                    <img src={goats} className="mx-auto mb-8 hidden md:block" alt="a goat being pet and hand fed" />
                    <p>Seasonally, we host our famous Blue Shamrock Petting Zoo at our farm in Oxford, MI. The petting zoo includes access to pet and feed sheep, goats, chickens, alpacas and more! Please check Facebook in case of unforeseen cancelations.</p>
                    <p>Our farm animals are also available to travel to your next big event</p>
                    <a href="/services" className="subheading">Learn more about our mobile petting zoo packages.</a>
                </div>
            </div>
        </section>
    );
}
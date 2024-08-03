import chickens from "@/assets/petting-zoo-chickens.jpg";
import goats from "@/assets/petting-zoo-goats.jpg";

export function PettingZoo() {
    return (
        <section className="bg-blue-medium pb-36">
            <div className="max-content flex justify-center text-white gap-[7%] text-center">
                <div className="flex-1 max-w-[500px] mt-6">
                    <h2>Blue Shamrock Petting Zoo</h2>
                    <p className="uppercase text-bold">Open every Tuesday 2-4pm in June, July & August.</p>
                    <p className="uppercase text-bold">**Available for events all year round**</p>
                    <img src={chickens} className="mx-auto mt-8" />
                </div>
                <div className="flex-1 max-w-[500px] -mt-16">
                    <img src={goats} className="mx-auto mb-8" />
                    <p>Seasonally, we host our famous Blue Shamrock Petting Zoo at our farm in Oxford, MI. The petting zoo includes access to pet and feed sheep, goats, chickens, alpacas and more! Please check Facebook in case of unforeseen cancelations.</p>
                    <p>Our farm animals are also available to travel to your next big event</p>
                    <a href="#" className="subheading">Learn more about our mobile petting zoo packages.</a>
                </div>
            </div>
        </section>
    );
}
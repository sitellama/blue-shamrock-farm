import goat from "@/assets/goat.jpg";
import cattle from "@/assets/cattle.jpg";
import sheep from "@/assets/sheep.jpg";
import duck from "@/assets/ducks.jpg";
import featureKerry from "@/assets/kerry-bog-pony.jpg";
import pig from "@/assets/mini-pig.jpg";
import alpaca from "@/assets/alpaca.jpg";
import bunny from "@/assets/bunny.jpg";
import guineaPig from "@/assets/guinea-pig.jpg";
import featureTornjak from "@/assets/tornjak.jpg";
// import chinchilla from "@/assets/";
// import peacock from "@/assets/";
// import budgie from "@/assets/";
// import chicken from "@/assets/";
// import featureSheep from "@/assets/";
// import horse from "@/assets/";
// import cat from "@/assets/";
// import donkey from "@/assets/";
// import llama from "@/assets/";
// import featureGoat from "@/assets/";
// import  from "@/assets/";
// import  from "@/assets/";
// import  from "@/assets/";
// import  from "@/assets/";

export function AnimalList() {
    return (
        <section className="max-content">
            {/* row 1 */}
            <div className="mb-16 flex gap-[5%]">
                <div>
                    <img src={goat} />
                    <h3 className="animal-tag">Goats</h3>
                </div>

                <div>
                    <img src={cattle} />
                    <h3 className="animal-tag">Cattle</h3>
                </div>

                <div>
                    <img src={sheep} />
                    <h3 className="animal-tag">Sheep</h3>
                </div>

                <div>
                    <img src={duck} />
                    <h3 className="animal-tag">Ducks & Geese</h3>
                </div>
            </div>

            <div className="mb-16 flex bg-blue-dark">
                <div className="p-4 flex-[1_1_66%] flex flex-col justify-center text-center text-white ">
                    <h3 className="text-5xl">Kerry Bog Ponies</h3>
                    <p className="">Kerry Bog Ponies, native to Ireland, are small, sturdy ponies known for their endurance and adaptability in marshy terrains. Valued for their strength and calm temperament, they have historically assisted in farming and rural work. Today, they are considered endangered, prompting conservation efforts to preserve this resilient breed.</p>
                    <a href="#" className="">More Info<span className="sr-only"> on kerry bog ponies</span></a>
                </div>

                <div className="flex-[1_1_33%] order-first">
                    <img src={featureKerry} className="h-full object-cover" />
                </div>
            </div>


            {/* row 3 */}
            <div className="mb-16 flex gap-[5%]">
                <div>
                    <img src={pig} />
                    <h3 className="animal-tag">Pigs</h3>
                </div>

                <div>
                    <img src={alpaca} />
                    <h3 className="animal-tag">Alpaca</h3>
                </div>

                <div>
                    <img src={bunny} />
                    <h3 className="animal-tag">Rabbits</h3>
                </div>

                <div>
                    <img src={guineaPig} />
                    <h3 className="animal-tag">Chinchilla</h3>
                </div>
            </div>

            <div className="mb-16 flex bg-blue-dark">
                <div className="p-4 flex-[1_1_66%] flex flex-col justify-center text-center text-white ">
                    <h3 className="text-5xl">Tornjaks</h3>
                    <p className="">Tornjaks are strong, loyal livestock guardian dogs from Bosnia and Herzegovina. They are known for their protective nature, sturdy build, and thick coats, making them ideal for guarding flocks in harsh conditions. Valued for their gentle temperament with both family and animals, Tornjaks remain a respected breed for their dependable guardianship.</p>
                    <a href="#" className="">More Info<span className="sr-only"> on tornjaks</span></a>
                </div>

                <div className="flex-[1_1_33%]">
                    <img src={featureTornjak} className="h-full object-cover" />
                </div>
            </div>
        </section>
    );
}
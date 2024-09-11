import goat from "@/assets/goat.jpg";
import cattle from "@/assets/cattle.jpg";
import sheep from "@/assets/sheep.jpg";
import featureSheep from "@/assets/sheep-2.jpg";
import duck from "@/assets/ducks.jpg";
// import featureKerry from "@/assets/kerry-bog-pony.jpg";
import featureKerry from "@/assets/kerry-bog-pony-2.jpg";
import pig from "@/assets/mini-pig.jpg";
import alpaca from "@/assets/alpaca.jpg";
import bunny from "@/assets/bunny.jpg";
import peacock from "@/assets/peacock.jpg";
import featureTornjak from "@/assets/tornjak.jpg";
import guineaPig from "@/assets/guinea-pig.jpg";
import chinchilla from "@/assets/chinchilla.jpg";
import budgie from "@/assets/budgie-bird.jpg";
import chicken from "@/assets/chicken.jpg";
import horse from "@/assets/horses.jpg";
import cat from "@/assets/barn-cat.jpg";
import donkey from "@/assets/donkey.jpg";
import llama from "@/assets/llama.jpg";

// import featureSheep from "@/assets/";
// import horse from "@/assets/";
// import cat from "@/assets/";
// import donkey from "@/assets/";
// import llama from "@/assets/";
import featureGoat from "@/assets/nigerian-dwarf-goat.jpg";
// import  from "@/assets/";
// import  from "@/assets/";
// import  from "@/assets/";
// import  from "@/assets/";

export function AnimalList() {
    return (
        <section className="max-content">

            {/* pattern 1 */}
            <div className="mb-16 flex flex-col md:flex-row gap-[2rem]">
                <div className="flex gap-[2rem]">
                    <div>
                        <img src={goat} />
                        <h3 className="animal-tag">Goats</h3>
                    </div>
                    <div>
                        <img src={cattle} />
                        <h3 className="animal-tag">Cattle</h3>
                    </div>
                </div>

                <div className="flex gap-[2rem]">
                    <div>
                        <img src={sheep} />
                        <h3 className="animal-tag">Sheep</h3>
                    </div>
                    <div>
                        <img src={duck} />
                        <h3 className="animal-tag">Ducks & Geese</h3>
                    </div>
                </div>
            </div>

            <div className="mb-16 flex flex-col md:flex-row bg-blue-dark">
                <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white">
                    <div>
                        <h3 className="text-5xl">Kerry Bog Ponies</h3>
                        <p className="">Kerry Bog Ponies, native to Ireland, are small, sturdy ponies known for their endurance and adaptability in marshy terrains. Valued for their strength and calm temperament, they have historically assisted in farming and rural work. Today, they are considered endangered, prompting conservation efforts to preserve this resilient breed.</p>
                        <a href="#" className="">More Info<span className="sr-only"> on kerry bog ponies</span></a>
                    </div>
                </div>

                <div className="flex-[1_1_33%] order-first">
                    <img src={featureKerry} className="w-full h-[250px] md:h-full object-cover" />
                </div>
            </div>


            {/* pattern 2 */}
            <div className="mb-16 flex flex-col md:flex-row gap-[2rem]">
                <div className="flex gap-[2rem]">
                    <div>
                        <img src={pig} />
                        <h3 className="animal-tag">Pigs</h3>
                    </div>
                    <div>
                        <img src={alpaca} />
                        <h3 className="animal-tag">Alpaca</h3>
                    </div>
                </div>

                <div className="flex gap-[2rem]">
                    <div>
                        <img src={bunny} />
                        <h3 className="animal-tag">Rabbits</h3>
                    </div>
                    <div>
                        <img src={peacock} />
                        <h3 className="animal-tag">Peacock</h3>
                    </div>
                </div>
            </div>

            <div className="mb-16 flex flex-col md:flex-row bg-blue-dark">
                <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white ">
                    <div>
                        <h3 className="text-5xl">Tornjaks</h3>
                        <p className="">Tornjaks are strong, loyal livestock guardian dogs from Bosnia and Herzegovina. They are known for their protective nature, sturdy build, and thick coats, making them ideal for guarding flocks in harsh conditions. Valued for their gentle temperament with both family and animals, Tornjaks remain a respected breed for their dependable guardianship.</p>
                        <a href="#" className="">More Info<span className="sr-only"> on tornjaks</span></a>
                    </div>
                </div>

                <div className="flex-[1_1_33%] order-first md:order-last">
                    <img src={featureTornjak} className="w-full h-[250px] md:h-full object-cover" />
                </div>
            </div>

            {/* pattern 3 */}
            <div className="mb-16 flex flex-col md:flex-row gap-[2rem]">
                <div className="flex gap-[2rem]">
                    <div>
                        <img src={guineaPig} />
                        <h3 className="animal-tag">Guinea Pig</h3>
                    </div>
                    <div>
                        <img src={budgie} />
                        <h3 className="animal-tag">Budgies</h3>
                    </div>
                </div>

                <div className="flex gap-[2rem]">
                    <div>
                        <img src={chicken} />
                        <h3 className="animal-tag">Chickens</h3>
                    </div>
                    <div>
                        <img src={chinchilla} />
                        <h3 className="animal-tag">Chinchillas</h3>
                    </div>
                </div>
            </div>

            <div className="mb-16 flex flex-col md:flex-row bg-blue-dark">
                <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white ">
                    <div>
                        <h3 className="text-5xl">Nigerian Dwarf Goats</h3>
                        <p className="">Nigerian Dwarf goats are a small, friendly breed known for their high milk production despite their size. Originating from West Africa, these goats are prized for their sweet temperament and diverse coat colors. Their compact stature and efficiency make them ideal for small farms, where they provide rich, creamy milk and serve as charming companions.</p>
                        <a href="#" className="">More Info<span className="sr-only"> on nigerian dwarf goats</span></a>
                    </div>
                </div>

                <div className="md:flex-[1_1_33%] order-first">
                    <img src={featureGoat} className="w-full h-[250px] md:h-full object-cover" />
                </div>
            </div>

            {/* pattern 4 */}
            <div className="mb-16 flex flex-col md:flex-row gap-[2rem]">
                <div className="flex gap-[2rem]">
                    <div>
                        <img src={horse} />
                        <h3 className="animal-tag">Horses</h3>
                    </div>
                    <div>
                        <img src={cat} />
                        <h3 className="animal-tag">Cats</h3>
                    </div>
                </div>

                <div className="flex gap-[2rem]">
                    <div>
                        <img src={donkey} />
                        <h3 className="animal-tag">Donkey</h3>
                    </div>
                    <div>
                        <img src={llama} />
                        <h3 className="animal-tag">Llamas</h3>
                    </div>
                </div>
            </div>

            <div className="mb-16 flex flex-col md:flex-row bg-blue-dark">
                <div className="py-4 px-8 flex-[1_1_clamp(30%,50%,70%)] flex flex-col md:min-h-[400px] justify-center text-center text-white ">
                    <div>
                        <h3 className="text-5xl">Shetland Sheep</h3>
                        <p className="">Shetland Sheepdogs, or Shelties, are small, intelligent herding dogs with a striking, long coat. Originally bred in the Shetland Islands, they are known for their agility and trainability, making them excellent in various dog sports. Friendly and affectionate, Shelties are great with families and children, combining their herding instinct with a loving temperament.</p>
                        <a href="#" className="">More Info<span className="sr-only"> on shetland sheep</span></a>
                    </div>
                </div>

                <div className="flex-[1_1_33%] order-first md:order-last">
                    <img src={featureSheep} className="w-full h-[250px] md:h-full object-cover" />
                </div>
            </div>
        </section>
    );
}
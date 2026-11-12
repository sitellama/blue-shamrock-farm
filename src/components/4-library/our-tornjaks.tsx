import meetTornjaks from "../../assets/pluto-and-ari.webp";
import plutoImg from "../../assets/pluto-with-goat.webp";
import nikaImg from "../../assets/nika-with-goats.webp";
import ariImg from "../../assets/ari-with-llamas.webp";
import { ExpandableContent } from "./expandable-content";

export function OurTornjaks() {
    return (
        <div>
            <section className="max-content text-center">
                <div>
                    <h2>Our Tornjaks</h2>
                    <p >The Tornjak is a livestock guardian dog originating from Bosnia and Herzegovina and Croatia. The task of protecting all of Blue Shamrock Farm's precious animals falls to our Tornjaks. Whether it is on the farm or at the show ring, we are always proud to introduce our beautiful working dogs!</p>
                    <hr className="h-1 border-0 bg-blue-dark  max-content mt-16 mx-auto"></hr>
                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">

                    <div className="">
                            <img className="w-full max-w-lg mx-auto" src={plutoImg} alt="" />
                        </div>

                    <div>
                        <h2>Pluto</h2>
                        <p >Pluto's offical name is Pluto Dalmatinski Vrisak. He is a vigilant but gentle guardian for his animals. He is constantly checking his flock to make sure everyone is healthy. He helps ensure that all of the babies get appropriate food by blocking some of the more assertive animals. Pluto also alerts me to predators but is able to handle situations by himself if needed.</p>
                    </div>
                </div>

                <ExpandableContent title="Pluto's Details">
                    <p className="mt-0"><span className="subheading mb-0">Full Registered Name: </span>Pluto Dalmatinski Vrisak</p>

                    <p className="subheading mb-0">Titles Earned</p>
                    <p className="mt-0">
                        UKC Emerald Grand Champion, UKC Dash, UKC RACEA, AKC Certificate of Merit
                    </p>

                    <p><a href="https://tornjak.pedigre.net/details.php?id=6513" target="_blank">Pedigree</a></p>
                    {/* if there is no value, default to a non link "OFA testing - Not old enough yet" */}
                    <p><a href="https://ofa.org/advanced-search/?appnum=2584059" target="_blank">OFA testing</a></p>

                    <p className="subheading mb-0">Animals Worked With</p>
                    <p className="mt-0">
                        Cows, horses, ponies, miniature horses, donkeys, llamas, alpacas, sheep, goats, miniature pigs, rabbits, guinea pigs, peafowl, geese, ducks, chickens, quail, barn cats
                    </p>

                    <p className="subheading mb-0">Fun Facts</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Pluto alerts me to predators. He handles the situation by himself if needed, but works with me if I am available.</li>
                            <li>Pluto identifies illnesses in animals and checks to make sure everyone is healthy.</li>
                            <li>Pluto guards the animals' food so other animals do not eat it.</li>
                            <li>He watches the rabbit food so I can feed the rabbits without the other animals eating the food</li>
                            <li>He lets baby animals eat their food while he pushes back the other animals, so that the babies can eat in peace. </li>
                            <li>Pluto helps me fill hay nets - He puts his front feet on the hay to help stuff it down into the net</li>
                            <li>Pluto has helped herd animals into the barn</li>
                            <li>Pluto guards over animals that need space, and gently tells the other animals to stay back.</li>
                        </ul>
                </ExpandableContent>

                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                        <div className="order-2 md:order-1">
                            <h2>Nika</h2>
                            <p >Nika's offical name is Sara-unique Herceg-bos-tor. She was the very first Tornjak to enter a dog show in the USA. Although she loves and protects all her animals, Nika has a soft spot for the tiny bunnies and guinea pigs. She counts them regularly to make sure everyone is accounted for. </p>
                            <p><a href="https://tornjak.pedigre.net/details.php?id=6513" target="_blank">Pedigree</a></p>
                            <p><a href="https://ofa.org/advanced-search/?appnum=2584057" target="_blank">OFA testing</a></p>
                        </div>

                        <div className="order-1 md:order-1">
                            <img className="w-full max-w-lg mx-auto" src={nikaImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                        <div>
                            <img className="w-full max-w-lg mx-auto" src={ariImg} alt="" />
                        </div>

                        <div>
                            <h2>Ariela </h2>
                            <p >Ariela's offical name is Ariela Hrvatska Dika. She is a big fan of water and loves to help with the chores. She is comfortable around horses, ponies, and miniature horses.</p>
                            <p><a href="https://tornjak.pedigre.net/en/details.php?id=6556 " target="_blank">Pedigree</a></p>
                            <p>OFA testing - Not old enough yet</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="btn-outer bg-blue-dark ">
                <div className="btn-inner">
                    <a href="https://sites.google.com/view/blueshamrockfarm/tornjak" target="_blank" className="btn-a">More Tornjak Details</a>
                </div>
            </div> */}
            <hr className="h-1 border-0 bg-blue-dark  max-content mt-16 mx-auto"></hr>
        </div>
    );
}
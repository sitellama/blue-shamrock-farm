import goatGram from "@/assets/goat-gram.webp";
import barnWoodImg from "@/assets/farm-wood.webp";

const barnWood = `url(${barnWoodImg})`;

export function GoatGram() {
    return (
        <section className="bg-gray-600 py-6 md:py-24 border-b-[40px] border-solid border-brown md:!bg-center !bg-cover" style={{ background: barnWood }}>
            <div className="max-content btn-outer bg-blue-light lg:relative max-w-[90%] lg:max-w-[64%]">
                <div className="btn-inner text-white text-center py-8 px-4 lg:px-32">
                    <div>
                        <img src={goatGram} className="lg:absolute bottom-[-4rem] right-[-10rem] mx-auto max-w-[75%] md:max-w-[275px]" />
                        <h2>Surprise! It's a Goat Gram!</h2>
                    </div>
                    <div>
                        <p>Have a special event coming up? Surprise someone special with an adorable goat snuggle session!</p>
                        <p>Enjoy 20 minutes of loving, feeding and taking selfies with your new goat bestie. Goat Grams can include:</p>
                        <ul className="list-disc list-inside">
                            <li>Goats get dressed up for special occasions</li>
                            <li>Goats will deliver flowers, candy or other gifts</li>
                            <li>You can also pick other animals for gram deliveries</li>
                        </ul>
                        <p>Or make it a party gram! Book multiple animals and shower your loved one with all the cuteness they can handle!</p>
                        <a href="/services" className="subheading">See Animal Gram details here</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
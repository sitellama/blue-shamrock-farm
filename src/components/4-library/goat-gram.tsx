import goatGram from "@/assets/goat-gram.png";

export function GoatGram() {
    return (
        <section className="bg-gray-600 py-24 border-b-[40px] border-solid border-brown">
            <div className="max-content btn-outer bg-blue-light relative max-w-[64%]">
                <div className="btn-inner text-white text-center py-8 px-32">
                    <div>
                        <img src={goatGram} className="absolute bottom-[-4rem] right-[-10rem] max-w-[275px]" />
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
                        <a href="#" className="subheading">See Animal Gram details here</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
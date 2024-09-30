import cow from "@/assets/support-the-farm.webp";
import pig from "@/assets/support-the-farm2.webp";
import soap from "@/assets/support-the-farm3.webp";

export function SupportUs() {
    return (
        <section className="mt-16 py-16 bg-blue-light text-white">
            <div className="max-content">
                <h2 className="text-center">Ways to Support the Animals</h2>
                <p className="subheading text-center">If you would like to send a thank you gift to any of the animals or grab some farm fresh goodies, please visit:</p>
            </div>

            <div className="w-[95%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-[5%]">
                <div className="flex flex-col items-center md:flex-[33%] mt-8">
                    <img src={cow} className="rounded-full border-solid border-4 border-white w-[292px]" alt="close up image of a cows nose" />
                    <a
                        href="https://www.amazon.com/hz/wishlist/ls/1KF35XP0KD1RI?ref_=wl_share"
                        target="_blank"
                        className="btn-a mx-auto text-center text-2xl"
                    >
                        Amazon Wish List
                    </a>
                </div>

                <div className="flex flex-col items-center md:flex-[33%] mt-8">
                    <img src={soap} className="rounded-full border-solid border-4 border-white w-[292px]" alt="handmade rainbow colored soap" />
                    <a
                        href="https://blue-shamrock-farm-llc.square.site/"
                        target="_blank"
                        className="btn-a mx-auto text-center text-2xl"
                    >
                        Blue Shamrock Shop
                    </a>
                </div>

                <div className="flex flex-col items-center md:flex-[33%] mt-8">
                    <img src={pig} className="rounded-full border-solid border-4 border-white w-[292px]" alt="a small pig in muddy water" />
                    <a
                        href="https://blueshamrockfarm.my.canva.site/donate"
                        target="_blank"
                        className="btn-a mx-auto text-center text-2xl"
                    >
                        Useful Items to Donate
                    </a>
                </div>
            </div>
        </section>
    );
}
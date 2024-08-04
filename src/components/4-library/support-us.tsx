import cow from "@/assets/support-the-farm.jpg";

export function SupportUs() {
    return (
        <section className="bg-blue-light">
            <div className="py-16 flex justify-between gap-[10%] max-content">
                <div className="flex justify-center items-center">
                    <img src={cow} className="" />
                </div>
                <div className="text-center">
                    <h2>Ways to Support the Animals</h2>
                    <p className="subheading">If you would like to send a thank you gift to any of the animals or grab some farm fresh goodies, please visit:</p>
                    <div className="flex gap-[15px]">
                        <div className="btn-outer bg-white">
                            <div className="btn-inner border-black h-[100px] flex items-center">
                                <a href="#" className="btn-a text-black">Amazon Animal Wish List</a>
                            </div>
                        </div>
                        <div className="btn-outer bg-white">
                            <div className="btn-inner border-black h-[100px] flex items-center">
                                <a href="#" className="btn-a text-black">Blue Shamrock Shop</a>
                            </div>
                        </div>
                        <div className="btn-outer bg-white">
                            <div className="btn-inner border-black h-[100px] flex items-center">
                                <a href="#" className="btn-a text-black">Useful Items to Donate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
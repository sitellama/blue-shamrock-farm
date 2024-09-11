import cow from "@/assets/support-the-farm.jpg";
import pig from "@/assets/support-the-farm2.jpg";
import soap from "@/assets/support-the-farm3.jpg";

export function SupportUs() {
    return (
        <section className="mt-16 py-16 bg-blue-light text-white">
            <div className="max-content">
                <h2 className="text-center">Ways to Support the Animals</h2>
                <p className="subheading text-center">If you would like to send a thank you gift to any of the animals or grab some farm fresh goodies, please visit:</p>
            </div>

            <div className="w-[95%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[5%]">
                <div className="flex flex-col items-center md:flex-[33%] mt-8">
                    <img src={cow} className="rounded-full border-solid border-4 border-white w-[292px]" />
                    <a href="#" className="btn-a mx-auto text-center text-2xl">Amazon Wish List</a>
                </div>

                <div className="flex flex-col items-center md:flex-[33%] mt-8">
                    <img src={soap} className="rounded-full border-solid border-4 border-white w-[292px]" />
                    <a href="#" className="btn-a mx-auto text-center text-2xl">Blue Shamrock Shop</a>
                </div>

                <div className="flex flex-col items-center md:flex-[33%] mt-8">
                    <img src={pig} className="rounded-full border-solid border-4 border-white w-[292px]" />
                    <a href="#" className="btn-a mx-auto text-center text-2xl">Useful Items to Donate</a>
                </div>
            </div>

            {/* <div className="flex flex-col md:flex-row items-center justify-center max-w-[1000px] mx-auto h-[268px]">
                <div className="flex flex-1 justify-center items-center">
                    <img src={cow} className=" rounded-full h-[300px] border-solid border-4 border-white" />
                </div>

                <div className="flex-1 px-4 h-full">
                    <div className="w-[600px] mx-auto flex flex-col justify-between h-full">
                        <div className="btn-outer bg-white w-full">
                            <div className="btn-inner border-black w-[100%] flex items-center md:order-last">
                                <a href="#" className="btn-a text-black mx-auto">Amazon Animal Wish List</a>
                            </div>
                        </div>
                        <div className="btn-outer bg-white w-full">
                            <div className="btn-inner border-black w-[100%] flex items-center">
                                <a href="#" className="btn-a text-black mx-auto">Blue Shamrock Shop</a>
                            </div>
                        </div>
                        <div className="btn-outer bg-white w-full">
                            <div className="btn-inner border-black w-[100%] flex items-center">
                                <a href="#" className="btn-a text-black mx-auto">Useful Items to Donate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}
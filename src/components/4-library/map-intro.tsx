import oxfordMap from "@/assets/oxford-michigan.png";

export function MapIntro() {
    return (
        <section className="flex justify-between gap-[10%] max-content mb-32">
            <div className="flex-1 text-center">
                <h1>Blue Shamrock Farm</h1>
                <p className="subheading">Welcome to Blue Shamrock Farm! We are a small, family run farm located in Oxford, MI.</p>
                <div className="w-full flex md:hidden justify-center items-center ">
                    <img src={oxfordMap} className="w-[65%]" />
                </div>
                <p>What sets us apart is the special bond we have with our animals. Before any event, we open our gates and let each animal choose to 'volunteer' for the occasion. Since our animals are naturally social, there’s never a shortage of eager participants. This approach is the heart of our homestead and guarantees you’ll meet the most enthusiastic members of our loving family.</p>
                <p>Ready to brighten up your next big event?</p>
                <div className="btn-outer bg-blue-dark ">
                    <div className="btn-inner">
                        <a href="#" className="btn-a">Now Taking Reservations!</a>
                    </div>
                </div>
            </div>

            <div className="hidden flex-1 max-w-[500px] md:flex justify-center items-center">
                <img src={oxfordMap} className="w-[85%]" />
            </div>
        </section>
    );
}

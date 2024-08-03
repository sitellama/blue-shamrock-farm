import goatYoga from "@/assets/goat-yoga-classes.png";

export function GoatYoga() {
    return (
        <section >
            <div className="flex gap-[5%] w-[90%] max-w-[1000px] mx-auto">
                <div className="w-[50%]">
                    <img src={goatYoga} />
                </div>
                <div className="w-[50%]  m-auto ">
                    <h2>Join Us for Goat Yoga</h2>
                    <p className="subheading">You bring the yoga mats, we'll bring the goats!</p>
                    <p>Goat yoga classes bring a playful twist to classic yoga. Our sessions include 1 hour of uplifting yoga led by professional yoga instructor, Katie DeFur. We currently accommodate up to 10 participants and 10 goats. </p>
                    <p>Our goats and fencing are all mobile so let us liven up your next gathering with this  unique animal experience.</p>
                    <div className="btn-outer bg-brown mx-0">
                        <div className="btn-inner">
                            <a href="#" className="btn-a">Register Today!<span className="sr-only"> for goat yoga</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
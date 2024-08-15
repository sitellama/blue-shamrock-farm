import barn from "@/assets/barn-sketch.png";
import bday from "@/assets/birthday-parties.jpg";
import senior from "@/assets/senior-center-events.jpg";
import shamrock from "@/assets/blue-shamrock.png";
import holiday from "@/assets/holiday-parties.jpg";
import fair from "@/assets/fairs-and-festivals.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function EventsSection() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <section className="mt-0">
            <div className="bg-blue-dark pt-16 pb-40 -mb-24">
                <img src={barn} className="mx-auto max-w-[300px]" />
                <div className="w-[50%] max-w-[900px] mx-auto text-white text-center">
                    <h2>Celebrations and Events</h2>
                    <p>Host your next party with us or let us bring the party to you!</p>
                    <p>We're experienced hosts offering 2 hours or more of fun activities, complete with music and a ton of party animals. Our barnyard critters are always ready to join the fun, whether they're entertaining guests at our venue or strutting their stuff at your special event. Explore some of our past party themes for inspiration!</p>
                    <a>View all party packages</a>
                </div>
            </div>

            {/* start slides */}
            <div className="slider-container max-content w-[80%] mx-auto">
                <Slider {...settings}>

                    {/*Birthday Parties*/}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={bday} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Birthday Parties</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Holiday Parties */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={holiday} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Holiday Parties</h3>
                            <p>Celebrate the holidays with rustic ambiance.</p>
                            <p>Friendly animals and picturesque surroundings are the perfect setting for memorable gatherings, filled with laughter and joy.</p>
                            <p> Discover the joy of holiday parties at Blue Shamrock Farm, where laughter, fun, and furry friends await!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Fairs & Festivals */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={fair} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Fairs & Festivals</h3>
                            <p>Be it medieval times or the annual state fair, our barnyard friends love making visitors smile.</p>
                            <p>From cuddly baby goats to quirky chickens, animal antics cab captivate fairgoers of all ages.</p>
                            <p>Our friendly staff ensures a safe and enjoyable experience, while our animals adds to the festive atmosphere.</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Graduation Parties */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={bday} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Graduation Parties</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Neighborhood Block Parties */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={bday} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Neighborhood Block Parties</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* School Functions */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={bday} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>School Functions</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Church Gatherings */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={bday} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Church Gatherings</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Senior Center Visits */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={senior} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Senior Center Events</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p>Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Grand Openings */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={bday} />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Grand Openings</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                </Slider>
            </div >
        </section >
    );
}
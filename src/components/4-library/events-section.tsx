import barn from "@/assets/barn-sketch.webp";
import bday from "@/assets/birthday-parties.webp";
import holiday from "@/assets/holiday-parties.webp";
import fair from "@/assets/fairs-and-festivals.webp";
import graduation from "@/assets/graduation-party.webp";
import blockParty from "@/assets/neighborhood-party.webp";
import school from "@/assets/school-events.webp";
import church from "@/assets/church-events.webp";
import grandOpening from "@/assets/grand-opening.webp";
import senior from "@/assets/senior-center-events.webp";
import shamrock from "@/assets/blue-shamrock.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function EventsSection() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: true,

        responsive: [

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <section className="mt-0">
            <div className="bg-blue-dark pt-16 pb-40 -mb-24">
                <img src={barn} className="mx-auto max-w-[300px]" alt="sketch of a barn" />
                <div className="max-content md:w-[50%] max-w-[900px] mx-auto text-white text-center">
                    <h2>Celebrations and Events</h2>
                    <p>Host your next party with us or let us bring the party to you!</p>
                    <p>We're experienced hosts offering 2 hours or more of fun activities, complete with music and a ton of party animals. Our barnyard critters are always ready to join the fun, whether they're entertaining guests at our venue or strutting their stuff at your special event. Explore some of our past party themes for inspiration!</p>
                    <a href="/services">View all party packages</a>
                </div>
            </div>

            {/* start slides */}
            <div className="slider-container max-content w-[65%] md:w-[80%] mx-auto">
                <Slider {...settings}>

                    {/*Birthday Parties*/}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={bday} alt="a couple taking a selfie with an alpaca" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Birthday Parties</h3>
                            <p>Both kids and adults can enjoy the charm of a country-themed birthday party.</p>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic birthdays, we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Holiday Parties */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={holiday} alt="a goat wearing a santa hat" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Holiday Parties</h3>
                            <p>Celebrate the holidays with rustic ambiance.</p>
                            <p>Friendly animals and picturesque surroundings are the perfect setting for memorable gatherings, filled with laughter and joy.</p>
                            <p> Discover the joy of holiday parties at Blue Shamrock Farm, where laughter, fun, and furry friends await!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Fairs & Festivals */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={fair} alt="children gathered around a petting zoo at a fair" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Fairs & Festivals</h3>
                            <p>Be it medieval times or the annual state fair, our barnyard friends love making visitors smile.</p>
                            <p>From cuddly baby goats to quirky chickens, animal antics cab captivate fairgoers of all ages.</p>
                            <p>Our friendly staff ensures a safe and enjoyable experience, while our animals adds to the festive atmosphere.</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Graduation Parties */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={graduation} alt="someone throwing a graduation cap into the air" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Graduation Parties</h3>
                            <p>Graduations are a time for celebration between family and friends.</p>
                            <p>Why not celebrate your achievement with cuteness and charm!</p>
                            <p>There's no better way to mark this milestone than with adorable, loveable animals that everyone will enjoy!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Neighborhood Block Parties */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={blockParty} alt="a group of women posing with an alpaca, goat and peacock" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Neighborhood Block Parties</h3>
                            <p> Guests love playing party games along side our silly critters and depending on the season, baby animals are available for snuggles. </p>
                            <p>With a track record of fantastic block parties we're eager to share the joy and fun with you!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* School Functions */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={school} alt="goats walking in front a school sports sign" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>School Functions</h3>
                            <p>Quickly become the favorite parent within your child's school by booking with Blue Shamrock Farm.</p>
                            <p>Watch as students delight in hands-on animal interactions while learning about farm life.</p>
                            <p>Time to make your child's school event a delightful mix of excitement and education!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Church Gatherings */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={church} alt="a group of people petting a peacock" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Church Gatherings</h3>
                            <p>Enhance your church gathering with the joy and warmth of our mobile animal party!</p>
                            <p>As families and children interact with our animals, they'll enjoy a fun, engaging, and wholesome activity that fosters connection and creates lasting memories. </p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Senior Center Visits */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={senior} alt="two senior women feeding goats in a petting zoo" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Senior Center Events</h3>
                            <p>Our animals love visiting senior communities!</p>
                            <p>Gentle goats and sweet bunnies make for a heartwarming and lively event.</p>
                            <p>Book today to see why both residents and staff can't get enough of our delightful farm animals.</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                    {/* Grand Openings */}
                    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <img src={grandOpening} alt="a large air balloon that says 'grand opening'" />
                        <div className="bg-white p-4 text-center h-[485px]">
                            <h3>Grand Openings</h3>
                            <p>Let our animals captivate guests of all ages for your special launch celebration.</p>
                            <p>Picture the excitement as attendees interact friendly farm animals right at your location.</p>
                            <p>Enhance your grand opening and leave a lasting impression on your future customers!</p>
                        </div>
                        <div className="bg-blue-light">
                            <img src={shamrock} alt="" className="mx-auto w-[25px] py-1" />
                        </div>
                    </div>

                </Slider>
            </div >
        </section >
    );
}
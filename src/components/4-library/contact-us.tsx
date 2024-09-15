// @ts-nocheck
import shamrock from "@/assets/shamrock-clovers.png";

// export function ContactUs() {
//     return (
//         <section>
//             <div>
//                 <h1>Get in Touch</h1>
//                 <p>First Name</p>
//                 <p>Last Name</p>
//                 <p>Email</p>
//                 <p>Sumbit</p>
//             </div>
//         </section>
//     );
// }

import React from "react";

export function ContactUs() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // katie's access key in place
        // formData.append("access_key", "405982dd-a7a4-40fe-bafb-ef718f3ffb52");

        // sitellama key
        formData.append("access_key", "a04f96ee-90d4-419a-98a1-81e984f2f3de");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    // const form = document.getElementById('interests');
    // const formData = new FormData(interests);
    // const interests = [];

    // interests.querySelectorAll('input[name="interest"]:checked').forEach((checkbox) => {
    //     interests.push(checkbox.value);
    // });

    // formData.set('interest', interests);


    return (
        <section className=" relative flex flex-col lg:max-content" id="contact">

            <div>
                <h2 className="text-center">Get in Touch</h2>
                <form className="w-[90%] md:w-[60%] max-w-8xl md:pb-12 flex flex-col justify-center gap-y-1 mx-auto" onSubmit={onSubmit}>
                    <label htmlFor="name" >Name *</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" />

                    <label>Interests. Select all that apply.</label>
                    <div className="columns-2" id="interests">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Petting Zoo" name="interest" value="Petting Zoo" />
                            <label htmlFor="coding">Petting Zoo</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Goat Yoga" name="interest" value="Goat Yoga" />
                            <label htmlFor="coding">Goat Yoga</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Animal Waitstaff" name="interest" value="Animal Waitstaff" />
                            <label htmlFor="coding">Animal Waitstaff</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Parties" name="interest" value="Parties" />
                            <label htmlFor="coding">Parties</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Animal Snuggling" name="interest" value="Animal Snuggling" />
                            <label htmlFor="coding">Animal Snuggling</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Animal Gram" name="interest" value="Animal Gram" />
                            <label htmlFor="coding">Animal Gram</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Educational Classes" name="interest" value="Educational Classes" />
                            <label htmlFor="coding">Educational Classes</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Photoshoot" name="interest" value="Photoshoot" />
                            <label htmlFor="coding">Photoshoot</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Nativity Scene" name="interest" value="Nativity Scene" />
                            <label htmlFor="coding">Nativity Scene</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Pony Rides" name="interest" value="Pony Rides" />
                            <label htmlFor="coding">Pony Rides</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Pony Rides" name="interest" value="Pony Rides" />
                            <label htmlFor="coding">Add Ons</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Animal Gram" name="interest" value="Animal Gram" />
                            <label htmlFor="coding">Something Else</label>
                        </div>
                    </div>

                    <label htmlFor="phone">What dates are you interested in?</label>
                    <input type="text" id="phone" name="phone" />

                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required ></textarea>

                    <input
                        className="cursor-pointer w-[calc(100%-16px)] md:w-1/4 mx-auto py-[5px] mt-4 border-[1px] border-black ring-8 ring-[#B9B0AB] bg-[#B9B0AB]"
                        type="submit"
                    />
                </form>

                <div className="flex justify-center mt-8 md:mt-4 md:mb-4">{result}</div>

                <div className="flex -mt-20 md:mt-0">
                    <img src={shamrock} alt="" className="-z-10 md:absolute left-0 bottom-0 w-1/2 md:w-1/3" />
                    <img src={shamrock} alt="" className="-z-10 md:absolute right-0 bottom-0 w-1/2 md:w-1/3 [transform:rotateY(180deg)]" />
                </div>
            </div>
        </section>
    );
}
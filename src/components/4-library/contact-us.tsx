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

        // sitellama access key in place
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

    return (
        <section className=" relative flex flex-col lg:max-content">

            <div>
                <h2 className="text-center">Get in Touch</h2>
                <form className="w-4/5 md:w-2/5 max-w-8xl flex flex-col justify-center gap-y-1 mx-auto" onSubmit={onSubmit}>
                    <label for="name" >Name</label>
                    <input type="text" id="name" name="name" />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label for="phone">Phone</label>
                    <input type="text" id="phone" name="phone" />
                    <label for="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                    <input
                        className="cursor-pointer w-[calc(100%-16px)] lg:w-1/4 mx-auto py-[5px] mt-4 border-[1px] border-black ring-8 ring-[#B9B0AB] bg-[#B9B0AB]"
                        type="submit"
                    />
                </form>
                <div className="flex ">
                    <img src={shamrock} alt="" className="-z-10 md:absolute left-0 bottom-0 w-1/2 lg:w-1/3" />
                    <img src={shamrock} alt="" className="-z-10 md:absolute right-0 bottom-0 w-1/2 lg:w-1/3 [transform:rotateY(180deg)]" />
                </div>
                <div className="flex justify-center mt-4">{result}</div>
            </div>
        </section>
    );
}
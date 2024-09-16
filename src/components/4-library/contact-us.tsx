import React from "react";
import shamrock from "@/assets/shamrock-clovers.png";

type OurRes = {
    success: boolean;
    message: string;
    data: Record<string, string>;
};

export function ContactUs() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();

        setResult("Sending....");

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const checkboxes: string[] = [];

        form.querySelectorAll<HTMLInputElement>("input[type=checkbox]").forEach(
            (checkbox) => {
                if (checkbox.checked) {
                    formData.delete(checkbox.name);
                    checkboxes.push(checkbox.value);
                } 
            }
        );

        console.log("--formData", checkboxes);

        const interestsName = "interests"
        formData.append(interestsName, JSON.stringify(checkboxes));


        // katie's access key in place
        // formData.append("access_key", "405982dd-a7a4-40fe-bafb-ef718f3ffb52");

        // sitellama key
        formData.append("access_key", "a04f96ee-90d4-419a-98a1-81e984f2f3de");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (!res.ok || res.status !== 200) {
                throw new Error("Error");
            }

            const resData = await res.json() as OurRes;
            resData.data[interestsName] = JSON.parse(resData.data[interestsName]);

            setResult(`result ${JSON.stringify(resData.data, null, 2)}`);
        } catch (error) {
            console.error("Error", error);
            setResult(`result2 ${error}`);
        }
    };

    return (
        <section className=" relative flex flex-col lg:max-content" id="contact">
            <div>
                <h2 className="text-center">Get in Touch</h2>
                <form className="w-[90%] md:w-[60%] max-w-8xl md:pb-12 flex flex-col justify-center gap-y-1 mx-auto" onSubmit={onSubmit}>
                    {/* <label htmlFor="name" >Name *</label> */}
                    {/* <input type="text" id="name" name="name" required /> */}

                    <InputWithLabel label="Name" name="name" required />
                    <InputWithLabel label="Email" name="email" required />
                    <InputWithLabel label="Phone" name="phone" />

                    {/* <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" /> */}

                    <label>Interests. Select all that apply.</label>
                    <div className="columns-2" id="interests">
                        <InputCheckbox label="Petting Zoo" value="Petting Zoo" name="interest" />
                        {/* <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Petting Zoo" name="interest" value="Petting Zoo" />
                            <label htmlFor="coding">Petting Zoo</label>
                        </div> */}

                        {/* <div className="flex items-center">
                            <input type="checkbox" className="mr-2" id="Goat Yoga" name="interest" value="Goat Yoga" />
                            <label htmlFor="coding">Goat Yoga</label>
                        </div> */}
                        <InputCheckbox label="Goat Yoga"        /**/ value="Goat Yoga" />
                        <InputCheckbox label="Animal Waitstaff" /**/ value="Animal Waitstaff" />
                        <InputCheckbox label="Parties"          /**/ value="Parties" />
                        <InputCheckbox label="Animal Snuggling" value="Animal Snuggling" />
                        <InputCheckbox label="Animal Gram" value="Animal Gram" />
                        <InputCheckbox label="Educational Classes" value="Educational Classes" />
                        <InputCheckbox label="Photoshoot" value="Photoshoot" />
                        <InputCheckbox label="Nativity Scene" value="Nativity Scene" />
                        <InputCheckbox label="Pony Rides" value="Pony Rides" />
                        <InputCheckbox label="Add Ons" value="Add Ons" />
                        <InputCheckbox label="Something Else" value="Something Else" />
                        {/* 
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
                        */}
                    </div>

                    <label htmlFor="dates">What dates are you interested in?</label>
                    <input type="text" id="dates" name="dates" />

                    {/* <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required></textarea> */}
                    <InputWithLabel label="Message" name="message" required>
                        <textarea id="message" name="message" required />
                    </InputWithLabel>

                    <input
                        className="cursor-pointer w-[calc(100%-16px)] md:w-1/4 mx-auto py-[5px] mt-4 border-[1px] border-black ring-8 ring-[#B9B0AB] bg-[#B9B0AB]"
                        type="submit"
                    />
                </form>

                <div className="flex justify-center mt-8 md:mt-4 md:mb-4 whitespace-pre">
                    {result}
                </div>

                <div className="flex -mt-20 md:mt-0">
                    <img src={shamrock} alt="" className="-z-10 md:absolute left-0 bottom-0 w-1/2 md:w-1/3" />
                    <img src={shamrock} alt="" className="-z-10 md:absolute right-0 bottom-0 w-1/2 md:w-1/3 [transform:rotateY(180deg)]" />
                </div>
            </div>
        </section>
    );
}

function InputWithLabel({ label, name, required, children, ...rest }: { label: string; name: string; } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex flex-col">
            <div className="flex items-center gap-1">
                {label}
                {required && (
                    <span className="text-red-500 text-[1.5rem] font-bold">*</span>
                )}
            </div>

            {children
                ? children
                : <input type="text" name={name} required={required} {...rest} />
            }

        </label>
    );
}

function InputCheckbox({ label, value, name }: { label: string; value: string; name?: string; }) {
    return (
        <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox size-5 rounded border-emerald-800 focus:border-emerald-800 !text-emerald-300 focus:ring-0" name={name} value={value} />
            {label}
        </label>
    );
}
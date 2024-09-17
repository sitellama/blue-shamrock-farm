import React from "react";
import shamrock from "@/assets/shamrock-clovers.webp";

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

        // console.log("--formData", checkboxes);

        const interestsName = "interests"
        formData.append(interestsName, JSON.stringify(checkboxes));


        // katie's access key in place
        formData.append("access_key", "405982dd-a7a4-40fe-bafb-ef718f3ffb52");

        // sitellama key
        // formData.append("access_key", "a04f96ee-90d4-419a-98a1-81e984f2f3de");

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

            setResult(`Your message has been sent.`);
        } catch (error) {
            console.error("Error", error);
            setResult(`result2 ${error}`);
        }
    };

    return (
        <section className=" relative flex flex-col lg:max-content" id="contact">
            <div>
                <h2 className="text-center">Get in Touch</h2>
                <form className="w-[90%] md:w-[60%] max-w-8xl md:pb-12 flex flex-col justify-center gap-y-1 mx-auto relative z-50" onSubmit={onSubmit}>
                    <InputWithLabel label="Name" name="name" required />
                    <InputWithLabel label="Email" name="email" required />
                    <InputWithLabel label="Phone" name="phone" />

                    <label>Interests. Select all that apply.</label>
                    <div className="columns-2" id="interests">
                        <InputCheckbox label="Petting Zoo" value="Petting Zoo" name="interest" />
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
                    <img src={shamrock} alt="" className="md:absolute left-0 bottom-0 w-1/2 md:w-1/3" />
                    <img src={shamrock} alt="" className="md:absolute right-0 bottom-0 w-1/2 md:w-1/3 [transform:rotateY(180deg)]" />
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
                    <span className="text-blue-medium text-[1.5rem] font-bold">*</span>
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
            <input type="checkbox" className="form-checkbox size-5 rounded focus:ring-0" name={name} value={value} />
            {label}
        </label>
    );
}
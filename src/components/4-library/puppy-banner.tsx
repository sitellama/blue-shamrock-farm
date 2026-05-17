import React from "react";
import icon from "../../assets/ultrasound-icon.webp";
import background from "../../assets/puppy-banner-background.webp";
import announcementImg from "../../assets/litter-announcement-c.jpg";
import shamrock from "@/assets/shamrock-clovers.webp";

type OurRes = {
    success: boolean;
    message: string;
    data: Record<string, string>;
};


export function PuppyBanner({ pagelink, announcement }: { pagelink: boolean; announcement: boolean; }) {
    return (
        <div className="block bg-blue-dark text-center text-white" style={{ backgroundImage: `url(${background})` }}>
            <div className="max-content sm:w-[40rem] py-4 sm:py-8">
                <img src={icon} alt="" className="h-20 mx-auto" />
                <h1 className="text-5xl">We have puppies !</h1>
                <p>Blue Shamrock Farm has some wonderful news. Pluto and Nika's puppies were born 3/20 and are happy, healthy puppies.</p>
                {pagelink && <p><a href="/tornjak">MEET THE PARENTS </a></p>}
                {announcement && <img src={announcementImg} className="mx-auto" alt="litter announcement: Sire is Pluto Dalmatinski Vrisak. Dam is Sara-unique Herceg-bos-tor. Puppies expected August 2025" />}
                <p>Please reach out via <a href="https://www.facebook.com/blueshamrockfarm">facebook</a> or our <a href="#contact">contact form</a> for more information.</p>
            </div>
        </div>
    );
}

export function ContactUs() {
    const [result, setResult] = React.useState("");
    const web3formsAccessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "").trim();

    const onSubmit = async (event: any) => {
        event.preventDefault();

        if (!web3formsAccessKey) {
            setResult("Contact form is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY.");
            return;
        }

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

        const interestsName = "interests";
        formData.append(interestsName, JSON.stringify(checkboxes));

        formData.append("access_key", web3formsAccessKey);

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

            setResult("Your message has been sent.");
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
                        <InputCheckbox label="Goat Yoga" /**/ value="Goat Yoga" />
                        <InputCheckbox label="Animal Waitstaff" /**/ value="Animal Waitstaff" />
                        <InputCheckbox label="Parties" /**/ value="Parties" />
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
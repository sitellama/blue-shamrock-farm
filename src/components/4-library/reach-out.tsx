import shamrock from "@/assets/shamrock-clovers.webp";

const submitUrl = "https://api." + "web3forms.com/submit";
const accessKeyFieldName = "access" + "_key";

export function ContactUs() {
    const web3formsAccessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "").trim();

    if (!web3formsAccessKey) {
        return (
            <section className="relative flex flex-col lg:max-content" id="contact">
                <div className="w-[90%] md:w-[60%] max-w-8xl mx-auto py-8 text-center">
                    Contact form is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY.
                </div>
            </section>
        );
    }

    return (
        <section className="relative flex flex-col lg:max-content" id="contact">
            <div>
                <h2 className="text-center">Get in Touch</h2>
                <form
                    className="w-[90%] md:w-[60%] max-w-8xl md:pb-12 flex flex-col justify-center gap-y-1 mx-auto relative z-50"
                    action={submitUrl}
                    method="POST"
                >
                    <input type="hidden" name={accessKeyFieldName} value={web3formsAccessKey} />
                    <input type="hidden" name="subject" value="Blue Shamrock Farm contact form" />

                    <InputWithLabel label="Name" name="name" required />
                    <InputWithLabel label="Email" name="email" required />
                    <InputWithLabel label="Phone" name="phone" />

                    <label>Interests. Select all that apply.</label>
                    <div className="columns-2" id="interests">
                        <InputCheckbox label="Petting Zoo" value="Petting Zoo" name="interests[]" />
                        <InputCheckbox label="Goat Yoga" value="Goat Yoga" name="interests[]" />
                        <InputCheckbox label="Animal Waitstaff" value="Animal Waitstaff" name="interests[]" />
                        <InputCheckbox label="Parties" value="Parties" name="interests[]" />
                        <InputCheckbox label="Animal Snuggling" value="Animal Snuggling" name="interests[]" />
                        <InputCheckbox label="Animal Gram" value="Animal Gram" name="interests[]" />
                        <InputCheckbox label="Educational Classes" value="Educational Classes" name="interests[]" />
                        <InputCheckbox label="Photoshoot" value="Photoshoot" name="interests[]" />
                        <InputCheckbox label="Nativity Scene" value="Nativity Scene" name="interests[]" />
                        <InputCheckbox label="Pony Rides" value="Pony Rides" name="interests[]" />
                        <InputCheckbox label="Add Ons" value="Add Ons" name="interests[]" />
                        <InputCheckbox label="Something Else" value="Something Else" name="interests[]" />
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

                <div className="flex -mt-20 md:mt-0">
                    <img src={shamrock} alt="" className="md:absolute left-0 bottom-0 w-1/2 md:w-1/3" />
                    <img src={shamrock} alt="" className="md:absolute right-0 bottom-0 w-1/2 md:w-1/3 [transform:rotateY(180deg)]" />
                </div>
            </div>
        </section>
    );
}

function InputWithLabel({ label, name, required, children, ...rest }: { label: string; name: string; required?: boolean; children?: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
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

function InputCheckbox({ label, value, name }: { label: string; value: string; name: string; }) {
    return (
        <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox size-5 rounded focus:ring-0" name={name} value={value} />
            {label}
        </label>
    );
}

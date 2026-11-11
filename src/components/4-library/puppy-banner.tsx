import icon from "../../assets/ultrasound-icon.webp";
import background from "../../assets/puppy-banner-background.webp";
import announcementImg from "../../assets/litter-announcement-c.jpg";
import { Link } from "react-router-dom";


export function PuppyBanner({ pagelink, announcement, description }: { pagelink: boolean; announcement: boolean; description: boolean; }) {
    return (
        <div className="block bg-blue-dark text-center text-white" style={{ backgroundImage: `url(${background})` }}>
            <div className="max-content sm:w-[40rem] py-4 sm:py-8">
                <img src={icon} alt="" className="h-20 mx-auto" />
                <div className="my-6">
                    <h1 className="text-5xl mb-0">We have puppies !</h1>
                    <p className="mt-0 subheading">Please reach out via <a href="https://www.facebook.com/blueshamrockfarm">facebook</a> or our <a href="#contact">contact form</a> for more information.</p>
                </div>

                {/* From Druapl Puppy Banner Module */}
                {/* for TORNJAK puppies */}
                {pagelink && <Link to="/tornjak" className="no-underline">
                    <p className="mb-8">&#10084; <span className="uppercase underline my-1">[field_puppy_breed] Puppies:</span> [field_litter_announcement_desc]</p>
                </Link>}
                {announcement && <img src={announcementImg} className="mx-auto" alt="[field_litter_announcement_desc]" />}
                {description && <p className="mb-8">[field_litter_description]</p>}

                {/* for CSD puppies */}
                {pagelink && <Link to="/croatian-sheepdog" className="mb-4 no-underline">
                    <p className="my-1">&#10084; <span className="uppercase underline my-1">[field_puppy_breed] Puppies:</span> [field_litter_announcement_desc]</p>
                </Link>}
                {announcement && <img src={announcementImg} className="mx-auto" alt="litter announcement: Sire is Pluto Dalmatinski Vrisak. Dam is Sara-unique Herceg-bos-tor. Puppies expected August 2025" />}
                {description && <p className="mb-8">[field_litter_description]</p>}
            </div>
        </div>
    );
}
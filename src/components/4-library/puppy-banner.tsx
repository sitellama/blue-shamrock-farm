import icon from "../../assets/ultrasound-icon.webp";
import background from "../../assets/puppy-banner-background.webp";
import announcementImg from "../../assets/litter-announcement.webp";


export function PuppyBanner({ pagelink, announcement }: { pagelink: boolean; announcement: boolean; }) {
    return (
        <div className="block bg-blue-dark text-center text-white" style={{ backgroundImage: `url(${background})` }}>
            <div className="max-content sm:w-[40rem] py-4 sm:py-8">
                <img src={icon} alt="" className="h-20 mx-auto" />
                <h1 className="text-5xl">We're expecting puppies !</h1>
                <p>Blue Shamrock Farm has some wonderful news. Pluto and Nika are excepting an exceptional litter due August 2025.</p>
                {pagelink && <p><a href="/tornjak">MEET THE PARENTS </a></p>}
                {announcement && <img src={announcementImg} className="mx-auto" alt="litter announcement: Sire is Pluto Dalmatinski Vrisak. Dam is Sara-unique Herceg-bos-tor. Puppies expected August 2025" />}
                <p>Please reach out via <a href="https://www.facebook.com/blueshamrockfarm">facebook</a> or our <a href="#contact">contact form</a> for more information.</p>
            </div>
        </div>
    );
}
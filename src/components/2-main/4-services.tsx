import { SEO } from "../../utils/seo";
import { ServicesEvents } from "../4-library/services-events";
import goat from "@/assets/holiday-parties.jpg";

export type Service = {
    image: string;
    label: string;
    content: string;
    pdfName: string;
    pdfUrl: string;
    onsite?: boolean;
    travel?: boolean;
};

const services: Service[] = [
    {
        image: goat,
        label: "Petting Zoo",
        content: "A petting zoo is a fun and interactive attraction where visitors can get up close and personal with a variety of friendly animals. It typically features gentle, domesticated creatures like goats, sheep, rabbits, and chickens, allowing people to pet, feed, and sometimes even hold them. Petting zoos are popular for their educational and therapeutic benefits, offering a hands-on experience that fosters a connection with animals and promotes a sense of wonder and joy.",
        pdfName: "Petting Zoo Details",
        pdfUrl: "",
        onsite: true,
        travel: true,
    },
    {
        image: goat,
        label: "Pony Rides",
        content: "Pony rides are a classic and beloved activity for children of all ages. They offer a unique and memorable experience that combines the thrill of riding a horse with the charm and gentleness of a pony. Pony rides are perfect for birthday parties, fairs, festivals, and other special events, providing entertainment and excitement for kids and adults alike.",
        pdfName: "Pony Rides Details",
        pdfUrl: "",
    },
];

const events: Service[] = [
    {
        image: goat,
        label: "Therapy Animals",
        content: "Therapy animals are specially trained to provide comfort, companionship, and emotional support to people in need. They are used in a variety of settings, including hospitals, nursing homes, schools, and rehabilitation centers, to help reduce stress, anxiety, and loneliness, and improve overall well-being. Therapy animals can be dogs, cats, horses, or other domesticated animals, and are known for their gentle and calming presence.",
        pdfName: "Therapy Animals Details",
        pdfUrl: "",
    },
];

function ServicesList({array} :{array: Service[]}) {
    return array.map(
        (item, index) => {
            return (
                <ServicesEvents
                    key={index}
                    image={item.image}
                    label={item.label}
                    content={item.content}
                    pdfName={item.pdfName}
                    pdfUrl={item.pdfUrl}
                    onsite={item.onsite}
                    travel={item.travel}
                />
            );
        }
    );
}

export function Services() {
    return (
        <>
            <SEO title="Services Page" description="This is the services page" href="/" />

            <h1 className="flex justify-center">Services</h1>

            <section className="flex flex-col items-center gap-16">
                <ServicesList array={events} />
            </section>
        </>
    );
}

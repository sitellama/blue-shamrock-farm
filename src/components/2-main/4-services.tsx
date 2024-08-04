import { SEO } from "../../utils/seo";
import { ServicesEvents } from "../4-library/services-events";
import goat from "@/assets/holiday-parties.jpg";

const services = [
    {
        image: goat,
        label: "Petting Zoo",
        content: "A petting zoo is a fun and interactive attraction where visitors can get up close and personal with a variety of friendly animals. It typically features gentle, domesticated creatures like goats, sheep, rabbits, and chickens, allowing people to pet, feed, and sometimes even hold them. Petting zoos are popular for their educational and therapeutic benefits, offering a hands-on experience that fosters a connection with animals and promotes a sense of wonder and joy.",
        linkText: "Petting Zoo Details",
        linkPDF: "",
        onsite: true,
        travel: true,
    },
    {
        image: goat,
        label: "Pony Rides",
        content: "Pony rides are a classic and beloved activity for children of all ages. They offer a unique and memorable experience that combines the thrill of riding a horse with the charm and gentleness of a pony. Pony rides are perfect for birthday parties, fairs, festivals, and other special events, providing entertainment and excitement for kids and adults alike.",
        linkText: "Pony Rides Details",
        linkPDF: "",
        onsite: false,
        travel: false,
    },
];

const events = [
    {
        image: goat,
        label: "Therapy Animals",
        content: "Therapy animals are specially trained to provide comfort, companionship, and emotional support to people in need. They are used in a variety of settings, including hospitals, nursing homes, schools, and rehabilitation centers, to help reduce stress, anxiety, and loneliness, and improve overall well-being. Therapy animals can be dogs, cats, horses, or other domesticated animals, and are known for their gentle and calming presence.",
        linkText: "Therapy Animals Details",
        linkPDF: "",
    },
];

const servicesList = (array: []) => array.map((array, index) => {
    return (
        <ServicesEvents
            key={index}
            image={array.image}
            label={array.label}
            content={array.content}
            linkText={array.linkText}
            linkPDF={array.linkPDF}
            onsite={array.onsite}
            travel={array.travel}
        />
    );
});

export function Services() {

    return (
        <>
            <SEO title="Services Page" description="This is the services page" href="/" />

            <h1 className="flex justify-center">Services</h1>

            <section className="flex flex-col items-center gap-16">
                {/* <ServicesEvents
                    image={goat}
                    label="Petting Zoo"
                    content="A petting zoo is a fun and interactive attraction where visitors can get up close and personal with a variety of friendly animals. It typically features gentle, domesticated creatures like goats, sheep, rabbits, and chickens, allowing people to pet, feed, and sometimes even hold them. Petting zoos are popular for their educational and therapeutic benefits, offering a hands-on experience that fosters a connection with animals and promotes a sense of wonder and joy."
                    linkText="Petting Zoo Details"
                    linkPDF=""
                /> */}

                {servicesList(services)}
            </section>
        </>
    );
}

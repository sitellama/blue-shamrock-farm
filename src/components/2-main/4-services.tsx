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
    },
    {
        image: goat,
        label: "Pony Rides",
        content: "Pony rides are a classic and beloved activity for children of all ages. They offer a unique and memorable experience that combines the thrill of riding a horse with the charm and gentleness of a pony. Pony rides are perfect for birthday parties, fairs, festivals, and other special events, providing entertainment and excitement for kids and adults alike.",
        linkText: "Pony Rides Details",
        linkPDF: "",
    },
    {
        image: goat,
        label: "Animal Shows",
        content: "Animal shows are a popular form of entertainment that feature trained animals performing a variety of tricks, stunts, and behaviors. They are a fun and engaging way to learn about different species and their natural behaviors, as well as the importance of conservation and animal welfare. Animal shows are suitable for all ages and can be customized to suit different themes and audiences.",
        linkText: "Animal Shows Details",
        linkPDF: "",
    },
    {
        image: goat,
        label: "Educational Programs",
        content: "Educational programs are designed to teach children and adults about animals, nature, and the environment in a fun and interactive way. They cover a wide range of topics, from wildlife conservation and animal care to biology and ecology, and can be tailored to suit different age groups and learning styles. Educational programs are ideal for schools, camps, and community groups looking to inspire curiosity and promote environmental awareness.",
        linkText: "Educational Programs Details",
        linkPDF: "",
    },
    {
        image: goat,
        label: "Therapy Animals",
        content: "Therapy animals are specially trained to provide comfort, companionship, and emotional support to people in need. They are used in a variety of settings, including hospitals, nursing homes, schools, and rehabilitation centers, to help reduce stress, anxiety, and loneliness, and improve overall well-being. Therapy animals can be dogs, cats, horses, or other domesticated animals, and are known for their gentle and calming presence.",
        linkText: "Therapy Animals Details",
        linkPDF: "",
    },
];

const servicesList = services.map((service, index) => {
    return (
        <ServicesEvents
            key={index}
            image={service.image}
            label={service.label}
            content={service.content}
            linkText={service.linkText}
            linkPDF={service.linkPDF}
        />
    );
});

export function Services() {

    return (
        <>
            <SEO title="Services Page" description="This is the services page" href="/" />

            <h1 className="flex justify-center">Services</h1>

            <section className="flex flex-col items-center gap-8">
                {/* <ServicesEvents
                    image={goat}
                    label="Petting Zoo"
                    content="A petting zoo is a fun and interactive attraction where visitors can get up close and personal with a variety of friendly animals. It typically features gentle, domesticated creatures like goats, sheep, rabbits, and chickens, allowing people to pet, feed, and sometimes even hold them. Petting zoos are popular for their educational and therapeutic benefits, offering a hands-on experience that fosters a connection with animals and promotes a sense of wonder and joy."
                    linkText="Petting Zoo Details"
                    linkPDF=""
                /> */}

                {servicesList}
            </section>
        </>
    );
}

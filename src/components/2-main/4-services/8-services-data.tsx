import goat from "@/assets/holiday-parties.jpg";
import { atom } from "jotai";

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
    // {
    //     image: goat,
    //     label: "Petting Zoo",
    //     content: "A petting zoo is a fun and interactive attraction where visitors can get up close and personal with a variety of friendly animals. It typically features gentle, domesticated creatures like goats, sheep, rabbits, and chickens, allowing people to pet, feed, and sometimes even hold them. Petting zoos are popular for their educational and therapeutic benefits, offering a hands-on experience that fosters a connection with animals and promotes a sense of wonder and joy.",
    //     pdfName: "Petting Zoo Details",
    //     pdfUrl: "",
    //     onsite: true,
    //     travel: true,
    // },
    // {
    //     image: goat,
    //     label: "Goat Yoga",
    //     content: "Goat yoga is a playful and unique fitness trend that combines traditional yoga practices with the company of friendly goats. In a typical session, participants perform yoga poses while goats roam freely around them, occasionally hopping onto their backs or snuggling up for some interaction. This blend of exercise and animal interaction aims to create a lighthearted, stress-relieving experience, enhancing the joy and relaxation of the yoga practice.",
    //     pdfName: "Goat Yoga Details",
    //     pdfUrl: "",
    //     onsite: true,
    //     travel: true,
    // },
    // {
    //     image: goat,
    //     label: "Parties",
    //     content: "Hosting parties on a farm offers a unique, charming setting that combines rustic appeal with natural beauty. Guests can enjoy open spaces, fresh air, and scenic views, while engaging in fun activities like hayrides, petting zoo visits, and bonfires. Whether it's a birthday, wedding, or corporate event, a farm setting provides a relaxed and memorable atmosphere, perfect for creating lasting memories in a picturesque countryside environment.",
    //     pdfName: "Party Details",
    //     pdfUrl: "",
    //     onsite: true,
    //     travel: true,
    // },
    {
        image: goat,
        label: "Animal Snuggling",
        content: "Visitors of all ages can enjoy gentle embraces with fluffy bunnies, soft lambs, and even serene goats under the guidance of our friendly staff. Surrounded by the serene beauty of rolling pastures and the sweet scent of hay, guests find solace and joy in the simple act of snuggling these gentle creatures.",
        pdfName: "Animal Snuggling Details",
        pdfUrl: "",
        onsite: true,
        travel: true,
    },
    {
        image: goat,
        label: "Animal Grams",
        content: "Experience the joy of surprise with Animal Gram deliveries! Whether it's a fluffy bunny, a chirping parrot, or a cuddly kitten, our adorable deliveries bring smiles and warmth straight to your doorstep. Perfect for birthdays, celebrations, or just to brighten someone's day, Animal Grams make every occasion memorable with their furry and feathered charm.",
        pdfName: "Animal Gram Details",
        pdfUrl: "",
        travel: true,
    },
    {
        image: goat,
        label: "Animals for Sale",
        content: "Discover the charm of our farm's baby animals for sale! From adorable piglets to fluffy chicks and playful kid goats, our farm offers the perfect opportunity to bring home a new furry or feathered friend. Raised with care and surrounded by the peaceful countryside, these lovable companions are ready to add joy and warmth to your family. Visit us to find your perfect match and experience the magic of bonding with our delightful baby animals!",
        pdfName: "View Current Animals for Sale",
        pdfUrl: "",
        onsite: true,
    },
    // {
    //     image: goat,
    //     label: "Educational Classes",
    //     content: "Explore and learn at our farm's educational classes! From understanding farm-to-table practices to hands-on experiences with animals, our classes offer enriching insights into agriculture and sustainability. Perfect for curious minds of all ages, these engaging sessions combine fun and learning amidst the tranquil beauty of our farm. Join us to cultivate knowledge and appreciation for the natural world right here on our educational farm!",
    //     pdfName: "Educational Details",
    //     pdfUrl: "",
    //     onsite: true,
    //     travel: true,
    // },
    // {
    //     image: goat,
    //     label: "Pop up Markets",
    //     content: "Explore our online store and pop-up markets to discover a delightful array of fresh produce, artisanal cheeses, homemade jams, and more. Savor the flavors of our sustainable practices and locally sourced ingredients, bringing the essence of the farm directly to your table. Join us in celebrating quality, community, and the goodness of farm life wherever you are!",
    //     pdfName: "View the Blue Shamrock Shop",
    //     pdfUrl: "",
    //     travel: true,
    // },
    // {
    //     image: goat,
    //     label: "Complete List of Add ons",
    //     content: "Saddle up for excitement with pony rides at our farm! Perfect for young adventurers and pony enthusiasts alike, our rides offer a memorable experience trotting through scenic trails. Guided by our experienced staff, children can enjoy the thrill of riding gentle ponies in a safe and picturesque environment. Join us for a delightful journey on horseback and create lasting memories at our charming farm!",
    //     pdfName: "List of Add on Services",
    //     pdfUrl: "",
    //     onsite: true,
    //     travel: true,
    // },
];

export const servicesAtom = atom(services);

export const filteredServicesAtom = atom<Service[]>(
    (get) => {
        const all = get(servicesAtom);
        const selected = get(dropdownSelectionAtom);

        const onsite = get(onsiteAtom);
        const travel = get(travelAtom);

        if (selected === "All") {
            const rv = all.filter((service) => {
                if (!onsite && !travel) {
                    return true;
                }
                const matched = !!service.onsite === onsite || !!service.travel === travel;
                return matched;
            });
            return rv;
        }

        const rv = all.filter((service) => {
            return selected === service.label;
        });

        return rv;
    }
);

// Dropdown List

export const dropdownSelectionAtom = atom<string>("All");

// Services Events

export const onsiteAtom = atom<boolean>(true);
export const travelAtom = atom<boolean>(true);
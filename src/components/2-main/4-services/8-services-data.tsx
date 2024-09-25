import pettingZooImg from "@/assets/petting-zoo-event.webp";
// import pettingZooPDF from "@/assets/pdf/mobile-petting-zoo.pdf";

import goatYogaImg from "@/assets/goat-yoag.webp";
// import goatYogaPDF from "@/assets/pdf/yoga-on-the-farm.pdf";
// import goatYogaPDFTwo from "@/assets/pdf/mobile-goat-yoga.pdf";

import waitstaffImg from "@/assets/animal-waiter.webp";
// import waitstaffPDF from "@/assets/pdf/waitstaff.pdf";

import partiesImg from "@/assets/birthday-parties.webp";
// import partiesPDF from "@/assets/pdf/mobile-party-package.pdf";

import snuggleImg from "@/assets/animal-snuggling.webp";
// import snugglePDF from "@/assets/pdf/snuggling.pdf";

import animalGramImg from "@/assets/holiday-parties.webp";
// import animalGramPDF from "@/assets/pdf/animal-grams.pdf";

import forSaleImg from "@/assets/Animals-for-sale.webp";
// import forSalePDF from "@/assets/pdf/sale-animals.pdf";

import educationImg from "@/assets/educational-classes.webp";
// import educationPDF from "@/assets/pdf/classes.pdf";

import photoshootImg from "@/assets/photoshoot.webp";
// import photoshootPDF from "@/assets/pdf/photoshoot.pdf";

import nativityImg from "@/assets/nativity.webp";
// import nativityPDF from "@/assets/pdf/nativity.pdf";

import ponyRidesImg from "@/assets/pony-rides.webp";
// import ponyRidesPDF from "@/assets/pdf/pony-rides.pdf";

import addOnImg from "@/assets/event-add-ons.webp";
// import addOnPDF from "@/assets/pdf/add-ons.pdf";


import popup from "@/assets/pop-up-shop.webp";
import { atom } from "jotai";

export type Service = {
    image: string;
    imageAlt: string;
    label: string;
    content: string;
    pdfName: string;
    pdfUrl: string;
    onsite?: boolean;
    travel?: boolean;
};

const services: Service[] = [
    {
        image: pettingZooImg,
        imageAlt: "sheep getting pet at a petting zoo",
        label: "Petting Zoo",
        content: "A petting zoo is a fun and interactive attraction where visitors can get up close and personal with a variety of friendly animals. It typically features gentle, domesticated creatures like goats, sheep, rabbits, and chickens, allowing people to pet, feed, and sometimes even hold them. Petting zoos are popular for their educational and therapeutic benefits, offering a hands-on experience that fosters a connection with animals and promotes a sense of wonder and joy.",
        pdfName: "Petting Zoo Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/mobile-petting-zoo",
        onsite: true,
        travel: true,
    },
    {
        image: goatYogaImg,
        imageAlt: "group of women standing on yoga mats surrounded by goats",
        label: "Goat Yoga & Alpaca Yoga",
        content: "Goat yoga is a playful and unique fitness trend that combines traditional yoga practices with the company of friendly goats. In a typical session, participants perform yoga poses while goats roam freely around them, occasionally hopping onto their backs or snuggling up for some interaction. This blend of exercise and animal interaction aims to create a lighthearted, stress-relieving experience, enhancing the joy and relaxation of the yoga practice.",
        pdfName: "Goat Yoga Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/animalyoga",
        onsite: true,
        travel: true,
    },
    {
        image: waitstaffImg,
        imageAlt: "beer burros donkey waiter dressed for a wedding",
        label: "Animal Waitstaff",
        content: "Add a unique twist to your next event with our delightful animal waitstaff! Donkeys, llamas or ponies at your service. Imagine these charming friends gracefully serving hors d'oeuvres and drinks, bringing an unexpected touch of fun and cuteness to your wedding or gathering. With their friendly antics and impeccable service, our four-legged team is sure to make your event truly extraordinary!",
        pdfName: "Animal Waitstaff Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/animal-waitstaff",
        onsite: false,
        travel: true,
    },
    {
        image: partiesImg,
        imageAlt: "couple taking a selfie with an alpaca",
        label: "Parties",
        content: "Hosting parties on a farm offers a unique, charming setting that combines rustic appeal with natural beauty. Guests can enjoy open spaces, fresh air, and scenic views, while engaging in fun activities like hayrides, petting zoo visits, and bonfires. Whether it's a birthday, wedding, or corporate event, a farm setting provides a relaxed and memorable atmosphere, perfect for creating lasting memories in a picturesque countryside environment.",
        pdfName: "Party Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/parties",
        onsite: true,
        travel: true,
    },
    {
        image: snuggleImg,
        imageAlt: "a bunny snuggled in someones arms",
        label: "Animal Snuggling",
        content: "Visitors of all ages can enjoy gentle embraces with fluffy bunnies, soft lambs, and even serene goats under the guidance of our friendly staff. Surrounded by the serene beauty of rolling pastures and the sweet scent of hay, guests find solace and joy in the simple act of snuggling these gentle creatures.",
        pdfName: "Animal Snuggling Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/snuggling",
        onsite: true,
        travel: false,
    },
    {
        image: animalGramImg,
        imageAlt: "a goat dressed in a santa hat",
        label: "Animal Grams",
        content: "Experience the joy of surprise with Animal Gram deliveries! Whether it's a fluffy bunny, a chirping parrot, or a cuddly kitten, our adorable deliveries bring smiles and warmth straight to your doorstep. Perfect for birthdays, celebrations, or just to brighten someone's day, Animal Grams make every occasion memorable with their furry and feathered charm.",
        pdfName: "Animal Gram Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/animalgrams",
        travel: true,
    },
    {
        image: forSaleImg,
        imageAlt: "a group of ducklings in the grass",
        label: "Animals for Sale",
        content: "Discover the charm of our farm's baby animals for sale! From adorable piglets to fluffy chicks and playful kid goats, our farm offers the perfect opportunity to bring home a new furry or feathered friend. Raised with care and surrounded by the peaceful countryside, these lovable companions are ready to add joy and warmth to your family. Visit us to find your perfect match and experience the magic of bonding with our delightful baby animals!",
        pdfName: "View Current Animals for Sale",
        pdfUrl: "https://blue-shamrock-farm-llc.square.site/animals",
        onsite: true,
    },
    {
        image: educationImg,
        imageAlt: "animal",
        label: "Educational Classes",
        content: "Explore and learn at our farm's educational classes! From understanding farm-to-table practices to hands-on experiences with animals, our classes offer enriching insights into agriculture and sustainability. Perfect for curious minds of all ages, these engaging sessions combine fun and learning amidst the tranquil beauty of our farm. Join us to cultivate knowledge and appreciation for the natural world right here on our educational farm!",
        pdfName: "Educational Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/classes",
        onsite: true,
        travel: true,
    },
    // {
    //     image: popup,
    //     imageAlt: "handmade soaps and candles displayed at a market",
    //     label: "Pop up Markets",
    //     content: "Explore our online store and pop-up markets to discover a delightful array of fresh produce, artisanal cheeses, homemade jams, and more. Savor the flavors of our sustainable practices and locally sourced ingredients, bringing the essence of the farm directly to your table. Join us in celebrating quality, community, and the goodness of farm life wherever you are!",
    //     pdfName: "View the Blue Shamrock Shop",
    //     pdfUrl: "",
    //     travel: true,
    // },\
    {
        image: photoshootImg,
        imageAlt: "artistic, professional photograph of a women an a horse cold weather",
        label: "Photoshoots",
        content: "Capture the magic of farm life with our exclusive photoshoots featuring our beloved animals! Snap beautiful moments with our friendly horses, goats, and more, creating lasting memories in a picturesque setting. Perfect for families and couples — book your session today!",
        pdfName: "Photoshoot Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/photoshoots",
        onsite: true,
        travel: true,
    },
    {
        image: nativityImg,
        imageAlt: "barn animals gathered to eat hay",
        label: "Nativity Scenes",
        content: "Celebrate the season with our enchanting holiday nativity scenes featuring our farm animals! Enjoy a heartwarming experience as you gather with loved ones to create festive memories with our friendly animals in a magical, holiday setting. Perfect for capturing the spirit of the season!",
        pdfName: "Nativity Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/nativity-scenes",
        onsite: true,
        travel: true,
    },
    {
        image: ponyRidesImg,
        imageAlt: "a young girl in a cowbot hat riding a pony",
        label: "Pony Rides",
        content: "Saddle up for excitement with pony rides at our farm! Perfect for young adventurers and pony enthusiasts alike, our rides offer a memorable experience trotting through scenic trails. Guided by our experienced staff, children can enjoy the thrill of riding gentle ponies in a safe and picturesque environment. Join us for a delightful journey on horseback and create lasting memories at our charming farm!",
        pdfName: "Pony Ride Details",
        pdfUrl: "https://blueshamrockfarm.my.canva.site/pony-rides",
        onsite: true,
        travel: true,
    },
    // {
    //     image: addOnImg,
    //     imageAlt: "young girl getting her face painted",
    //     label: "Complete List of Add ons",
    //     content: "Add an extra sprinkle of fun with some creative add on options. Whether you're looking to tantalize taste buds with a selection of delicious food and beverages or want to bring out the smiles with fun activities, we’ve got you covered. Guests can enjoy face painting and yard games, pinatas and cupcake decorating, or pony rides and balloon twisting. We've accommodated DJ's, bounces and even mobile drink bars. From playful to artistic, we provide all the quirky touches to ensure your event is the talk of the town!",
    //     pdfName: "List of Add on Services",
    //     pdfUrl: addOnPDF,
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
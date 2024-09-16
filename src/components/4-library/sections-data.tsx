import goat from "@/assets/goat.webp";
import cattle from "@/assets/cattle.webp";
import sheep from "@/assets/sheep.webp";
import duck from "@/assets/ducks.webp";
import featureKerry from "@/assets/kerry-bog-pony.webp";
import pig from "@/assets/mini-pig.webp";
import alpaca from "@/assets/alpaca.webp";
import bunny from "@/assets/bunny.webp";
import peacock from "@/assets/peacock.webp";
import featureTornjak from "@/assets/tornjak.webp";
import guineaPig from "@/assets/guinea-pig.webp";
import chinchilla from "@/assets/chinchilla.webp";
import budgie from "@/assets/budgie-bird.webp";
import chicken from "@/assets/chicken.webp";
import { ReactNode } from "react";

export type CellType = {
    src: string;
    label: string;
};

export type BottomType = {
    imageSrc: string;
    header: ReactNode;
};

export type SectionType = {
    top: CellType[];
    bottom: BottomType;
};

export const sections: SectionType[] = [
    {
        top: [
            {
                src: goat,
                label: "Goats",
            },
            {
                src: cattle,
                label: "Cattle",
            },
            {
                src: sheep,
                label: "Sheep",
            },
            {
                src: duck,
                label: "Duck",
            },
        ],
        bottom: {
            imageSrc: featureKerry,
            header: <>
                <div className="grid grid-cols-3 bg-blue-dark text-white">

                    <img src={featureKerry} className="col-start-3 h-full object-cover" />

                    <div className="col-start-1 col-span-2 p-12 h-full grid place-items-center">
                        {/* <div className="grid place-items-center"> */}
                        <h3 className="text-5xl">Kerry Bog Ponies</h3>
                        <p>
                            Kerry Bog Ponies, native to Ireland, are small, sturdy ponies known for their endurance and adaptability
                            in marshy terrains. Valued for their strength and calm temperament, they have historically assisted in
                            farming and rural work. Today, they are considered endangered, prompting conservation efforts to preserve
                            this resilient breed.
                        </p>
                        <a href="#">
                            More Info
                            <span className="sr-only">on kerry bog ponies</span>
                        </a>
                        {/* </div> */}
                    </div>
                </div>

                <div className="mb-16 flex bg-blue-dark">


                    <div className="py-4 px-8 flex-[1_1_66%] flex flex-col min-h-[400px] justify-center text-center text-white">
                        <div>
                            <h3 className="text-5xl">Kerry Bog Ponies</h3>
                            <p> Kerry Bog Ponies, native to Ireland, are small, sturdy ponies known for their endurance and adaptability in marshy terrains. Valued for their strength and calm temperament, they have historically assisted in farming and rural work. Today, they are considered endangered, prompting conservation efforts to preserve this resilient breed.</p>
                            <a href="#"> More Info<span className="sr-only"> on kerry bog ponies</span></a>
                        </div>
                    </div>

                    <div className="flex-[1_1_33%] order-first">
                        <img src={featureKerry} className="h-full object-cover" />
                    </div>
                </div>
            </>
        }
    },
    {
        top: [
            {
                src: pig,
                label: "Pig",
            },
            {
                src: alpaca,
                label: "Alpaca",
            },
            {
                src: bunny,
                label: "Bunny",
            },
            // {
            //     src: peacock,
            //     label: "Peacock",
            // },
        ],
        bottom: {
            imageSrc: featureTornjak,
            header: "header"
        }
    },
];

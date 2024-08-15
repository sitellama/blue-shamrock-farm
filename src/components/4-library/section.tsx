import { HTMLAttributes } from "react";
import { BottomType, CellType, SectionType, sections } from "./sections-data";
import { classNames } from "@/utils";

function CellImage1({ cell }: { cell: CellType; }) {
    return (
        <div className="grid">
            <img className="w-full" src={cell.src} />
            <h3 className="-mt-5 py-1 w-[80%] place-self-center text-center bg-zinc-500">{cell.label}</h3>
        </div>
    );
}

function CellImage({ cell }: { cell: CellType; }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img className="w-full" src={cell.src} />

            <h3 className="-mt-5 py-1 w-[80%] text-center bg-gray">
                {/* <h3 className="-mt-5 py-1 w-[80%] text-center bg-zinc-400"> */}
                {cell.label}
            </h3>
        </div>
    );
}

function Bottom({ bottom, className, ...rest }: { bottom: BottomType; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("text-center bg-slate-300", className)} {...rest}>
            {/* <img src={bottom.imageSrc} /> */}
            {bottom.header}
        </div>
    );
}

export function Section({ section }: { section: SectionType; }) {
    return (
        <section className="grid grid-rows-2 gap-4" style={{ gridTemplateColumns: `repeat(${section.top.length},minmax(0,1fr))` }}>

            {section.top.map(
                (cell, idx) => {
                    return (
                        <CellImage cell={cell} key={idx} />
                    );
                })
            }

            <Bottom className="col-span-full" bottom={section.bottom} />
        </section >
    );
}

export function Sections({ sections }: { sections: SectionType[]; }) {
    return (<>
        {sections.map((section, idx) => {
            return (
                <Section section={section} key={idx} />
            );
        })}
    </>);
}

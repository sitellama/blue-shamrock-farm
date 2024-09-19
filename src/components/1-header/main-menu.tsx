import { useCallback, useRef } from "react";
import { useAtom, useSetAtom } from "jotai";
import { Link, Location, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import { classNames } from "@/utils";
import { IconCross, IconHamburger } from "@/ui";
import { createPortal } from "react-dom";
import logoImg from "@/assets/logo.webp";
import { isMenuOpenAtom } from "./isMenuOpenAtom";

export function MainMenu() {
    const loc = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);

    const ref = useRef(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useClickAway<MouseEvent | TouchEvent>(ref,
        useCallback((event) => {
            if (!buttonRef.current) {
                return;
            }

            const target = event.target as HTMLElement;
            const isChild = buttonRef.current.contains(target);

            if (!isChild) {
                setIsMenuOpen(false);
            }
        }, [buttonRef])
    );

    return (
        <div className="w-full">
            <MenuBody className="hidden min-[1100px]:flex items-end justify-between text-center" loc={loc} />


            <div className="flex justify-between">
                <a href="/" className="m-0"><img src={logoImg} alt="Blue Shamrock Farm" className="size-10 min-[1100px]:hidden" /></a>

                <button
                    className="min-[1100px]:hidden z-50 relative"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    role="navigation"
                    aria-label="Main Menu" // aria-state={isMenuOpen ? "open" : "closed"}
                >
                    {isMenuOpen
                        ? <IconCross className="size-10 fill-black" />
                        : <IconHamburger className="size-10 fill-black" />
                    }
                </button>

                {isMenuOpen &&
                    createPortal(
                        <div ref={ref} className="w-full absolute right-0 top-0">
                            <MenuBody className="w-full min-[1100px]:hidden bg-page-bg flex flex-col items-center pb-4" loc={loc} />
                        </div>, document.body
                    )
                }
            </div>
        </div>
    );
}

const liClasses = "block px-3 py-2 m-0 text-lg no-underline border-b-[1px] border-transparent select-none";

function OurLink({ label, to, loc }: { label: string; to: string; loc: Location; }) {
    const isActive = to === loc.pathname;
    const setIsMenuOpen = useSetAtom(isMenuOpenAtom);
    return (
        <li>
            <Link
                to={to}
                className={classNames(liClasses, isActive && "!border-b-[1px] border-black")}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
            >
                {label}
            </Link>
        </li>
    );
}

function OurLinkInNewTab({ label, to, loc, openNewPage }: { label: string; to: string; loc: Location; openNewPage?: boolean; }) {
    const isActive = to === loc.pathname;
    return (
        <li>
            <a
                href={to}
                className={classNames(liClasses, isActive && "!!border-b-[1px] border-black")}
                target={openNewPage ? "_blank" : undefined  }
                rel={openNewPage ? "noopener noreferrer" : undefined}
                aria-current={isActive ? "page" : undefined}
            >
                {label}
            </a>
        </li>
    );
}

function MenuBody({ loc, className }: { loc: Location; className?: string; }) {
    return (
        <ul className={className}>
            {/* <OurLink label="Home" to="/" loc={loc} /> */}
            <OurLink label="Home" to="/" loc={loc} />
            <OurLink label="Meet The Animals" to="/animals" loc={loc} />
            <OurLink label="Services & Events" to="/services" loc={loc} />
            <figure className={`flex justify-center items-center -order-1 min-[1100px]:order-none border-b-4 border-transparent select-none`}>
                <a href="/" className="no-underline mb-0">
                    <img src={logoImg} alt="Blue Shamrock Farm" className="w-[50%] mx-auto mb-2" />
                    <figcaption>Blue Shamrock Farm</figcaption>
                </a>
            </figure>
            <OurLinkInNewTab label="Shamrock Shop" to="https://blue-shamrock-farm-llc.square.site/" loc={loc} openNewPage />
            <OurLink label="FAQs" to="/faq" loc={loc} />
            <OurLinkInNewTab label="Get In Touch" to="#contact" loc={loc} />
        </ul>
    );
}
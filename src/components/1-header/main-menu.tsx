import { useCallback, useRef, useState } from "react";
import { Location, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import { classNames } from "@/utils";
import { IconCross, IconHamburger } from "@/ui";
import { createPortal } from "react-dom";
import logoImg from "@/assets/logo-dark.png";

export function MainMenu() {
    const loc = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const closeMenu = useCallback(
        function closeMenu() {
            setIsMenuOpen(false);
        }, []
    );

    return (
        <div className="z-50 w-full">
            <MenuBody className="hidden sm:flex items-end justify-between" closeMenu={closeMenu} loc={loc} />

            <div className="relative">
                <div>
                    <button
                        className="sm:hidden"
                        onClick={() => setIsMenuOpen((v) => !v)}
                        role="navigation"
                        aria-label="Main Menu" // aria-state={isMenuOpen ? "open" : "closed"}
                    >
                        {isMenuOpen
                            ? <IconCross className="size-7 fill-black" />
                            : <IconHamburger className="size-7 fill-black" />
                        }
                    </button>

                    {isMenuOpen &&
                        createPortal(
                            <div ref={ref} className="w-full absolute right-0 top-0 flex justify-end">
                                <MenuBody className="w-full sm:hidden bg-page-bg flex flex-col items-center" closeMenu={closeMenu} loc={loc} />
                            </div>, document.body
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const liClasses = "block px-3 py-2 text-lg no-underline select-none";

function OurLink({ label, to, loc }: { label: string; to: string; loc: Location; }) {
    const isActive = to === loc.pathname;
    return (
        <li>
            <a
                href={to}
                className={classNames(liClasses, isActive && "!underline")}
                target="_blank"
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => {
                    e.preventDefault();

                    window.location.href = to;
                }
                }
            >
                {label}
            </a>
        </li>
    );
}

function MenuBody({ closeMenu, loc, className }: { closeMenu: () => void; loc: Location; className?: string; }) {
    return (
        <ul className={className}>
            {/* <OurLink label="Home" to="/" loc={loc} /> */}
            <OurLink label="Meet The Animals" to="/animals" loc={loc} />
            <OurLink label="Services & Events" to="/services" loc={loc} />
            <figure className="flex justify-center items-center">
                <a href="/" className="no-underline">
                    <img src={logoImg} alt="Blue Shamrock Farm" className="w-[50%] mx-auto mb-2" />
                    <figcaption>Blue Shamrock Farm</figcaption>
                </a>
            </figure>
            <OurLink label="Shamrock Shop" to="https://blue-shamrock-farm-llc.square.site/" loc={loc} />
            <OurLink label="Get In Touch" to="/contact" loc={loc} />
        </ul>
    );
}
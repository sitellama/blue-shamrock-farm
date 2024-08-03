import { HTMLAttributes } from "react";
import { MainMenu } from "./main-menu";
// import logoImg from "@/assets/llamamascot1.webp";
import { classNames } from "@/utils";

const logoClasses = "px-3 py-2 z-10 font-logo text-2xl text-white uppercase";

export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (<>
        <div className={classNames("p-4 w-full bg-black", className)} role="navigation" {...rest}>
            <div className="mx-auto max-w-7xl flex items-center justify-center">
                {/* <a href="/" className={logoClasses}>
                    SiteLLama
                </a> */}

                <MainMenu />

            </div>
        </div>
    </>);
}

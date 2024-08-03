import { HTMLAttributes } from "react";
import { MainMenu } from "./main-menu";
import { classNames } from "@/utils";


export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (<>
        <div className={classNames("p-4 w-full", className)} role="navigation" {...rest}>
            <div className="max-content flex items-center justify-center">

                <MainMenu />

            </div>
        </div>
    </>);
}

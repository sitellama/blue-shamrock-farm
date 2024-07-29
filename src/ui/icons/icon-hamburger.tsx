import { HTMLAttributes } from "react";

export function IconHamburger({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" className={className} {...rest}>
            <path d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z" />
        </svg>
    );
}

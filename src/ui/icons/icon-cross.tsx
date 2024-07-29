import { HTMLAttributes } from "react";

export function IconCross({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...rest}>
      <path
        d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19Z"
      />
    </svg>
  );
}

import { useId, useState, type ReactNode } from "react";

type ExpandableContentProps = {
    title: string;
    children: ReactNode;
    className?: string;
};

export function ExpandableContent({ title, children, className = "" }: ExpandableContentProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentId = useId();

    return (
        <div className={`bg-blue-dark w-full rounded-xl mt-4 ${className}`}>
            <button
                type="button"
                className="p-4 text-white text-center w-full flex items-center justify-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2 focus-visible:ring-offset-blue-dark"
                aria-label={`${isExpanded ? "Collapse" : "Expand"} ${title}`}
                aria-expanded={isExpanded}
                aria-controls={contentId}
                onClick={() => setIsExpanded((expanded) => !expanded)}
            >
                <span>{title}</span>
                <span aria-hidden="true">{isExpanded ? "-" : "+"}</span>
            </button>
            <span className="sr-only" aria-live="polite" aria-atomic="true">
                {`${title} ${isExpanded ? "expanded" : "collapsed"}`}
            </span>
            <div
                id={contentId}
                className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none"
                style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr", opacity: isExpanded ? 1 : 0 }}
                aria-hidden={!isExpanded}
                ref={(element) => {
                    if (element) {
                        if (isExpanded) {
                            element.removeAttribute("inert");
                        } else {
                            element.setAttribute("inert", "");
                        }
                    }
                }}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="expanded-content px-4 md:px-8 pb-4 md:pb-8 text-white">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Fragment, type ReactNode } from "react";
import { cn } from "./classnames";

type RichTextContentProps = {
    content?: string;
    className?: string;
};

type PlainListItem = {
    text: string;
    indent: number;
};

type PlainTextBlock =
    | { type: "paragraph"; lines: string[] }
    | { type: "ul"; items: PlainListItem[] }
    | { type: "ol"; items: PlainListItem[] };

const HTML_TAG_PATTERN = /<\/?[a-z][\s\S]*>/i;
const BULLET_PATTERN = /^(\s*)[-*•]\s+(.+)$/;
const ORDERED_PATTERN = /^(\s*)\d+[.)]\s+(.+)$/;

const isExternalHref = (href: string): boolean => /^(https?:)?\/\//i.test(href);

const parsePlainTextBlocks = (content: string): PlainTextBlock[] => {
    const lines = content.replace(/\r\n?/g, "\n").split("\n");
    const blocks: PlainTextBlock[] = [];
    let index = 0;

    while (index < lines.length) {
        const line = lines[index] ?? "";
        const trimmed = line.trim();

        if (!trimmed) {
            index += 1;
            continue;
        }

        const bulletMatch = line.match(BULLET_PATTERN);
        const orderedMatch = line.match(ORDERED_PATTERN);

        if (bulletMatch || orderedMatch) {
            const items: PlainListItem[] = [];
            const blockType = bulletMatch ? "ul" : "ol";

            while (index < lines.length) {
                const currentLine = lines[index] ?? "";
                const currentMatch = currentLine.match(blockType === "ul" ? BULLET_PATTERN : ORDERED_PATTERN);

                if (!currentMatch) break;

                items.push({
                    indent: Math.floor((currentMatch[1] ?? "").length / 2),
                    text: currentMatch[2]?.trim() ?? "",
                });
                index += 1;
            }

            blocks.push({ type: blockType, items });
            continue;
        }

        const paragraphLines: string[] = [];

        while (index < lines.length) {
            const currentLine = lines[index] ?? "";
            if (!currentLine.trim()) break;
            if (BULLET_PATTERN.test(currentLine) || ORDERED_PATTERN.test(currentLine)) break;
            paragraphLines.push(currentLine.trimEnd());
            index += 1;
        }

        if (paragraphLines.length > 0) {
            blocks.push({ type: "paragraph", lines: paragraphLines });
        }
    }

    return blocks;
};

const renderPlainText = (content: string): ReactNode[] => {
    return parsePlainTextBlocks(content).map((block, index) => {
        if (block.type === "paragraph") {
            return (
                <p key={`paragraph-${index}`} className="whitespace-pre-line">
                    {block.lines.join("\n")}
                </p>
            );
        }

        if (block.type === "ul") {
            return (
                <ul key={`ul-${index}`} className="list-disc pl-6 space-y-2">
                    {block.items.map((item, itemIndex) => (
                        <li key={`ul-item-${itemIndex}`} style={{ marginLeft: `${item.indent * 1.25}rem` }}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            );
        }

        return (
            <ol key={`ol-${index}`} className="list-decimal pl-6 space-y-2">
                {block.items.map((item, itemIndex) => (
                    <li key={`ol-item-${itemIndex}`} style={{ marginLeft: `${item.indent * 1.25}rem` }}>
                        {item.text}
                    </li>
                ))}
            </ol>
        );
    });
};

const renderHtmlNode = (node: ChildNode, key: string): ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
        const value = node.textContent ?? "";
        return value.trim() ? value : null;
    }

    if (!(node instanceof HTMLElement)) {
        return null;
    }

    const children = Array.from(node.childNodes)
        .map((child, index) => renderHtmlNode(child, `${key}-${index}`))
        .filter(Boolean);

    switch (node.tagName.toLowerCase()) {
        case "p":
            return <p key={key}>{children}</p>;
        case "br":
            return <br key={key} />;
        case "ul":
            return <ul key={key} className="list-disc pl-6 space-y-2">{children}</ul>;
        case "ol":
            return <ol key={key} className="list-decimal pl-6 space-y-2">{children}</ol>;
        case "li":
            return <li key={key}>{children}</li>;
        case "strong":
        case "b":
            return <strong key={key}>{children}</strong>;
        case "em":
        case "i":
            return <em key={key}>{children}</em>;
        case "u":
            return <u key={key}>{children}</u>;
        case "a": {
            const href = node.getAttribute("href") || "";
            if (!href) return <Fragment key={key}>{children}</Fragment>;

            return (
                <a
                    key={key}
                    href={href}
                    className="underline underline-offset-2"
                    rel={isExternalHref(href) ? "noreferrer" : undefined}
                    target={isExternalHref(href) ? "_blank" : undefined}
                >
                    {children}
                </a>
            );
        }
        case "h1":
            return <h1 key={key}>{children}</h1>;
        case "h2":
            return <h2 key={key}>{children}</h2>;
        case "h3":
            return <h3 key={key}>{children}</h3>;
        case "h4":
            return <h4 key={key}>{children}</h4>;
        case "h5":
            return <h5 key={key}>{children}</h5>;
        case "h6":
            return <h6 key={key}>{children}</h6>;
        default:
            return <Fragment key={key}>{children}</Fragment>;
    }
};

const renderHtml = (content: string): ReactNode[] => {
    const document = new DOMParser().parseFromString(content, "text/html");

    return Array.from(document.body.childNodes)
        .map((node, index) => renderHtmlNode(node, `node-${index}`))
        .filter(Boolean);
};

export function RichTextContent({ content, className }: RichTextContentProps) {
    const value = content?.trim() ?? "";
    if (!value) return null;

    const nodes = HTML_TAG_PATTERN.test(value) ? renderHtml(value) : renderPlainText(value);

    return <div className={cn("space-y-4", className)}>{nodes}</div>;
}
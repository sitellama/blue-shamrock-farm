import { Helmet } from "react-helmet-async";
import ogImg from "@/assets/og-image.webp";

export function SEO({ title, description, href }: { title: string; description: string; href: string; }) {
    return (
        <Helmet>
            <link rel='canonical' href={href} />
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="title" content="Blue Shamrock Farm" data-react-helmet="true"></meta>
            <meta name="og:title" content="Blue Shamrock Farm" data-react-helmet="true"></meta>
            <meta name="og:image" content={ogImg} data-react-helmet="true"></meta>
        </Helmet>
    );
}

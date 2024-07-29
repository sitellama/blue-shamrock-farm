import { Helmet } from "react-helmet-async";

export function SEO({ title, description, href }: { title: string; description: string; href: string; }) {
    return (
        <Helmet>
            <link rel='canonical' href={href} />
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="title" content="Default Title" data-react-helmet="true"></meta>
            <meta name="og:title" content="S6 Ranch" data-react-helmet="true"></meta>
        </Helmet>
    );
}

import { SEO } from "@/utils/seo";
import { WorkWithUs } from "../../4-library/work-with-us";

export function About() {
    return (
        <>
            <SEO title="About" description="This is the about page" href="/" />

            <WorkWithUs />
        </>
    );
}

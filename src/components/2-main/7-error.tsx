import { SEO } from "../../utils/seo";
import errorGoat from "@/assets/error-goat.webp";


export function ErrorPage() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <SEO title="Animals Page" description="Blue Shamrock Farm privacy policy" href="/" />

            {/* <HeroImg hero={barnWoodImg} /> */}

            <div className="bg-blue-dark h-[50px]"></div>

            <section className="max-content">
                <div>
                    <img src={errorGoat} className="max-w-[200px]"></img>
                </div>
                <div className="border-solid border-black border-2 p-4">
                    <h1 className="font-sans text-2xl font-bold">Error</h1>
                    <p>error code: 404</p>
                    <p>The page you are looking for has either does not exist or has been moved. Please enjoy this goat.</p>

                    <p><a href="/">Back to Home</a></p>

                </div>
            </section>

        </>
    );
}

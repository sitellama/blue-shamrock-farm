import { SEO } from "../../utils/seo";


export function Privacy() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <SEO title="Animals Page" description="Blue Shamrock Farm privacy policy" href="/" />

            {/* <HeroImg hero={barnWoodImg} /> */}

            <div className="bg-blue-dark h-[50px]"></div>

            <section className="max-content">
                <h1 className="font-sans text-4xl font-bold">Privacy Policy</h1>
                <p>Effective Date: 8-1-{currentYear}</p>

                <h2 className="font-sans text-2xl font-bold">Blue Shamrock Farms</h2>
                <p>Welcome to Blue Shamrock Farms ("we," "our," "us"). We respect your privacy and have created this Privacy Policy to outline how we collect, use, and protect your personal information when you visit and interact with our website [blueshamrock.farm] (the "Site"). By using our Site, you agree to the terms of this Privacy Policy.</p>

                <h2 className="font-sans text-2xl font-bold">What information we collect</h2>
                <p>To improve your overall experience with our online services, we use cookies and 3rd party applications collect information about how you interact with our site and to temporarily store information that you voluntarily share with us.</p>
                <h3 className="font-sans text-lg font-bold">Usage data</h3>
                <p>We collect data related to your interactions with our Site. This includes pages visited, time spent, links clicked, and other actions performed on our Site. We collect your IP address, browser type, operating system, and device identifiers. If your device is set to allow it, we also collect location data.
                </p>
                <h3 className="font-sans text-lg font-bold">Personal information</h3>
                <p>When you interact with our Site, we may collect personal information that you provide voluntarily. Such information is collected within our contact form and includes name, email and any other volenteered information.</p>

                <h2 className="font-sans text-2xl font-bold">How and why we collect data</h2>
                <h3 className="font-sans text-lg font-bold">Methods of collection</h3>
                <p>Our methods of collection include working with the following 3rd party applications. Please note, these 3rd party applications have their own privacy policies and are legally independent of Blue Shamrock Farm.</p>
                <ul>
                    <li>Google Analytics: We use Google Analytics to collect and analyze usage data to understand how visitors interact with our Site. Google Analytics uses cookies to track and report on website traffic, which helps us improve our Site and services.</li>
                    <li>Web3Forms: We collect data through Web3Forms to process your contact requests and provide you with responses or support based on your requests.</li>
                </ul>
                <h3 className="font-sans text-lg font-bold">Purpose of collection</h3>
                <p>Usage data is obtained in order to improve Site functionality, content and user experience. We use personal information from form submissions to respond to your inquiries, provide requested services, and send you updates or marketing communications if you have opted in. We collect and monitor data to ensure the security and integrity of our Site and to prevent misuse.</p>

                <h2 className="font-sans text-2xl font-bold">Your right to deletion and correction</h2>
                <p>You may request the deletion of your personal information at any time. To do so, please submit a request to farmerkate225@gmail.com . We will process your request in accordance with applicable laws and regulations. We may require verification of your identity before processing your request to ensure the security of your information.</p>

                <h2 className="font-sans text-2xl font-bold">Changes to this privacy policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.</p>

                <h2 className="font-sans text-2xl font-bold">Contact us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at farmerkate225@gmail.com.</p>
                <br></br>
                <p><a href="/">Back to Home</a></p>
            </section>

        </>
    );
}

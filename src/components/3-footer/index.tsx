import logoImg from "@/assets/logo.webp";



export function Footer() {
    return (
        <footer>
            <Copyright />
        </footer>
    );
}

function Copyright() {
    return (
        <footer className='bg-blue-dark text-white p-4'>
            <div className="max-content flex flex-col justify-between items-center">

                <figure className="flex justify-center items-center">
                    <a href="/" className="my-0 no-underline">
                        <img src={logoImg} alt="logo" className="w-[50%] mx-auto mb-2 min-h-[84px]" />
                        <figcaption>Blue Shamrock Farm</figcaption>
                    </a>
                </figure>



                <div className="flex footer-link">
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://www.facebook.com/blueshamrockfarm/"><span className="sr-only">facebook</span>
                        <svg viewBox="0 0 28 28" width="35" height="35" fill="#fff">
                            <path
                                d="M13.9 24.12h3.35V16h2.24l.3-2.8h-2.54v-1.4c0-.73.07-1.12 1.12-1.12h1.4v-2.8h-2.24c-2.7 0-3.64 1.36-3.64 3.64v1.68h-1.68V16h1.68v8.12z" />
                            {/* <path
                                    d="M16 1c8.27 0 15 6.73 15 15s-6.73 15-15 15S1 24.27 1 16 7.73 1 16 1m0-1a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" /> */}
                        </svg>
                    </a>

                    {/* icon family: https://www.iconfinder.com/iconsets/free-social-media-5  */}
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/blue.shamrock.farm/"><span className="sr-only">instagram</span>
                        <svg viewBox="0 0 28 28" width="35" height="35" fill="#fff">
                            <path
                                d="M21.87 8.17H10.13c-1.11 0-1.96.85-1.96 1.96v11.74c0 1.11.85 1.96 1.96 1.96h11.74c1.11 0 1.96-.85 1.96-1.95V10.13c0-1.11-.85-1.96-1.96-1.96zm-5.86 4.75a3.1 3.1 0 0 1 3.15 3.05A3.1 3.1 0 0 1 16 19.02a3.1 3.1 0 0 1-3.14-3.05A3.1 3.1 0 0 1 16 12.92zm5.86 8.47c0 .34-.14.49-.49.49H10.61c-.34 0-.49-.15-.49-.5v-6.85l1.22.27c-.13.42-.2.87-.2 1.34a4.8 4.8 0 0 0 4.87 4.72 4.8 4.8 0 0 0 4.87-4.72c0-.47-.07-.92-.2-1.34l1.2-.27v6.86zm0-8.82c0 .27-.22.5-.49.5h-1.95a.49.49 0 0 1-.5-.5v-1.96c0-.27.22-.48.5-.48h1.95c.28 0 .5.21.5.48v1.96z" />
                            {/* <path
                                        d="M16 1c8.27 0 15 6.73 15 15s-6.73 15-15 15S1 24.27 1 16 7.73 1 16 1m0-1a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" /> */}
                        </svg>
                    </a>

                    <a target="_blank" rel="noopener noreferrer"
                        href="https://www.tiktok.com/@blueshamrockfarm"><span className="sr-only">tiktok</span>
                        <svg viewBox="0 0 28 28" width="35" height="35" fill="#fff">
                            <path d="M16.165,6.888v4.262h4.262v2.664h-4.262v4.262c0,0.99,0.094,1.785,0.199,2.066   c0.105,0.28,0.299,0.504,0.585,0.673c0.379,0.227,0.81,0.341,1.297,0.341c0.865,0,1.87-0.294,2.714-0.949v2.664   c-0.71,0.444-1.525,0.72-2.117,0.858c-0.591,0.137-1.231,0.207-1.919,0.207c-0.719,0-1.413-0.079-2.07-0.296   c-0.6-0.197-0.935-0.416-1.36-0.779c-0.423-0.365-0.629-0.732-0.793-1.144c-0.164-0.41-0.266-1.262-0.266-2.043v-5.86h-2.131V11.15   c0.682-0.05,1.247-0.242,1.723-0.648c0.48-0.408,0.864-0.897,1.152-1.467c0.29-0.571,0.322-1.27,0.322-2.147H16.165z" />
                            {/* <path
                                    d="M16 1c8.27 0 15 6.73 15 15s-6.73 15-15 15S1 24.27 1 16 7.73 1 16 1m0-1a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" /> */}
                        </svg>
                    </a>

                    <a target="_blank" rel="noopener noreferrer"
                        href="farmerkate225@gmail.com">
                        <svg viewBox="0 0 52 52" width="35" height="35" fill="#fff"><span className="sr-only">email</span>
                            <path
                                d="M30,33.4615385 L47.3076923,18.4615385 L12.6923077,18.4615385 L30,33.4615385 Z M25.3251765,31.8010536 L30,35.6382399 L34.6015813,31.8010536 L47.3076923,42.6923077 L12.6923077,42.6923077 L25.3251765,31.8010536 Z M11.5384615,41.5384615 L11.5384615,19.6153846 L24.2307692,30.5769231 L11.5384615,41.5384615 Z M48.4615385,41.5384615 L48.4615385,19.6153846 L35.7692308,30.5769231 L48.4615385,41.5384615 Z"
                            />
                            {/* <path
                                    d="M16 1c8.27 0 15 6.73 15 15s-6.73 15-15 15S1 24.27 1 16 7.73 1 16 1m0-1a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" /> */}
                        </svg>
                    </a>


                </div>

                <div className="mt-4 text-center">
                    <p className="footer-link m-0">address: <a href="https://maps.app.goo.gl/MUCNrjJPkztr75CWA" target="_blank">2160 Shipman Rd, Oxford, MI 48371</a></p>
                    <p className="footer-link m-0">phone: <a href="tel:248-212-6961">(248) 212-6961</a></p>
                    <p className="footer-link m-0">email: <a href="mailto:farmerkate225@gmail.com">farmerkate225@gmail.com</a></p>
                </div>

                <ul className="flex mt-4">
                    <li className="mr-4 after:content-['|'] after:ml-4"><a href="/privacy-policy" className="no-underline">Privacy Policy</a></li>
                    <li>
                        <a className="no-underline" href="https://sitellama.com/" target="_blank">Site by Sitellama
                        </a>
                    </li>
                </ul>

            </div>
        </footer>
    );
}
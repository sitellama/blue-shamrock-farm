import logoImg from "@/assets/logo-light.png";


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
            <div className="max-content my-6 flex justify-between items-center">
                <div>
                    <figure className="flex justify-center items-center">
                        <a href="/" className="my-0 no-underline">
                            <img src={logoImg} alt="Blue Shamrock Farm" className="w-[50%] mx-auto mb-2" />
                            <figcaption>Blue Shamrock Farm</figcaption>
                        </a>
                    </figure>
                </div>

                <ul>
                    <li><a href="/services">All Services</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="">Forms</a></li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/s6horses/">
                            <svg viewBox="0 0 32 32" width="35" height="35" fill="#fff">
                                <path
                                    d="M21.87 8.17H10.13c-1.11 0-1.96.85-1.96 1.96v11.74c0 1.11.85 1.96 1.96 1.96h11.74c1.11 0 1.96-.85 1.96-1.95V10.13c0-1.11-.85-1.96-1.96-1.96zm-5.86 4.75a3.1 3.1 0 0 1 3.15 3.05A3.1 3.1 0 0 1 16 19.02a3.1 3.1 0 0 1-3.14-3.05A3.1 3.1 0 0 1 16 12.92zm5.86 8.47c0 .34-.14.49-.49.49H10.61c-.34 0-.49-.15-.49-.5v-6.85l1.22.27c-.13.42-.2.87-.2 1.34a4.8 4.8 0 0 0 4.87 4.72 4.8 4.8 0 0 0 4.87-4.72c0-.47-.07-.92-.2-1.34l1.2-.27v6.86zm0-8.82c0 .27-.22.5-.49.5h-1.95a.49.49 0 0 1-.5-.5v-1.96c0-.27.22-.48.5-.48h1.95c.28 0 .5.21.5.48v1.96z" />
                                {/* <path
                                    d="M16 1c8.27 0 15 6.73 15 15s-6.73 15-15 15S1 24.27 1 16 7.73 1 16 1m0-1a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" /> */}
                            </svg>
                        </a></li>
                    <li>
                        <a href="https://sitellama.com/" target="_blank">Site by Sitellama
                        </a>
                    </li>
                    <li></li>
                </ul>

            </div>
        </footer>
    );
}
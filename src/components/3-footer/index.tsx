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
                    <li></li>
                    <li></li>
                    <li>
                        <a href="https://sitellama.com/" target="_blank">Site by Sitellama
                        </a>
                    </li>
                </ul>

            </div>
        </footer>
    );
}
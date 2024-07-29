export function Footer() {
    return (
        <footer>
            <Copyright />
        </footer>
    );
}

function Copyright() {
    return (
        <div className='bg-gray-800 text-white p-4'>
            <p className="small-text">
                <a
                    href="https://sitellama.com/"
                    target="_blank"
                >
                    Site by Sitellama
                </a>
            </p>
            {/* <p className='text-center'>© {new Date().getFullYear()} Tailwindcss</p> */}
        </div>
    );
}
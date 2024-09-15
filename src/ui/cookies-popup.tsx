import { useEffect, useState } from "react";

const rootClasses = "\
fixed p-8 right-0 bottom-0 z-[200] \
\
text-white bg-brown \
rounded-t-xl \
\
flex flex-col items-end gap-4";

const buttonClasses = "\
px-4 py-2 \
border-transparent \
bg-blue-dark \
text-sm \
rounded-md \
shadow \
shadow-zinc-500/50 \
active:scale-95";

export function CookiesPopup() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasCookie = document.cookie?.includes('cookieConsent=true');
        if (hasCookie) {
            return;
        }

        setTimeout(() => setShowPopup(true), 2000);
    }, []);

    function onClick() {
        document.cookie = 'cookieConsent=true; max-age=31536000; path=/';
        setShowPopup(false);
    }

    if (!showPopup) {
        return null;
    }

    return (
        <div className={rootClasses}>
            <div>
                <p>This website uses cookies to enhance user experience. <br className="hidden md:inline"></br>To learn more, please read our <a href="/privacy-policy" className="text-base">privacy policy</a>.</p>
            </div>

            <button className={buttonClasses} onClick={onClick}>
                Accept
            </button>
        </div>
    );
}

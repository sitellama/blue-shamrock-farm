import { useEffect, useState } from "react";

const rootClasses = "\
fixed p-4 left-0 bottom-0 w-full z-[200] \
\
text-white \
bg-zinc-700 \
\
flex flex-col items-end gap-4";

const buttonClasses = "\
px-4 py-2 \
border-transparent \
bg-zinc-900 \
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
                This website uses cookies to enhance the user experience.
            </div>

            <button className={buttonClasses} onClick={onClick}>
                Accept
            </button>
        </div>
    );
}

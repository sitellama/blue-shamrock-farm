import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export function CookiesPopup() {
    const [hasConsentValue, setHasConsentValue] = useState(false);

    useEffect(() => {
        setHasConsentValue(!!getCookieConsentValue());
        if (getCookieConsentValue() === 'true') {
            console.log('User has consented to cookies');
        }
    }, []);

    return (<>
        {!hasConsentValue && (
            <div style={{ fontFamily: "Montserrat, sans-serif", background: "#2B373B", position: "fixed", bottom: 0, left: 0, width: '100%', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    cookieName="cookieConsent"
                    style={{ background: "transparent", position: "relative", maxWidth: '600px' }}
                    buttonStyle={{ border: "2px solid transparent", background: "#1a1a1a", color: "white", fontSize: "13px" }}
                    expires={150}
                >
                    <div>This website uses cookies to enhance the user experience.{" "}</div>
                    {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
                </CookieConsent>
            </div>
        )}
    </>);
}

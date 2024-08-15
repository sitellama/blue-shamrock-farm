import { useEffect } from "react";
import { isDev } from "./isDev";

function scrollToHashElement() {
    const { hash } = window.location;

    const hashElementId = hash.replace("#", "");
    if (!hashElementId) {
        return;
    }

    const elementToScroll = document.getElementById(hashElementId);
    if (!elementToScroll) {
        isDev && console.log(`%chash element '${hashElementId}' not found`, 'color: red');
        return;
    }

    const iframe = document.querySelector('iframe');
    if (!iframe) {
        isDev && console.log('%ciframe not found', 'color: red');
        return;
    }

    isDev && console.log({ elementToScroll, rect: elementToScroll.getBoundingClientRect(), windowTop: window.scrollY });
    isDev && console.log('offsetTop', elementToScroll.offsetTop, 'clientTop', elementToScroll.clientTop);

    window.scrollTo({
        top: elementToScroll.offsetTop,
        behavior: "instant" // "smooth"
    });
}

export function useHashChange() {
    useEffect(() => {
        setTimeout(
            () => {
                scrollToHashElement();
            }, 1000
        );

        window.addEventListener("hashchange", scrollToHashElement);

        return () => {
            window.removeEventListener("hashchange", scrollToHashElement);
        };
    }, []);
}

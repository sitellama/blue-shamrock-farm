import { useEffect } from "react";
import { Location, Outlet, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
import { Header } from "../components/1-header";
import { Footer } from "../components/3-footer";
import { classNames } from "@/utils";

// ReactGA.initialize('G-XMXJ22G27Y', {
//     gaAddress: "https://www.googletagmanager.com/gtag/js?id=G-XMXJ22G27Y",
// });

const debugClasses = import.meta.env.PROD ? "" : "debug-screens";

export function Root() {
    const loc = useLocation();

    useEffect(() => reportGA(loc), [loc.pathname, loc.search]);

    return (<>
        <div className={`relative bg-zinc-100 ${debugClasses}`}>
            <Header />
            <Outlet />
        </div>

        <Footer />
    </>);
}

function reportGA(loc: Location) {
    return;
    
    ReactGA.pageview(loc.pathname + loc.search, undefined, "0-root-title");

    ReactGA.event({
        category: 'Page Click',
        action: 'Clicked on Buy Now',
        label: 'Product Page',
    });
}
import { useEffect } from "react";
import { Location, Outlet, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
import { Header } from "../components/1-header";
import { Footer } from "../components/3-footer";
import { classNames } from "@/utils";

ReactGA.initialize('G-V0YCCCVV8Y', {
    gaAddress: "https://www.googletagmanager.com/gtag/js?id=G-V0YCCCVV8Y",
});

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-V0YCCCVV8Y"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-V0YCCCVV8Y');

// </script >

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
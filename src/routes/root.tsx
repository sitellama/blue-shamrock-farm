import { useEffect } from "react";
import { Location, Outlet, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
import { Header } from "../components/1-header";
import { Footer } from "../components/3-footer";

ReactGA.initialize('UA-000000-01');

export function Root() {
    const loc = useLocation();

    useEffect(() => reportGA(loc), [loc.pathname, loc.search]);

    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>);
}

function reportGA(loc: Location) {
    console.log('loc', loc);

    ReactGA.pageview(loc.pathname + loc.search, undefined, "0-root-title");

    ReactGA.event({
        category: 'Page Click',
        action: 'Clicked on Buy Now',
        label: 'Product Page',
    });
}
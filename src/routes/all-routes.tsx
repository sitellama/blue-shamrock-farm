import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Services } from "../components/2-main/services";
import { Root } from "./root";
import { About } from "@/components/2-main/about/about";
import { Contact } from "../components/2-main/contact";
import { Home } from "../components/2-main/home";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <ErrorPage />,
        errorElement: <Home />,
        children: routes,
    },
]);

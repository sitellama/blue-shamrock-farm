import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Animals, Contact, Home, Services } from "@/components/2-main";
import { Privacy } from "@/components/2-main/5-privacy";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/animals",
        element: <Animals />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/privacy-policy",
        element: <Privacy />,
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

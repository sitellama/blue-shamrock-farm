import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Animals, Contact, Home, Services } from "@/components/2-main";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
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

import { RouteObject, createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./root";
import { Animals, Contact, Home, Services } from "@/components/2-main";
import { FAQs } from "@/components/2-main/6-faq";
import { Privacy } from "@/components/2-main/5-privacy";
import { ErrorPage } from "@/components/2-main/7-error";


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
        path: "/faq",
        element: <FAQs />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "/privacy-policy",
        element: <Privacy />,
    },
    {
        path: "/error",
        element: <ErrorPage />,
    },
    {
        path: "/home",
        element: <Navigate to="/" />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
];

export const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: routes,
    },
]);

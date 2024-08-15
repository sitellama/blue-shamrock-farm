import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesPopup } from './ui/cookies-popup';
import { router } from './routes';
import { useHashChange } from './components/4-library/scrollToHashElement';

export function App() {
    useHashChange()

    return (<>
        <HelmetProvider context={{}}>
            <RouterProvider router={router} />
            <CookiesPopup />
        </HelmetProvider>
    </>);
}

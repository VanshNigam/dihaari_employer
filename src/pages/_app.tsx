// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Auth0Provider from '../context/Auth0Provider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth0Provider>
            <Component {...pageProps} />
        </Auth0Provider>
    );
}

export default MyApp;
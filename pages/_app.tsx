import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SsModalContextProvider } from '../components/contexts/useSsModalContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SsModalContextProvider>
            <Component {...pageProps} />
        </SsModalContextProvider>
    );
}

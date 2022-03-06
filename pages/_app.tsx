import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {AppProvider} from 'context/AppContext';
import {UserProvider} from 'context/UserContext';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AppProvider>
  );
}

export default MyApp;

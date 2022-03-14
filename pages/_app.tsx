import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {AppProvider} from 'context/AppContext';
import {UserProvider} from 'context/UserContext';
import {SessionProvider} from 'next-auth/react';
import Layout from 'components/Layout';

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </AppProvider>
    </SessionProvider>
  );
}

export default MyApp;

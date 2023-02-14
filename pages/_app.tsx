import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../context/ProvideContext";
import "flowbite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [hideFull, setHideFull] = useState<boolean>(true);
  const [hideSignin, setHideSignin] = useState<boolean>(true);
  const [home, setHome] = useState<boolean>(true);

  useEffect(() => {
    if ("/register".endsWith(route.pathname)) setHideFull(false);
    else setHideFull(true);
    if ("/signin".endsWith(route.pathname)) setHideSignin(false);
    else setHideSignin(true);
    if ("/".endsWith(route.pathname)) setHome(false);
    else setHome(true);
  }, [route.pathname]);

  return (
    <ContextProvider>
      <Navbar hideFull={hideFull} hideSignin={hideSignin} />
      <Component {...pageProps} />
      <Footer hideFull={hideFull} hideSignin={hideSignin} home={home} />
    </ContextProvider>
  );
}

export default MyApp;

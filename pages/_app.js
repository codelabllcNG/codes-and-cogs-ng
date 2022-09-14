import React, { Fragment, useEffect } from "react";
import Script from "next/script";
import { AllContextProvider } from "../a-store/context-store/AllContext";
import Footer from "../components/Footer";
import MegaMenu from "../components/MegaMenu";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);



  return (
    <Fragment>
      <AllContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="AoyKWu8XW_-k0WiGwNX5yoL4yA6XqAxq_pCiw6v-iT4"
        />
      </Head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());

        gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
        `}
        </Script>



        <Navbar />
        <Component {...pageProps} />
      </AllContextProvider>

      <Footer data={pageProps.data} />
    </Fragment>
  );



  
}

MyApp.getInitialProps = async () => {
  let pageProps = {};

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/get_footer`
    );
    const data = await response.json();

    // console.log(data);
    pageProps["data"] = data;
  } catch (error) { }

  return { pageProps };
}
  // return { pageProps };

// export default MyApp;

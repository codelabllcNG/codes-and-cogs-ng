import React, { Fragment, useEffect } from "react";
import Script from "next/script";
import { AllContextProvider } from "../a-store/context-store/AllContext";
import Footer from "../components/Footer";
import MegaMenu from "../components/MegaMenu";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <Fragment>
      <AllContextProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());

        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
        </Script>

        {/* <Script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js?pre=1">
        { `
          hbspt.forms.create({
            region: "na1",
            portalId: "22606943",
            formId: "28241b1b-34b7-449d-9b15-85a2367d0a76",
            target: "#hi",
          });
`}
      </Script> */}

        <Navbar />
        <Component {...pageProps} />
      </AllContextProvider>

      <Footer />
    </Fragment>
  );
}

export default MyApp;

import React, { Fragment, useEffect } from "react";
import Script from "next/script";
import { AllContextProvider } from "../a-store/context-store/AllContext";
import Footer from "../components/Footer";
import MegaMenu from "../components/MegaMenu";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import * as fbq from "../util-functions/meta-pixel";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  useEffect(() => {
    fbq.pageView();

    const handleRouteChange = () => {
      fbq.pageView();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      <AllContextProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="AoyKWu8XW_-k0WiGwNX5yoL4yA6XqAxq_pCiw6v-iT4"
          />
          {/* LIVE VERSION  */}
          <meta
            name="facebook-domain-verification"
            content="4d1q0iqw8cdum8puv1jrxgm4c0z9fn"
          />

          {/* DEV VERSION  */}
          <meta
            name="facebook-domain-verification"
            content="cdtzab6dg5iu52azrz30ek3p55i0bj"
          />

          {/* DEV TESTING  */}
          <meta name="facebook-domain-verification" content="hpb1j6bjaeu3tfepvq8o7adshp69y3" />

        </Head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />

        {/* META PIXEL CODES AND COGS*/}
        <Script
          strategy="afterInteractive"
          id="fb-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '648475550125111');
          fbq('track', 'PageView');
              `,
          }}
        />

      {/* META PIXEL DEV MODE*/}
      <Script
          strategy="afterInteractive"
          id="fb-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '518807819994424');
          fbq('track', 'PageView');
              `,
          }}
        />

        {/* GOOGLE TAG MANAGER  */}
        <Script
          strategy="afterInteractive"
          id="gtag-base"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5SDVXFH');
              `,
          }}
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

      <Footer />
      {/* data={pageProps.data} */}
    </Fragment>
  );
}

// MyApp.getInitialProps = async () => {
//   let pageProps = {};

//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/get_footer`
//     );
//     const data = await response.json();

//     // console.log(data);
//     pageProps["data"] = data;
//   } catch (error) { }

//   return { pageProps };
// }
// return { pageProps };

// export default MyApp;

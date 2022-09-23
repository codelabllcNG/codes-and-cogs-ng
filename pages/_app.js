import React, { Fragment, useEffect } from "react";
import Script from "next/script";
import { AllContextProvider } from "../a-store/context-store/AllContext";
import Footer from "../components/Footer";
import MegaMenu from "../components/MegaMenu";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";


export default function MyApp({ Component, pageProps }) {
const router = useRouter();

  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);


  useEffect(() => {

     const pageView = () => {
      window.fbq('track', 'PageView')
    }
    // This pageView only triggers the first time (it's important for Pixel to have real information)
    pageView()

    const handleRouteChange = () => {
      pageView()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])



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


<Script strategy="afterInteractive" id="fb-pixel"
      
          dangerouslySetInnerHTML={{
            __html:
              `
              !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '453085319950484');
          fbq('track', 'PageView');
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

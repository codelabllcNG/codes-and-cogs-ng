
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Merriweather, Poppins } from "next/font/google";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import '../styles/globals.css';
import Script from "next/script";


// Load fonts
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Extend Chakra theme
const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: merriweather.style.fontFamily,
        fontSize: "16px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "30px",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: poppins.style.fontFamily,
        fontSize: "36px",
        // fontWeight: "600",
        fontStyle: "normal",
        lineHeight: "28px",
        WebkitTextStrokeWidth: "0.4px",
        WebkitTextStrokeColor: "#FFF",
      },
      sizes: {
        sm: { fontSize: "10px" },
        md: { fontSize: "24px" },
        lg: { fontSize: "32px" },
        xl: { fontSize: "40px" },
      },
    },
  },
});



export default function MyApp({ Component, pageProps }:AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
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
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
      <Head>
        <title>Codes And Cogs </title>
        <meta name="description" content="Welcome to Codes And Cogs Talent Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.svg" />
        {/* Add any other common meta tags here */}
      </Head>
        {/* Apply font variables to the entire app */}
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastStyle={{ width: "100%" }} 
          />
      </ChakraProvider>
    </QueryClientProvider>
    </>
  );
}

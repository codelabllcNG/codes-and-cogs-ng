// // pages/_app.tsx

// import "@/styles/globals.css";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { AppProps } from "next/app";
// import { Merriweather, Poppins } from "next/font/google";

// // Load fonts
// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// // Extend Chakra theme to use font names directly
// const theme = extendTheme({
//   fonts: {
//     heading: poppins.style.fontFamily, // Apply Poppins to headings
//     body: merriweather.style.fontFamily, // Apply Merriweather to body text
    
//   },
// });

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ChakraProvider theme={theme}>
//       {/* Inject font variables globally */}
//         <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

// export default MyApp;
// // // pages/_app.tsx

// // import "@/styles/globals.css";
// // import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// // import { AppProps } from "next/app";
// // import { Merriweather, Poppins } from "next/font/google";

// // const merriweather = Merriweather({
// //   subsets: ["latin"],
// //   weight: ["400", "700"],
// //   variable: "--font-merriweather", // Define CSS variable
// //   display: "swap",
// // });

// // const poppins = Poppins({
// //   subsets: ["latin"],
// //   weight: ["400", "700"],
// //   variable: "--font-poppins", // Define CSS variable
// //   display: "swap",
// // });

// // // Create a theme with correct font references
// // const theme = extendTheme({
// //   fonts: {
// //     heading: `var(--font-poppins), sans-serif`, // Use CSS variable
// //     body: `var(--font-merriweather), serif`, // Use CSS variable
// //   },
// // });

// // function MyApp({ Component, pageProps }: AppProps) {
// //   return (
// //     <ChakraProvider theme={theme}>
// //       {/* Inject font variables globally */}
// //       <main className={`${merriweather.variable} ${poppins.variable}`}>
// //         <Component {...pageProps} />
// //       </main>
// //     </ChakraProvider>
// //   );
// // }

// // export default MyApp;
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Merriweather, Poppins } from "next/font/google";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Load fonts
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "800"],
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
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
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

  );
}

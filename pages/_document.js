import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
         
          {/* GOOGLE ANALYTICS */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/22606943.js"
          ></script>

        
        </Head>
        <body>

            {/* META PIXEL */}
            <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=671379057370383&ev=PageView&noscript=1"
            />
          </noscript>
         
          {/* GOOGLE TAG MANAGER */}
          <noscript>
            <iframe
              style={{ display: "none", visibility: "hidden" }}
              src="https://www.googletagmanager.com/ns.html?id=GTM-5SDVXFH"
              height="0"
              width="0"
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

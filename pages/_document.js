import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
      
  <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/22619367.js"></script>

  {/* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js?pre=1"></script>
<script dangerouslySetInnerHTML={{
          __html: `
          hbspt.forms.create({
            region: "na1",
            portalId: "22606943",
            formId: "28241b1b-34b7-449d-9b15-85a2367d0a76",
            target: "#id"
          });
`}} >

</script> */}

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
 
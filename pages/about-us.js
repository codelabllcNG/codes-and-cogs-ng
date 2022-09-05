import React from "react";
import Head from "next/head";
import Section1 from "../components/about-us/Section1";
import Section2 from "../components/about-us/Section2";
import Section3 from "../components/about-us/Section3";
import Section4 from "../components/about-us/Section4";
import AllCtx from "../util-functions/allCtx";

function AboutUs(props) {
  const {
    aboutTitle,
    aboutBody,
    noPaymentVideo,
    noPaymentText,
    remoteLocationsVideo,
    remoteLocationsText,
    timeAndLanguageVideo,
    timeAndLanguageText,
    reviewsTitle,
    reviewsArray,
    storiesTitle,
    storiesArray,
    ourTalentTitle,
    designersArray,
    developersArray,
    engineersArray,
  } = props;

  return (
    <div>
      <Head>
        <title>About Codes and Cogs</title>
        <meta
          name="description"
          content="Codes and Cogs is a global remote company that makes your web or software projects easier, and much more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section1
        aboutTitle={aboutTitle}
        aboutBody={aboutBody}
        noPaymentVideo={noPaymentVideo}
        noPaymentText={noPaymentText}
        remoteLocationsVideo={remoteLocationsVideo}
        remoteLocationsText={remoteLocationsText}
        timeAndLanguageVideo={timeAndLanguageVideo}
        timeAndLanguageText={timeAndLanguageText}
      />
      {/* <Section2 reviewsTitle={reviewsTitle} reviewsArray={reviewsArray} /> */}
      <Section3 storiesTitle={storiesTitle} storiesArray={storiesArray} />
      <Section4
        ourTalentTitle={ourTalentTitle}
        designersArray={designersArray}
        developersArray={developersArray}
        engineersArray={engineersArray}
      />
    </div>
  );
}

export async function getStaticProps() {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/aboutpage`
  );
  const data = await response.json();

  const aboutTitle = data.aboutTitle;
  const aboutBody = data.aboutBody;
  const noPaymentVideo = data.noPaymentVideo;
  const noPaymentText = data.noPaymentText;
  const remoteLocationsVideo = data.remoteLocationsVideo;
  const remoteLocationsText = data.remoteLocationsText;
  const timeAndLanguageVideo = data.timeAndLanguageVideo;
  const timeAndLanguageText = data.timeAndLanguageText;
  const reviewsTitle = data.reviewsTitle;
  const reviewsArray = data.reviews;
  const storiesTitle = data.storiesTitle;
  const storiesArray = data.stories;
  const ourTalentTitle = data.ourTalentTitle;
  const designersArray = data.designers;
  const developersArray = data.developers;
  const engineersArray = data.engineers;

  return {
    props: {
      aboutTitle,
      aboutBody,
      noPaymentVideo,
      noPaymentText,
      remoteLocationsVideo,
      remoteLocationsText,
      timeAndLanguageVideo,
      timeAndLanguageText,
      reviewsTitle,
      reviewsArray,
      storiesTitle,
      storiesArray,
      ourTalentTitle,
      designersArray,
      developersArray,
      engineersArray,
    },
    revalidate: 300,
  };
}

export default AboutUs;

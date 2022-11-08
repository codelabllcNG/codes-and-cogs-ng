import React from "react";
import AllCtx from "../../util-functions/allCtx";
import Banner from "../../components/career/Banner";
import Section1 from "../../components/career/Section1";
import Section10 from "../../components/career/Section10";
import Section2 from "../../components/career/Section2";
import Section3 from "../../components/career/Section3";
import Section4 from "../../components/career/Section4";
import Section5 from "../../components/career/Section5";
import Section6 from "../../components/career/Section6";
import Section7 from "../../components/career/Section7";
import Section8 from "../../components/career/Section8";
import Section9 from "../../components/career/Section9";
import HeaderBanner from "../../components/HeaderBanner";
import Head from "next/head";

function Index(props) {
  const {showApplicationForm, setShowApplicationForm} = AllCtx();



  const {
    heroBgImage,
    heroText,
    ourTeamTitle,
    ourTeamDescription,
    missionBgImage,
    missionTitle,
    missionDescription,
    workWithUsTitle,
    workWithUsDescription,
    whatOurTeamEnjoyTitle,
    whatOurTeamEnjoySubtitle,
    jobOpeningTitle,
    getStartedTitle,
    getStartedSubtitle,
    banner,
    banner2,
    facilitators,
    whatYouNeedTitle,
    whatYouNeeSubtitle,
    whatYouNeed,
    jobOpenings,
    whatOurTeamEnjoy,
    perks,
    getStarted,
    facilitatorTitle, facilitatorsSubtitle
  } = props;
  return (
    <div className="px-5 md:px-10 lg:px-16">

<Head>
        <title>Codes and Cogs - Career Page</title>
        <meta
          name="description"
          content="Career Page for Codes and Cogs"
        />

        <meta property="og:url" content={`https://www.codesandcogs.com/career`} />

        <meta property="og:title" content="Codes and Cogs - Career" />
        <meta
          property="og:description"
          content="Career Page for Codes and Cogs"
        />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HeaderBanner title="Career" />

      <Section1 heroBgImage={heroBgImage} heroText={heroText} />
      <Section2
        ourTeamTitle={ourTeamTitle}
        ourTeamDescription={ourTeamDescription}
      />
      <Section3
        missionBgImage={missionBgImage}
        missionTitle={missionTitle}
        missionDescription={missionDescription}
      />
      <Section4
        workWithUsTitle={workWithUsTitle}
        workWithUsDescription={workWithUsDescription}
      />
      <Section5
        whatOurTeamEnjoyTitle={whatOurTeamEnjoyTitle}
        whatYouNeeSubtitle={whatYouNeeSubtitle}
        whatOurTeamEnjoy={whatOurTeamEnjoy}
      />
      <Banner banner={banner} />
      <Section6 jobOpeningTitle={jobOpeningTitle} jobOpenings={jobOpenings} />
      <Section7
        getStartedTitle={getStartedTitle}
        getStartedSubtitle={getStartedSubtitle}
        getStarted={getStarted}
        banner2={banner2}
      />
      <Section8 facilitators={facilitators} facilitatorTitle={facilitatorTitle} facilitatorsSubtitle={ facilitatorsSubtitle} />
      <Section9
        whatYouNeedTitle={whatYouNeedTitle}
        whatYouNeeSubtitle={whatYouNeeSubtitle}
        whatYouNeed={whatYouNeed}
      />
      <Section10 perks={perks} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/careerpage`
    // new Agent({ keepAlive: true })
  );
  const data = await response.json();

  const heroBgImage = data.heroImageUrl;
  const heroText = data.heroText;
  const ourTeamTitle = data.ourTeamTitle;
  const ourTeamDescription = data.ourTeamDescription;
  const missionBgImage = data.missionBgImage || "";
  const missionTitle = data.missionTitle;
  const missionDescription = data.missionDescription;
  const workWithUsTitle = data.workWithUsTitle;
  const workWithUsDescription = data.workWithUsDescription;
  const whatOurTeamEnjoyTitle = data.workingWithUsTitle;
  const whatOurTeamEnjoySubtitle = data.workingWithUsDescription;
  const whatOurTeamEnjoy = data.juciyPerks;
  const jobOpeningTitle = data.jobOpeningTitle;
  const getStartedTitle = data.getStartedTitle;
  const getStartedSubtitle = data.getStartedSubtitle || "";
  const banner = data.banner;
  const banner2 = data.banner2;
  const facilitators = data.facilitators;
  const whatYouNeedTitle = data.whatYouNeedTitle;
  const whatYouNeeSubtitle = data.whatYouNeeSubtitle;
  const whatYouNeed = data.whatYouNeed;
  const jobOpenings = data.job_postings;
  const perks = data.perks;
  const getStarted = data.getStarted;
 const  facilitatorTitle = data.facilitatorsTitle
 const facilitatorsSubtitle = data.facilitatorsSubtitle

  return {
    props: {
      heroBgImage,
      heroText,

      ourTeamTitle,
      ourTeamDescription,

      missionBgImage,
      missionTitle,
      missionDescription,

      workWithUsTitle,
      workWithUsDescription,

      whatOurTeamEnjoyTitle,
      whatOurTeamEnjoySubtitle,
      whatOurTeamEnjoy,

      banner,

      jobOpeningTitle,
      getStartedSubtitle,
      jobOpenings,

      getStartedTitle,
      getStartedSubtitle,
      getStarted,
      banner2,

      facilitators,
      facilitatorsSubtitle,
      facilitatorTitle,

      whatYouNeedTitle,
      whatYouNeeSubtitle,
      whatYouNeed,

      perks,
    },
    revalidate: 300,
  };
}

export default Index;

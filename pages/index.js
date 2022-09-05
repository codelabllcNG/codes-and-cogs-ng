import Head from "next/head";
import React, { useEffect, useState } from "react";
import AllCtx from "../util-functions/allCtx";
import NavIndicator from "../components/home-page/NavIndicator";
import Section1 from "../components/home-page/Section1";
import Section2 from "../components/home-page/Section2";
import Section3 from "../components/home-page/Section3";
import Section4 from "../components/home-page/Section4";
import Section5 from "../components/home-page/Section5";

export default function Home(props) {
  const {
    heroTitle,
    heroSubtitle,
    bgUrl,
    skillsArray,
    skillsTitle,
    skillsSubtitle,
    modelsTitle,
    modelsSubtitle,
    modelsArray,
    feasibilityTitle,
    feasibilitySubtitle,
    feasibilityArray,
    feasibilityDescription,
    trusteeTitle,
    remoteLocations,
    remoteEngineers,
    remoteDesigners,
    remoteBgImage,
    trusteeLogos,
  } = props;

  const {
    devUrl,
    setSection,
    isSectionOne,
    isSectionTwo,
    isSectionThree,
    isSectionFour,
    isSectionFive,
    isSectionSix,

    sectionOneHeight,
    sectionTwoHeight,
    sectionThreeHeight,
    sectionFourHeight,
    sectionFiveHeight,
    sectionSixHeight,
  } = AllCtx();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset <= (90 / 100) * sectionOneHeight) {
        setSection(true, false, false, false, false, false);
      }

      if (
        window.pageYOffset > (90 / 100) * sectionOneHeight &&
        window.pageYOffset <= sectionOneHeight + (90 / 100) * sectionTwoHeight
      ) {
        setSection(false, true, false, false, false, false);
      }

      if (
        window.pageYOffset > sectionOneHeight + (90 / 100) * sectionTwoHeight &&
        window.pageYOffset <=
          sectionOneHeight + sectionTwoHeight + (90 / 100) * sectionThreeHeight
      ) {
        setSection(false, false, true, false, false, false);
      }

      if (
        window.pageYOffset >
          sectionOneHeight +
            sectionTwoHeight +
            (90 / 100) * sectionThreeHeight &&
        window.pageYOffset <=
          sectionOneHeight +
            sectionTwoHeight +
            sectionThreeHeight +
            (90 / 100) * sectionFourHeight
      ) {
        setSection(false, false, false, true, false, false);
      }

      if (
        window.pageYOffset >
          sectionOneHeight +
            sectionTwoHeight +
            sectionThreeHeight +
            (90 / 100) * sectionFourHeight &&
        window.pageYOffset <=
          sectionOneHeight +
            sectionTwoHeight +
            sectionThreeHeight +
            sectionFourHeight +
            (90 / 100) * sectionFiveHeight
      ) {
        setSection(false, false, false, false, true, false);
      }

      if (
        window.pageYOffset >
        sectionOneHeight +
          sectionTwoHeight +
          sectionThreeHeight +
          sectionFourHeight +
          (90 / 100) * sectionFiveHeight
      ) {
        setSection(false, false, false, false, false, true);
      }
    });
  }, [
    sectionOneHeight,
    sectionTwoHeight,
    sectionThreeHeight,
    sectionFourHeight,
    sectionFiveHeight,
    sectionSixHeight,
  ]);

  return (
    <div className=" ">
      <Head>
        <title>Codes and Cogs - Homepage</title>
        <meta
          name="description"
          content="Get your web or software projects done without the hassle"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavIndicator />
      <Section1
        heroTitle={heroTitle}
        bgUrl={bgUrl}
        heroSubtitle={heroSubtitle}
      />
      <Section2
        skillsArray={skillsArray}
        skillsTitle={skillsTitle}
        skillsSubtitle={skillsSubtitle}
      />
      <Section3
        modelsTitle={modelsTitle}
        modelsSubtitle={modelsSubtitle}
        modelsArray={modelsArray}
      />
      <Section4
        feasibilityTitle={feasibilityTitle}
        feasibilitySubtitle={feasibilitySubtitle}
        feasibilityArray={feasibilityArray}
        feasibilityDescription={feasibilityDescription}
      />
      <Section5
        trusteeTitle={trusteeTitle}
        remoteLocations={remoteLocations}
        remoteEngineers={remoteEngineers}
        remoteDesigners={remoteDesigners}
        remoteBgImage={remoteBgImage}
        trusteeLogos={trusteeLogos}
      />
      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticProps() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_devUrl}/homepage`);
  const data = await response.json();

  const heroTitle = await data.heroTitle;
  const heroSubtitle = data.heroSubtitle;
  const bgUrl = data.bgUrl;

  const skillsTitle = data.skillsTitle;
  const skillsSubtitle = data.skillsSubtitle;
  const skillsArray = data.skills;

  const modelsTitle = data.modelsTitle;
  const modelsSubtitle = data.modelsSubtitle;
  const modelsArray = data.models;

  const feasibilityTitle = data.feasibilityTitle;
  const feasibilitySubtitle = data.feasibilitySubtitle;
  const feasibilityArray = data.feasibilities;
  const feasibilityDescription = data.feasibilityDescription;

  const trusteeTitle = data.trusteeTitle;
  const remoteLocations = data.remoteLocations;
  const remoteEngineers = data.remoteEngineers;
  const remoteDesigners = data.remoteDesigners;
  const remoteBgImage = data.remoteBgImage;
  const trusteeLogos = data.trusteeIcons;

  return {
    props: {
      heroTitle,
      heroSubtitle,
      bgUrl,

      skillsTitle,
      skillsSubtitle,
      skillsArray,

      modelsTitle,
      modelsSubtitle,
      modelsArray,

      feasibilityTitle,
      feasibilitySubtitle,
      feasibilityArray,
      feasibilityDescription,
   
      trusteeTitle,
      remoteLocations,
      remoteEngineers,
      remoteDesigners,
      remoteBgImage,
      trusteeLogos,
    },
    revalidate: 300,
  };
}

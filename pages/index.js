import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Agent } from "https";

import AllCtx from "../util-functions/allCtx";
import NavIndicator from "../components/home-page/NavIndicator";
import HeroSection from "../components/home-page/HeroSection";
import Section2 from "../components/home-page/Section2";
import Section3 from "../components/home-page/Section3";
import Section4 from "../components/home-page/Section4";
import Section5 from "../components/home-page/Section5";
import Model from "../components/home-page/Model";
import Banner1 from "../components/home-page/Banner1";
import WhyUS from "../components/home-page/WhyUS";
import RemoteTalents from "../components/home-page/RemoteTalents";
import PopularSkills from "../components/home-page/PorpularSkills";
import BuildTeam from "../components/home-page/BuildTeam";
import Testimonials from "../components/home-page/Testimonials";
import Outro from "../components/home-page/Outro";

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
    projectEngineerPhone,
    staffing
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
    <div className="gen-padding  ">
      <Head>
        <title>Codes and Cogs - Hire Top Tech Talents Hassle-Free</title>
        <meta
          name="description"
          content="Find vetted engineers, developers, and designers from anywhere in the world hassle-free with no down payment at Codes and Cogs. Book a free consultation now."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <NavIndicator /> */}
      <HeroSection
        heroTitle={heroTitle}
        bgUrl={bgUrl}
        heroSubtitle={heroSubtitle}
        projectEngineerPhone={projectEngineerPhone}
      />

      <Model />
      
      <Banner1 />
      
      <WhyUS/>

      <RemoteTalents />
      
      {/* <PopularSkills /> */}
      
      <BuildTeam/>

      {/* <Testimonials/> */}

      {/* <Section2
        skillsArray={skillsArray}
        skillsTitle={skillsTitle}
        skillsSubtitle={skillsSubtitle}
      /> */}
      {/* <Section3
        modelsTitle={modelsTitle}
        modelsSubtitle={modelsSubtitle}
        modelsArray={modelsArray}
        staffing={staffing}
      /> */}
      {/* <Section4
        feasibilityTitle={feasibilityTitle}
        feasibilitySubtitle={feasibilitySubtitle}
        feasibilityArray={feasibilityArray}
        feasibilityDescription={feasibilityDescription}
      /> */}
      {/* <Section5
        trusteeTitle={trusteeTitle}
        remoteLocations={remoteLocations}
        remoteEngineers={remoteEngineers}
        remoteDesigners={remoteDesigners}
        remoteBgImage={remoteBgImage}
        trusteeLogos={trusteeLogos}
        projectEngineerPhone={projectEngineerPhone}
      /> */}

      <Outro/>
      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/homepage`,
    new Agent({ keepAlive: true })
  );
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
  const projectEngineerPhone = data.phone;

  const staffing = data.staffing 

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
      projectEngineerPhone,

      staffing
    },
    revalidate: 300,
  };
}

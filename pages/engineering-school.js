import Head from "next/head";
import React, { useState } from "react";
import Section1 from "../components/engineering-school/Section1";
import Section2 from "../components/engineering-school/Section2";
import Section3 from "../components/engineering-school/Section3";
import Section4 from "../components/engineering-school/Section4";

function EngineeringSchool(props) {
  const {
    courseArray,
    selectedCourse,
    ourCourseSubtitle,
    ourCourseTitle,
    numberOfGraduates,
    numberOfFacilitators,
    courseIntroTitle,
    courseIntro,
    numberOfCourses,
    title,
    subtitle,
    bulletinImage,
    whyBePartTitle,
    bulletin,
    whyBePart1,
    whyBePart2,
    whyBePart3,
    bgImage,
  } = props;

  return (
    <div>
      <Head>
        <title>Codes and Cogs - Engineering School</title>
        <meta
          name="description"
          content="Join our Tech Bootcamp Today! Work for some of the biggest Tech companies in the world."
        />

        <meta
          property="og:url"
          content={`https://www.codesandcogs.com/engineering-school`}
        />

        <meta
          property="og:title"
          content="Codes and Cogs - Engineering School"
        />
        <meta
          property="og:description"
          content="Join our Tech Bootcamp Today! Work for some of the biggest Tech companies in the world."
        />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section1 bgImage={bgImage} />
      
      <Section2
        whyBePart1={whyBePart1}
        whyBePart2={whyBePart2}
        whyBePart3={whyBePart3}
        title={title}
        subtitle={subtitle}
        bulletinImage={bulletinImage}
        whyBePartTitle={whyBePartTitle}
        bulletin={bulletin}
      />
      <Section3
        numberOfGraduates={numberOfGraduates}
        numberOfFacilitators={numberOfFacilitators}
        numberOfCourses={numberOfCourses}
        courseIntroTitle={courseIntroTitle}
        courseIntro={courseIntro}
      />
      <Section4
        courseArray={courseArray}
        selectedCourse={selectedCourse}
        ourCourseTitle={ourCourseTitle}
        ourCourseSubtitle={ourCourseSubtitle}
      />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/engineering_school`
  );
  const data = await response.json();

  const courseArray = data.ourCourses;

  function courseFinder() {
    return courseArray.find((course, i) => i === 0);
  }
  const selectedCourse = courseFinder();

  const title = data.title;
  const subtitle = data.subtitle;
  const bulletinImage = data.bulletinImage;
  const whyBePartTitle = data.whyBePartTitle;
  const whyBePart1 = data.whyBePart1;
  const whyBePart2 = data.whyBePart2;
  const whyBePart3 = data.whyBePart3;
  const bgImage = data.bgImage;
  const bulletin = data.bulletin;

  const numberOfCourses = data.numberOfCourses;
  const ourCourseTitle = data.ourCourseTitle;
  const ourCourseSubtitle = data.ourCourseSubtitle;
  const numberOfGraduates = data.numberOfGraduates;
  const numberOfFacilitators = data.numberOfFacilitators;

  const courseIntroTitle = data.courseIntroTitle;
  const courseIntro = data.courseIntro;
  return {
    props: {
      bgImage,

      title,
      subtitle,
      bulletinImage,
      bulletin,
      whyBePartTitle,
      whyBePart1,
      whyBePart2,
      whyBePart3,

      numberOfCourses,
      numberOfGraduates,
      numberOfFacilitators,
      courseIntroTitle,
      courseIntro,

      courseArray,
      selectedCourse,
      ourCourseTitle,
      ourCourseSubtitle,
    },
    revalidate: 300,
  };
}

export default EngineeringSchool;

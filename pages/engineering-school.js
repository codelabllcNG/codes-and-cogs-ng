import Head from 'next/head';
import React, { useState } from 'react'
import Section1 from '../components/engineering-school/Section1';
import Section2 from '../components/engineering-school/Section2';
import Section3 from '../components/engineering-school/Section3';
import Section4 from '../components/engineering-school/Section4';

function EngineeringSchool(props) {
  const { courseArray, selectedCourse } = props;
  



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

        <meta property="og:title" content="Codes and Cogs - Engineering School" />
        <meta
          property="og:description"
          content="Join our Tech Bootcamp Today! Work for some of the biggest Tech companies in the world."
        />
        <meta property="og:image" content="/logo.png" />

            <link rel="icon" href="/favicon.ico" />
          </Head>


      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 courseArray={ courseArray} selectedCourse={selectedCourse} />
    </div>

  )
}

export async function getStaticProps() {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/supportpage`
  // );
  // const data = await response.json();

  const courseArray =  [
    {
      name: "WordPress",
      id: "wordpress",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero velit modi deleniti repudiandae inventore, laborum ad recusandae eos hic cum laudantium. Consequatur, repellat nihil. Voluptatum maxime dicta et necessitatibus.",
    },

    {
      name: "Java",
      id: "java",
      content:
        "Lorem2 ipsum22 dolo2r sit2 amet consectetur, adipisicing elit. Maiores vero velit modi deleniti repudiandae inventore, laborum ad recusandae eos hic cum laudantium. Consequatur, repellat nihil. Voluptatum maxime dicta et necessitatibus.",
    },
  ];

  function courseFinder() {
    return courseArray.find((course, i) => i === 0);
  }
  const selectedCourse = courseFinder()
  // console.log(selectedCourse);

  // const supportTitle = data.supportTitle;
  // const courseArray =  COURSES;
 
  return {
    props: {
      courseArray,
      selectedCourse
    },
    revalidate: 300, 
  };
}

export default EngineeringSchool
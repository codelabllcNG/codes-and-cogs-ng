import Head from 'next/head';
import React from 'react'
import Section1 from '../components/engineering-school/Section1';
import Section2 from '../components/engineering-school/Section2';
import Section3 from '../components/engineering-school/Section3';

function EngineeringSchool() {
  return (
    <div>
  <Head>
            <title>Codes and Cogs - Engineering School</title>
            <meta
              name="description"
              content="Join our Tech Bootcamp Today! Work for some of the biggest Tech companies in the world."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>


      <Section1 />
      <Section2 />
      <Section3/>
    </div>

  )
}

export default EngineeringSchool
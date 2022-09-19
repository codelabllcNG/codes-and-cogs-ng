import React from "react";
import Image from "next/image";
import Link from "next/link";
import BotIcon from "../../components/BotIcon";
import {
  selectedService,
  SERVICES,
  SOLUTIONS,
} from "../../a-store/content-store/WHAT-WE-DO";
import Head from "next/head";
import { useRouter } from "next/router";
import AllCtx from "../../util-functions/allCtx";
import { useEffect } from "react";
import Section1 from "../../components/what-we-do/Section1";
import Section2 from "../../components/what-we-do/Section2";
import Section3 from "../../components/what-we-do/Section3";




function WhatWeDo(props) { 
  const router = useRouter();
  const {setMegaMenu} = AllCtx();
  

useEffect(() => { 
  setMegaMenu(false)
}, [])

  const { title, subtitle, bgImage, enterpriseServices, solutionAsServices } =
    props;

  return (
    <div className="px-5 md:px-10 lg:px-16">

<Head>
        <title>{`What We Do - Codes and Cogs`}</title>
        <meta name="description" content={`The enterprise services and solutions we offer at Codes and Cogs. ${subtitle}`} />

        <meta
          property="og:url"
          content={`https://www.codesandcogs.com/what-we-do`}
        />
      
        <meta property="og:title" content="What We Do - Codes and Cogs" />
        <meta
          property="og:description"
          content={`The enterprise services and solutions we offer at Codes and Cogs. ${subtitle}`} 
        />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/what-we-do`}
        />
      </Head>


      <Section1 subtitle={subtitle} bgImage={bgImage} title={title} />

      <Section2 enterpriseServices={enterpriseServices}    />

     <Section3 solutionAsServices={solutionAsServices}/>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/whatwedo`
  );
  const data = await response.json();

  const title = data.whatWeDoTitle;
  const subtitle = data.whatWeDoSubtitle;
  const bgImage = data.whatWeDoBgImage;
  const enterpriseServices = data.enterprize_services;
  const solutionAsServices = data.solution_as_services;

  return {
    props: {
      title,
      subtitle,
      bgImage,
      enterpriseServices,
      solutionAsServices,
    },
    revalidate: 300,
  };
}

export default WhatWeDo;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
// import HubspotForm from 'react-hubspot-form'


function WhatWeDoID(props) {
  const router = useRouter();


  const { selectedWhatWeDo } = props;

    useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js?pre=1";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22606943",
          formId: "28241b1b-34b7-449d-9b15-85a2367d0a76",
          target: "#wwd-form",
        });
      }
    });

    return () => {
      script.removeEventListener('load', () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "22606943",
            formId: "28241b1b-34b7-449d-9b15-85a2367d0a76",
            target: "#wwd-form",
          });
        }
      })
   };
  }, []);

  if (router.isFallback) {
    return <Loading />;
  }



  return (
    <div className="px-5 lg:px-16 md:px-10 ">
      <Head>
        <title>{selectedWhatWeDo.name}</title>
        <meta name="description" content={selectedWhatWeDo.name} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/what-we-do/${selectedWhatWeDo.id}`}
        />
      </Head>
       
    

      <div className="flex  justify-center md:text-center md:mb-2">
        <h2 className="font-bold header">
          {selectedWhatWeDo.name}
        </h2>
      </div>
      <div className="flex justify-center mb-8">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>
      <div>
        
      <div className="  justify-between md:flex ">
        <div className="w-[40%]  md:mr-8  h-full hidden md:flex">
          <Image
            className="rounded-lg"
            src={selectedWhatWeDo.imageUrl}
            width={500}
            height={400}
          />{" "}
        </div>
        <div className="w-[100%] mb-5 flex justify-center md:hidden">
          <Image src={selectedWhatWeDo.imageUrl} width={400} height={300} />{" "}
        </div>
        <div className=" prose-h1:text-3xl prose-h1:font-bold w-full md:w-[55%]  ">
          <div
            className=" max-w-none text-justify md:text-lg "
            dangerouslySetInnerHTML={{ __html: selectedWhatWeDo.summary }}
          >
            {}
          </div>
        </div>
        </div>
        
        <div className=" prose  max-w-none prose-h1:text-3xl prose-h1:font-semibold w-full md:mt-3 ">
          <div
            className=" text-justify md:text-lg  "
            dangerouslySetInnerHTML={{ __html: selectedWhatWeDo.content }}
          >
            {}
          </div>
        </div>
</div>

      <div className=' mt-5 lg:mt-20 '>
        <div className=' flex justify-center '>
         <p className='md:w-[70%] text-pry-color font-semibold 400:text-2xl '> Reach out to us below! </p>
        </div>
      <div className='flex justify-center mt-5  '>
        
        <div id="wwd-form" className='w-full md:w-[70%]'>
      
      </div> 
        </div>
    </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const whatWeDoID = context.params.whatWeDoID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/whatwedo`
  );
  const data = await response.json();
  const whatWeDoArray = [
    ...data.enterprize_services,
    ...data.solution_as_services,
  ];

  function whatWiDoFinder() {
    return whatWeDoArray.find((whatWeDo) => whatWeDo.id === whatWeDoID);
  }
  const selectedWhatWeDo = whatWiDoFinder(whatWeDoID);

  if (!selectedWhatWeDo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      whatWeDoID,
      whatWeDoArray,
      selectedWhatWeDo,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/whatwedo`
  );
  const data = await response.json();

  const whatWeDoArray = [
    ...data.enterprize_services,
    ...data.solution_as_services,
  ];

  const whatWeDoPaths = whatWeDoArray.map((whatWeDo) => whatWeDo.id);

  return {
    paths: whatWeDoPaths.map((whatWeDoID) => ({
      params: { whatWeDoID: whatWeDoID },
    })),
    fallback: false,
  };
}

export default WhatWeDoID;

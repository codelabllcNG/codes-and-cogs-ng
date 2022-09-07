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



function WhatWeDo(props) {
const router = useRouter();


  const { title, subtitle, bgImage, enterpriseServices, solutionAsServices } =
    props;

  return (
    <div className="px-5 md:px-10 lg:px-16">

<Head>
        <title>{`What We Do - Codes and Cogs`}</title>
        <meta name="description" content={`The enterprise services and solutions we offer at Codes and Cogs. ${subtitle}`} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/what-we-do`}
        />
      </Head>


      <div className="900:bg-[url('/images/services-bg.png')]  bg-cover bg-center bg-no-repeat pt-16 900:pb-16 lg:pb-[8rem]   900:mb-16">
      <div className="flex text-center justify-center ">
        <h2 className="font-bold header">{"What We Do"}</h2>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className=" w-[75px] md:[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>
        <div className="mb-5 ">
          <p>
            {subtitle}{" "}
          </p>
        </div>

        <div className=" flex space-x-5 mt-7  items-center mb-6">
          {" "}
          <Image
            src="/images/logos-and-icons/enterprise.png"
            width="35"
            height="35"
          />{" "}
          <Link passHref href={`#enterprise-services`}>
            <button className="font-semibold text-pry-color hover:text-blue-600">
              Enterprise Services
            </button>
          </Link>{" "}
        </div>

        <div className=" flex space-x-5 items-center mb-4">
          {" "}
          <Image
            src="/images/logos-and-icons/solutions.png"
            width="35"
            height="35"
          />{" "}
          <Link passHref href={`#solution-as-a-service`}>
            <button className="font-semibold text-pry-color hover:text-blue-600">
              Solution As A Service
            </button>
          </Link>{" "}
        </div>

        <div className=" mt-16">
          {" "}
          <BotIcon />
        </div>
      </div>

      <div id="enterprise-services" className="mb-10">
        <div className="flex  justify-center mb-2">
          <h2 className="font-bold text-2xl md:text-5xl">Enterprise Packages</h2>
        </div>
        <div className="flex justify-center mb-3 ">
          <div className=" w-[75px] md:[150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {enterpriseServices.map((enterpriseService, i) => (
        <div key={enterpriseService.id} className="mb-20" id={`${enterpriseService.id}`}>
          <div className="flex  justify-center mb-2">
            <h2 className="font-bold text-2xl">{enterpriseService.name}</h2>
          </div>
      

          <div className="mb-5">
            <p className="text-center">{enterpriseService.excerpt}</p>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`prose max-w-none sm:w-[55%] text-justify  mb-5 sm:mb-0 text-pry-color  `}
            >
              <div className="sm:leading-7 lg:leading-10  " dangerouslySetInnerHTML={{ __html: enterpriseService.content.length > 400 ? enterpriseService.summary.substring(0, 400) + '...' : enterpriseService.summary }}>
                {}
              </div>

              <div onClick={()=>{router.push(`/what-we-do/${enterpriseService.id}`)}} className='mt-5 text-pry-color text-sm font-semibold'><button>Read More</button></div>
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <Image width={400} height={300} className="w-300px" src={enterpriseService.imageUrl} alt="" />
            </div>
          </div>
          
     
        </div>
        
      ))}

      <div id="solution-as-a-service" className="mb-10 ">
        <div className="flex  justify-center mb-2">
          <h2 className="font-bold text-2xl md:text-5xl">Solution As A Service</h2>
        </div>
        <div className="flex justify-center mb-3 ">
          <div className=" [150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {solutionAsServices.map((solution, i) => (
        <div key={solution.id} className="mb-20" id={`${solution.id}`}>
          <div className="flex  justify-center mb-2">
            <h2 className="font-bold text-2xl">{solution.name}</h2>
          </div>
          {/* <div className="flex md:justify-center mb-3 ">
          <div className=" [150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            /> 
          </div>
    </div> */}

          <div className="mb-5">
            <p className="text-center">{solution.excerpt}</p>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`prose max-w-none sm:w-[55%] text-justify  mb-5 sm:mb-0 text-pry-color `}
            >
              <div dangerouslySetInnerHTML={{__html: solution.summary}} className="sm:leading-7 lg:leading-10   ">
                {}
              </div>

              <div onClick={()=>{router.push(`/what-we-do/${solution.id}`)}} className='mt-5 text-pry-color text-sm font-semibold'><button>Read More</button></div>
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <Image height={300} width={400} className="w-300px" src={solution.imageUrl} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/whatwedo`
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

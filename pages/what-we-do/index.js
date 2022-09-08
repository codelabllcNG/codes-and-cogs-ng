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


      <div className="md:h-[80vh] md:bg-[url('/images/what-we-do-bg.png')]  bg-contain bg-right-top bg-no-repeat ">
      <div className="flex text-center justify-center ">
        <h2 className="font-bold header">What We Do</h2>
      </div>
      <div className="flex justify-center mb-5 md:mb-10 ">
        <div className=" w-[75px] md:[150px]">
          <img alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>
        <div className=" md:w-[60%] lg:w-[70%]  ">
          <div className='text-xl md:leading-10 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[3.5rem]  font-semibold '  dangerouslySetInnerHTML={{__html: subtitle}}>
            {}
          </div>
        </div>

        <div className=" flex space-x-5 mt-5 md:mt-16 text-xl sm:text-2xl md:text-3xl  items-center mb-5 md:mb-16">
          {" "}
          <img alt="Image alt text"
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

        <div className=" flex space-x-5 text-xl sm:text-2xl md:text-3xl items-center mb-4">
          {" "}
          <img alt="Image alt text"
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

        {/* <div className=" mt-16">
          {" "}
          <BotIcon />
        </div> */}
      </div>

      <div id="enterprise-services" className="mb-10 mt-10">
        <div className="flex  justify-center mb-2">
          <h2 className="font-bold header">Enterprise Packages</h2>
        </div>
        <div className="flex justify-center mb-3 ">
          <div className=" w-[75px] md:[150px]">
            <img alt="Image alt text"
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
            <div dangerouslySetInnerHTML={{__html: enterpriseService.name}} className="font-bold text-2xl">
              {}
            </div>
          </div>
      

          <div className="mb-5">
            <div dangerouslySetInnerHTML={{ __html: enterpriseService.excerpt }} className="text-center">
              {}
            </div>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`prose max-w-none sm:w-[55%] text-justify  mb-5 sm:mb-0 text-pry-color  `}
            >
              <div className="sm:leading-8   sm:text-lg " dangerouslySetInnerHTML={{ __html: enterpriseService.content.length > 400 ? enterpriseService.summary.substring(0, 400) + '...' : enterpriseService.summary }}>
                {}
              </div>

              <div onClick={()=>{router.push(`/what-we-do/${enterpriseService.id}`)}} className='mt-5 text-pry-color text-sm font-semibold'><button>Read More</button></div>
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <img alt="Image alt text" width={400} height={300} className="w-300px" src={enterpriseService.imageUrl}  />
            </div>
          </div>
          
     
        </div>
        
      ))}

      <div id="solution-as-a-service" className="mb-10 ">
        <div className="flex  justify-center mb-2">
          <h2 className="font-bold header">Solution As A Service</h2>
        </div>
        <div className="flex justify-center mb-3 ">
          <div className=" [150px]">
            <img alt="Image alt text"
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
            <div dangerouslySetInnerHTML={{ __html: solution.name }} className="font-bold text-2xl">
              {}
            </div>
          </div>
          {/* <div className="flex md:justify-center mb-3 ">
          <div className=" [150px]">
            <img alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            /> 
          </div>
    </div> */}

          <div className="mb-5">
            <div dangerouslySetInnerHTML={{ __html: solution.excerpt }} className="text-center">
              {}
            </div>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`prose max-w-none sm:w-[55%] text-justify  mb-5 sm:mb-0 text-pry-color `}
            >
              <div dangerouslySetInnerHTML={{__html: solution.summary || "Coming Soon"}} className="sm:leading-7 lg:leading-10   ">
                {}
              </div>

              {/* /what-we-do/${solution.id} */}
              <div onClick={()=>{router.push(`/coming-soon`)}} className='mt-5 text-pry-color text-sm font-semibold'><button>Read More</button></div>
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <img alt="Image alt text" height={300} width={400} className="w-300px" src={solution.imageUrl} />
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

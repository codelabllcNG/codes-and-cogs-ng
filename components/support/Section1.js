import React from "react";
import BotIcon from "../BotIcon";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

function Section1(props) {

  const {
    supportTitle,
    supportSubtitle,
    supportBgImage,
    customerCareNumber,
    customerCareEmail
  } = props;

  let router = useRouter();



  return (
    <div className="px-5 md:px-10  lg:px-16   "

 
    >
       {/* <div className="flex  justify-center md:mb-2">
              <h2 className="font-bold header font-larken  ">
                {supportTitle}
              </h2>
            </div>
            <div className="flex justify-center mb-4">
              <div className=" w-[75px] md:w-[150px]">
                <Image alt="Image alt text"
                  src="/images/logos-and-icons/red-underline.png"
                  width={150}
                  height={20}
                />
              </div>
            </div> */}

      <div className="890:flex md:space-x-2"
           >
        <div className='890:w-1/2 w-full'>
          <div dangerouslySetInnerHTML={{__html: supportTitle}} className='890:mt-5 font-semibold text-pry-color font-larken 890:text-[#07222E] md:leading-[3.5rem] md:text-5xl xl:text-[4rem] lg:text-[3rem] lg:leading-[3.5rem] xl:leading-[5rem] text-2xl sm:text-5xl sm:leading-[3.5rem] 340:text-[1.7rem] 340:leading-[2.2rem]'>
            {}
          </div>
      <div className="dangerous-html  md:mb-5">
        <div dangerouslySetInnerHTML={{__html: supportSubtitle}} className=" text-lg md:text-xl md:leading-7 lg:text-2xl">
       {}
        </div>
      </div>

      <div className="mb-10 flex space-x-2 500:space-x-5">
        <button
          onClick={() => {
            router.push("#create-ticket");
          }}
          className="bg-pry-color text-white px-3 500:px-5 py-2 500:py-2 rounded-lg text-[0.6rem] 400:text-sm font-semibold" 
        >
          Open a New Ticket
        </button>{" "}
         <button
          onClick={() => {
            router.push("https://meetings.hubspot.com/charles-uko");
          }}
          className="bg-white text-pry-color  ring-pry-color ring-1 px-3 500:px-5 py-2 500:py-2 rounded-lg text-[0.6rem] 400:text-sm font-semibold"
        >
          Book a Call
        </button> 
      </div>

      <div className="md:mb-32">
            <p className="font-semibold">Customer Care</p>
            <Link passHref href={`tel:${customerCareNumber}`}>
              <a dangerouslySetInnerHTML={{ __html: customerCareNumber }}>
                {}
            </a>
          </Link>
           
            
            <div className='mt-2'>
            <Link passHref href={`mailto:${customerCareEmail}`}>
              <a dangerouslySetInnerHTML={{ __html: customerCareEmail }}>
                {}
            </a>
          </Link>
            </div>
        
      </div>
        </div>
        
        <div className="hidden 890:flex w-1/2 890:bg-contain 890:bg-top 890:bg-no-repeat"
            //  md:bg-[url('/images/support-bg.png')]
        style={{ backgroundImage: `url(${supportBgImage})` }}
        >

        </div>
     </div>

      <BotIcon />
    </div>
  );
}



export default Section1;

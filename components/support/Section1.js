import React from "react";
import BotIcon from "../BotIcon";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";


function Section1(props) {

  const {
    supportTitle,
    supportSubtitle,
    supportBgImage,
    customerCareNumber,
  } = props;

  let router = useRouter();



  return (
    <div className="px-5   md:px-14   "

 
    >
       <div className="flex  justify-center md:mb-2">
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
            </div>

      <div className="md:flex md:space-x-2"
           >
      <div className='md:w-1/2 w-full'>
      <div className="dangerous-html  md:mb-5">
        <div dangerouslySetInnerHTML={{__html: supportSubtitle}} className="text-pry-color text-lg md:leading-7 lg:text-xl">
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
        {/* <button
          onClick={() => {
            router.push("#ticket-status");
          }}
          className="bg-pry-color text-white px-3 500:px-5 py-2 500:py-2 rounded-lg text-[0.6rem] 400:text-sm font-semibold"
        >
          Check Ticket Status
        </button> */}
      </div>

      <div className="md:mb-32">
        <p className="font-semibold">Customer Care</p>
        <p>{customerCareNumber}</p>
      </div>
        </div>
        
        <div className="hidden md:flex w-1/2 md:bg-cover md:bg-center md:bg-no-repeat"
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

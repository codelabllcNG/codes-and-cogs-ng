import React from "react";
import Image from "next/image";
import BotIcon from "../BotIcon";
import { useRouter } from "next/router";


function Section1(props) {
const router = useRouter();

  const {
    aboutTitle,
    aboutBody,
    noPaymentVideo,
    noPaymentText,
    remoteLocationsVideo,
    remoteLocationsText,
    timeAndLanguageVideo,
    timeAndLanguageText,
  } = props;

  return (
    <div className="px-5 md:px-10 lg:px-16 mb-14">
      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold text-xs 320:text-base 350:text-xl  md:text-4xl">
         {aboutTitle}
        </h2>
      </div>
      <div className="flex justify-center mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div>
        <div className="dangerous-html text-justify mb-3">
          <div dangerouslySetInnerHTML={{__html: aboutBody}} className="text-pry-color text-lg ">
        {}
          </div>
        </div>{" "}
    
      </div>

      <div className=" mb-4   grid grid-cols-1 sm:grid-cols-3  gap-4">
        <div>
      
          <div className='flex justify-center'>
          <video
            // width="400"
            height="305"
            controls
            // autoPlay
            loop
            // muted
            className="rounded-lg mb-2 h-auto"
          >
            <source src={noPaymentVideo} />
            Your browser does not support the video tag.
          </video>
      </div>

          <div className="text-center">
            <p className="text-sm text-pry-color">
           {noPaymentText}
            </p>
          </div>
        </div>

        <div>

        <div className='flex justify-center'>
                <video
            // width="400"
            height="3035"
            controls
            // autoPlay
            loop
            // muted
            className="rounded-lg mb-2"
          >
            <source src={remoteLocationsVideo} />
            Your browser does not support the video tag.
          </video>
            </div>

      
          <div className="text-center">
            <p className="text-sm text-pry-color">
            {remoteLocationsText}
            </p>
          </div>
        </div>

        <div>
        <div className='flex justify-center'>
              <video
            // width="400"
            height="305"
            controls
            // autoPlay
            loop
            // muted
            className="rounded-lg mb-2"
          >
            <source src={timeAndLanguageVideo} />
            Your browser does not support the video tag.
          </video>
            </div>

        
          <div className="text-center">
            <p className="text-sm text-pry-color">
            {timeAndLanguageText}
            </p>
          </div>
        </div>
      </div>
      <div     onClick={() => {
                  router.push("/what-we-do");
                }} className="flex justify-center">
        <button className="px-3 py-2 rounded-md ring-2 hover:ring-pry-color ring-pry-color ring-opacity-50 bg-mid-color text-pry-color font-semibold text-sm ">
          Want to know more?
        </button>
      </div>

      <BotIcon />
    </div>
  );
}

export default Section1;

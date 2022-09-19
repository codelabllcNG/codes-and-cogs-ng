import React, { useEffect, useRef, useState } from "react";
import AllCtx from "../../util-functions/allCtx";
import Image from "next/image";
import BotIcon from "../BotIcon";

import { TRUSTED } from "../../a-store/content-store/TRUSTED";
import Link from "next/link";

function Section5(props) {
  const { setSectionFiveHeight, sectionFiveHeight } = AllCtx();

  const {
    trusteeTitle,
    remoteLocations,
    remoteEngineers,
    remoteDesigners,
    remoteBgImage,
    trusteeLogos,
    projectEngineerPhone,
  } = props;



  const divHeightRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (divHeightRef.current) {
        setSectionFiveHeight(divHeightRef.current.clientHeight);
      }
    });
  }, []);

  return (
    <section className="px-5 mt-20 md:px-10 lg:px-16">
      <div className="lg:bg-[url('/images/sections-watermark.png')] bg-contain bg-right-bottom  bg-no-repeat ">
        <section id="section5" ref={divHeightRef} className="scroll-mt-10 md:ml-8 ">
          <div className="mb-10">
            <div className="flex  justify-center md:mb-2">
              <h2 className="font-bold header font-larken  ">
                {trusteeTitle}
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
            <div className="flex justify-between mb-4 space-x-2">
              {trusteeLogos.map((trusted) => (
                <div key={trusted.id}>
                  <Image alt="Image alt text"
                    layout="intrinsic"
                    width="80"
                    height="80"
                    // className="w-[30px] 340:w-[40px] sm:w-[50px] md:w-[60px] lg:w-[80px] "

                    src={trusted.imageUrl}
              
                  />
                </div>
              ))}
            </div>

            <div
              className="pb-4 lg:py-8 rounded-lg 
        bg-cover bg-center  bg-no-repeat"
              // bg-[url('/images/trusted-bg.png')]
              style={{ backgroundImage: `url(${remoteBgImage})` }}
            >
              <div className="flex justify-evenly text-center py-12 px-1">
                <div className='w-1/3 '>
                  <div className="flex justify-center text-white">
                    <div>
                      <img alt="Image alt text"
                        className="340:w-[30px] 340:h-[40px] w-[20px] h-[30px]"
                        src="/images/logos-and-icons/location.svg"
                     
                      />
                    </div>
                  </div>
                  <div className="flex justify-center text-white">
                    <p className="text-xs 340:text-sm mt-2">
                      {remoteLocations}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center text-white">
                    <p className="text-center text-xs 340:text-sm">
                      Remote Locations
                    </p>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className="flex justify-center text-white">
                    <div >
                      <img alt="Image alt text"
                        className="340:w-[30px] 340:h-[40px] w-[20px] h-[30px]"
                        src="/images/logos-and-icons/people.svg"
                      
                      />
                    </div>
                  </div>
                  <div className="flex  justify-center text-white">
                    <p className="text-xs 340:text-sm mt-2">
                      {remoteEngineers}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center text-white">
                    <p className="text-center text-xs 340:text-sm">
                      Web and Software Engineers
                    </p>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className="flex justify-center text-white">
                    <div>
                      <img alt="Image alt text"
                        className="340:w-[30px] 340:h-[40px] w-[20px] h-[30px]"
                        src="/images/logos-and-icons/people.svg"
                       
                      />
                    </div>
                  </div>
                  <div className="flex justify-center text-white">
                    <p className="text-xs 340:text-sm mt-2">
                      {remoteDesigners}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center text-white">
                    <p className="text-center text-xs 340:text-sm">Designers</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:mb-3">
                <Link passHref href={`tel:${projectEngineerPhone}`}>
                  <a className="text-pry-color text-xs sm:text-base bg-white sm:px-6 px-3  py-2 sm:py-3 rounded-md font-semibold">
                    Talk to a Project Engineer
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <BotIcon />
        </section>
      </div>

      <div className="p-5 mt-24 400:flex justify-between items-center rounded-xl bg-mid-color md:ml-8 space-x-2">
        <div className=" space-y-5">
          <h2 className="text-lg 400:text-xl sm:text-2xl md:text-4xl font-bold lg:text-5xl">
            We stand with Ukraine
          </h2>
          <h2 className=" 400:text-xl ">
            In oneness, we support the people of Ukraine - our clients, our
            freelancers, and everyone else.
          </h2>
        </div>{" "}
        <div className=" flex justify-center  400:justify-end">
          <Image alt="Image alt text" src="/images/we-love-ukrain.png" width="150" height="150" />
        </div>
      </div>
    </section>
  );
}

export default Section5;

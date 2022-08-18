import React, { useEffect, useRef, useState } from "react";
import AllCtx from "../../util-functions/allCtx";
import Image from "next/image";
import BotIcon from "../BotIcon";
import { TRUSTED } from "../../a-store/content-store/TRUSTED";

function Section5(props) {
  const { setSectionFiveHeight, sectionFiveHeight } = AllCtx();

  const {
    trusteeTitle,
    remoteLocations,
    remoteEngineers,
    remoteDesigners,
    remoteBgImage,
    trusteeLogos,
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
    <section
      id="section5"
      ref={divHeightRef}
      className="px-5 md:ml-8 lg:bg-[url('/images/sections-watermark.png')] bg-contain bg-right-bottom  bg-no-repeat"
    >
      <div className="mb-10">
        <div className="flex  md:justify-center md:mb-2">
          <h2 className="font-bold text-xs 400:text-xl font-larken  md:text-3xl">
            {trusteeTitle}
          </h2>
        </div>
        <div className="flex md:justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
        <div className="flex justify-between mb-4 space-x-2">
          {trusteeLogos.map((trusted) => (
            <div   key={trusted.id}>
                  <Image 
              layout='intrinsic'
              width='80'
              height='80'
              // className="w-[30px] 340:w-[40px] sm:w-[50px] md:w-[60px] lg:w-[80px] "
            
              src={trusted.imageUrl}
              alt=""
            />
        </div>
          ))}
        </div>

        <div className="pb-4 rounded-lg bg-[url('/images/trusted-bg.png')] bg-cover bg-center  bg-no-repeat">
          <div className="flex justify-around py-12 px-2">
            <div>
              <div className="flex justify-center text-white">
                <div>
                  <img
                    className="340:w-[30px] 340:h-[40px] w-[20px] h-[30px]"
                    src="/images/logos-and-icons/location.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center text-white">
                <p className="text-xs 340:text-sm mt-2">{remoteLocations}</p>
              </div>
              <div className="mt-4 flex justify-center text-white">
                <p className="text-center text-xs 340:text-sm">
                  Remote Locations
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-center text-white">
                <div>
                  <img
                    className="340:w-[30px] 340:h-[40px] w-[20px] h-[30px]"
                    src="/images/logos-and-icons/people.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center text-white">
                <p className="text-xs 340:text-sm mt-2">{remoteEngineers}</p>
              </div>
              <div className="mt-4 flex justify-center text-white">
                <p className="text-center text-xs 340:text-sm">
                  Web and Software Engineers
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-center text-white">
                <div>
                  <img
                    className="340:w-[30px] 340:h-[40px] w-[20px] h-[30px]"
                    src="/images/logos-and-icons/people.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center text-white">
                <p className="text-xs 340:text-sm mt-2">{remoteDesigners}</p>
              </div>
              <div className="mt-4 flex justify-center text-white">
                <p className="text-center text-xs 340:text-sm">Designers</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:mb-3">
            <button className="text-pry-color text-xs sm:text-base bg-white sm:px-6 px-3  py-2 sm:py-3 rounded-md font-semibold">
              Talk to a Project Engineer
            </button>
          </div>
        </div>
      </div>

      <BotIcon />
    </section>
  );
}

export default Section5;

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as fbq from "../../util-functions/meta-pixel";

import AllCtx from "../../util-functions/allCtx";
import BotIcon from "../BotIcon";
import GetStartedOptions from "../home-page/GetStartedOptions";
// import GetStartedOptions from "./GetStartedOptions";

function HeroSection(props) {
  const router = useRouter();
  const {
    setSectionOneHeight,
    sectionOneHeight,
    showApplicationForm,
    setShowApplicationForm,
  } = AllCtx();
  const { heroTitle, heroSubtitle, bgUrl, projectEngineerPhone } = props;

  const divHeightRef = useRef();

  const {
    searchKeyword,
    setSearchKeyword,
    searchResponse,
    setSearchResponse,
    searchingSkills,
    setSearchingSkills,
    talentsFound,
    setTalentsFound,
  } = AllCtx();

  return (
    <section
      ref={divHeightRef}
      id="section1"
      className="scroll-mt-10 mt-5 md:mt-10 "
      // md:bg-[url('/images/hero.png')]
    >
      <GetStartedOptions />
      <div className="890:flex flex-row-reverse justify-center">
        <div className="890:w-[45%] 890:flex items-center justify-center">
          <Image
            alt="Hero image"
            className=""
            width={599}
            height={701}
            src={"/images/black cnc mk 1.jpg" || bgUrl}
            // style={{ backgroundImage: `url(${bgUrl})` }}
          />
        </div>

        <div className="  890:w-[60%] ">
          <div className="">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "Building innovative software for world-class companies with world-class talents." ||
                  heroTitle,
              }}
              className="890:mt-5   890:text-[#07222E] md:leading-[3.5rem] md:text-5xl xl:text-[4rem] lg:text-[3rem] lg:leading-[3.5rem] xl:leading-[5rem] text-2xl sm:text-5xl sm:leading-[3.5rem] 340:text-[30px] 340:leading-[2.2rem] font-bold"
            >
              {}
            </div>
          </div>
          

          <div className="mt-5 md:mt-10 flex justify-center 890:justify-start">
            <button
              onClick={() => {
                setShowApplicationForm(true);
              }}
              className="bg-pry-color text-white py-2 px-4 font-semibold md:font-bold text-[18px] md:text-[28px] rounded-xl shadow hover:bg-opacity-80"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10 -mx-2 md:-mx-5  lg:-mx-[90px]" />

      {/* <div className="mt-10">
        <p className="890:text-[22px] font-bold">Trusted By:</p>
        <div className="  flex  ">
          <div
            // ref={scrollRef}
            className="flex scroll-smooth mt-3  overflow-x-scroll justify-between items-center scrollbar-hide "
          >
            {["niishcloud-logo.svg", "codelab-logo.svg"].map((logo, i) => (
              <div
                key={logo}
                className={` mr-3 cursor-pointer relative justify-between px-2 py-1 rounded-xl min-w-fit   `}
              >
                <Image
                  className=""
                  alt="Trustee Logo"
                  src={`/images/${logo}`}
                  width={130}
                  height={43}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default HeroSection;

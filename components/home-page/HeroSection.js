import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as fbq from "../../util-functions/meta-pixel";

import AllCtx from "../../util-functions/allCtx";
import BotIcon from "../BotIcon";
import GetStartedOptions from "./GetStartedOptions";

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

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (divHeightRef.current) {
  //       setSectionOneHeight(divHeightRef.current.clientHeight);
  //     }
  //   });
  // }, [divHeightRef]);

  // async function findTalents(e) {
  //   e.preventDefault();
  //   if (!searchKeyword || searchKeyword.trim() === "") {
  //     setSearchResponse("Search keyword cannot be blank.");
  //     console.log("Search keyword cannot be blank.");
  //     return;
  //   }

  //   try {
  //         window.fbq('trackCustom', 'Talent Search',  {
  //         searchKeyword: `${searchKeyword}`,
  //                })

  //     setSearchingSkills(true);
  //     setSearchResponse("Searching...");
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/search?s=${searchKeyword}`
  //     );

  //     const data = await response.json();

  //     // return

  //     if (!response.ok) {
  //       setSearchingSkills(false);
  //       setSearchResponse("Something went wrong, please search again!");
  //       console.log("Something went wrong, please search again!");
  //       return;
  //     }

  //     // console.log(data);

  //     // return

  //     if (data.status !== "success") {
  //       setSearchingSkills(false);
  //       setSearchResponse("Something went wrong, please try again!");
  //       console.log("Something went wrong, please try again!");

  //       return;
  //     }

  //     // console.log(typeof data.talents);
  //     // return

  //     if (typeof data.talents === "string") {
  //       setSearchingSkills(false);
  //       setSearchResponse(
  //         "No Talent matches your search query, try another one."
  //       );
  //       setTalentsFound([]);
  //       console.log("No Talent matches your search query, try another one.");
  //       {
  //         const timer = setTimeout(() => {
  //           setSearchResponse("");
  //         }, 20000);

  //         return () => clearTimeout(timer);
  //       }
  //     }

  //     setTalentsFound(data.talents);

  //     setSearchingSkills(false);
  //     router.push("/search-talents");
  //     console.log(1);
  //     setSearchResponse(
  //       `Success! Some talents match your ${searchKeyword} query.`
  //     );

  //     console.log(2);
  //     console.log("Success! Some talents match your query.");

  //     // localStorage.setItem("flightArray", JSON.stringify(flights));
  //     // console.log(flights);

  //     {
  //       const timer = setTimeout(() => {
  //         setSearchResponse("");
  //       }, 40000);

  //       return () => clearTimeout(timer);
  //     }
  //   } catch (error) {
  //     setSearchingSkills(false);
  //     setSearchResponse("An error occurred, try again.");
  //     console.log("An error occurred, try again.");
  //     console.log(error);
  //   }
  // }

  return (
    <section
      ref={divHeightRef}
      id="section1"
      className="scroll-mt-10     mt-5 md:mt-10 "
      // md:bg-[url('/images/hero.png')]
    >
      <GetStartedOptions />
      <div className="890:flex flex-row-reverse">
        <div className="890:w-1/2     890:flex items-center justify-center">
          <Image
            alt="Hero Image"
            className=""
            width={792}
            height={667}
            src={bgUrl || "/images/new-hero-image.png"}
            // style={{ backgroundImage: `url(${bgUrl})` }}
          />
        </div>

        <div className="  890:w-[50%] ">
          <div className="">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  heroTitle ||
                  "The fastest way to build a world-class tech team for your next project." ||
                  heroTitle,
              }}
              className="890:mt-5   890:text-[#07222E] md:leading-[3.5rem] md:text-5xl xl:text-[4rem] lg:text-[3rem] lg:leading-[3.5rem] xl:leading-[5rem] text-2xl sm:text-5xl sm:leading-[3.5rem] 340:text-[30px] 340:leading-[2.2rem] font-bold"
            >
              {}
            </div>
          </div>
          <div className="mt-5 xl:leading-10 md:mt-3 890:w-[90%]    lg:mb-10">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "We make tech hiring hassle-free for businesses. Find vetted engineers, developers and designers from anywhere in the world with no down payment. " ||
                  heroSubtitle,
              }}
              className="text-[#4F4F4F] text-[20px] md:font-semibold md:leading-10"
            >
              {}
            </div>
          </div>

          <div className="mt-5 md:mt-10 flex justify-center 890:justify-start">
            <button
              // onClick={() => { setShowApplicationForm(true); }}
              onClick={() => {
                router.push("/coming-soon");
              }}
              className="bg-pry-color text-white py-2 px-4 font-semibold md:font-bold text-[18px] md:text-[28px] rounded-xl shadow hover:bg-opacity-80"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
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
      </div>
    </section>
  );
}

export default HeroSection;

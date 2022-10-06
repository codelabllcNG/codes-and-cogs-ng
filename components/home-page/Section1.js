import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as fbq from '../../util-functions/meta-pixel'

import AllCtx from "../../util-functions/allCtx";
import BotIcon from "../BotIcon";

function Section1(props) {
  const router = useRouter();
  const { setSectionOneHeight, sectionOneHeight } = AllCtx();
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (divHeightRef.current) {
        setSectionOneHeight(divHeightRef.current.clientHeight);
      }
    });
  }, [divHeightRef]);

  async function findTalents(e) {
    e.preventDefault();
    if (!searchKeyword || searchKeyword.trim() === "") {
      setSearchResponse("Search keyword cannot be blank.");
      console.log("Search keyword cannot be blank.");
      return;
    }

    try {
          window.fbq('trackCustom', 'Talent Search',  {
          searchKeyword: `${searchKeyword}`,
                 })
        
      setSearchingSkills(true);
      setSearchResponse("Searching...");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/search?s=${searchKeyword}`
      );

      const data = await response.json();

      // return

      if (!response.ok) {
        setSearchingSkills(false);
        setSearchResponse("Something went wrong, please search again!");
        console.log("Something went wrong, please search again!");
        return;
      }

      // console.log(data); 

      // return

      if (data.status !== "success") {
        setSearchingSkills(false);
        setSearchResponse("Something went wrong, please try again!");
        console.log("Something went wrong, please try again!");

        return;
      }

      // console.log(typeof data.talents);
      // return

      if (typeof data.talents === "string") {
        setSearchingSkills(false);
        setSearchResponse(
          "No Talent matches your search query, try another one."
        );
        setTalentsFound([]);
        console.log("No Talent matches your search query, try another one.");
        {
          const timer = setTimeout(() => {
            setSearchResponse("");
          }, 20000);

          return () => clearTimeout(timer);
        }
      }

      setTalentsFound(data.talents);

      setSearchingSkills(false);
      router.push("/search-talents");
      console.log(1);
      setSearchResponse(
        `Success! Some talents match your ${searchKeyword} query.`
      );

      console.log(2);
      console.log("Success! Some talents match your query.");

      // localStorage.setItem("flightArray", JSON.stringify(flights));
      // console.log(flights);

      {
        const timer = setTimeout(() => {
          setSearchResponse("");
        }, 40000);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      setSearchingSkills(false);
      setSearchResponse("An error occurred, try again.");
      console.log("An error occurred, try again.");
      console.log(error);
    }
  }

  return (
    <section
      ref={divHeightRef}
      id="section1"
      className="scroll-mt-10  px-5 md:px-10 lg:px-16  md:flex  "
      // md:bg-[url('/images/hero.png')]
      
    >
      <div className=" md:ml-8 890:w-[65%] ">
        <div className="">
          <div
            dangerouslySetInnerHTML={{ __html: heroTitle }}
            className="890:mt-5 font-semibold text-pry-color font-larken 890:text-[#07222E] md:leading-[3.5rem] md:text-5xl xl:text-[4rem] lg:text-[3rem] lg:leading-[3.5rem] xl:leading-[5rem] text-2xl sm:text-5xl sm:leading-[3.5rem] 340:text-[1.7rem] 340:leading-[2.2rem] "
          >
            {}
          </div>
        </div>
        <div className="mt-5 xl:leading-10 md:mt-3 890:w-[90%]  text-xl sm:text-2xl md:text-2xl xl:text-[2.2rem]  lg:mb-10">
          <div
            dangerouslySetInnerHTML={{ __html: heroSubtitle }}
            className="text-[#07222E]"
          >
            {}
          </div>
        </div>
        <form onSubmit={findTalents} className="flex  items-center mt-8 ">
          <div className="items-center flex border-2 border-pry-color border-opacity-80 pl-3 py-1 md:py-2  rounded-full  md:mr-7 mr-2 text-sm w-[80%] md:w-[60%]">
            {" "}
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/search.png"
              width={23}
              height={23}
           
            />{" "} 
            <input
              required
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
              type="text"
              className=" ml-4 outline-0 focus:!outline-0 focus:!outline-none border-0 text- w-full bg-transparent "
              placeholder="Search for Talents"
            />
          </div>{" "}
          <div    
           
          >
            {" "}
            <button
           
              type="submit"
              // onClick={() => {
              //   router.push("/search-talents");
              // }}
              className="text-white text-sm  rounded-full md:py-2 pt-[0.37rem] pb-[0.37rem] px-4 md:px-8 bg-pry-color "
            >
              Search
            </button>{" "}
          </div>
        </form>

        <div className=" text-[0.6rem] mt-3 flex items-center space-x-2">
          <p className="bg-mid-color   px-3 py-1 rounded-full  text-pry-color">
            UI/UX Designer
          </p>
          <p className="bg-mid-color  px-3 py-1 rounded-full  text-pry-color">
            JavaScript Developer
          </p>
        </div>
        <div
          className={`flex  px-6 mb-8 justify-center h-5 my-3 ${
            searchResponse.includes("Success")
              ? "text-green-600"
              : "text-red-600"
          } text-sm`}
        >
          <p className="sm:font-semibold text-lg sm:text-xl">{searchResponse}</p>
        </div>

        <div>
          <p className="font-semibold text-lg ">
            Need help finding the right talent for your project?
          </p>
          <div>
            <Image
              className="animate-bounce"
              alt="Curve arrow"
              width={70}
              height={62}
              src="/images/logos-and-icons/curve-arrow.png"
            />{" "}
          </div>
          <Link passHref href={`tel:${projectEngineerPhone}`}>
            <button className="flex  items-center  cursor-pointer ">
              <Image
                alt="Image alt text"
                src="/images/logos-and-icons/bot.png"
                width={45}
                height={55}
              />
              <div
                className="bg-mid-color h-[45px] flex items-center -ml-10 -mb-1 rounded-full ring-2 ring-mid-color ring-opacity-50
    "
              >
                <p className="pl-11 pr-2 text-xs text-pry-color  font-semibold ">
                  Talk to a Project Engineer{" "}
                </p>
              </div>{" "}
            </button>
          </Link>
        </div>
      </div> 

      <div className="w-1/2 z-[-1]  -mt-10  hidden 890:block absolute right-0">
        <Image  alt='Hero image' className='' width={1039} height={917} src={bgUrl}
        // style={{ backgroundImage: `url(${bgUrl})` }}
        />
      </div>
    </section>
  );
}

export default Section1;

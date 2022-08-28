import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import AllCtx from "../../util-functions/allCtx";
import BotIcon from "../BotIcon";

function Section1(props) {
  const router = useRouter();
  const { setSectionOneHeight, sectionOneHeight } = AllCtx();
  const { heroTitle, heroSubtitle, bgUrl } = props;

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
      setSearchingSkills(true);
      setSearchResponse("Searching...");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/search?s=${searchKeyword}`
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
        setSearchResponse("No Talent matches your search query, try another one.");
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
        }, 20000);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      setSearchingSkills(false);
      setSearchResponse(
        "An error occurred, try again."
      );
      console.log("An error occurred, try again.");
      console.log(error);
    }
  }

  return (
    <section
      id="section1"
      ref={divHeightRef}
      style={{ backgroundImage: `url(${bgUrl})` }}
      className="px-5 pb-8 mb-10    md:bg-cover md:bg-right md:bg-no-repeat md:ml-8"
    >
      <div className="md:w-[70%] mt-4">
        <h1 className="font-semibold text-pry-color font-larken md:text-[#07222E] md:leading-[5rem] md:text-6xl   text-[1.7rem] 400:text-2xl 400:leading-[2.2rem] ">
          {heroTitle}
        </h1>
      </div>
      <div className="mt-5 md:leading-10 md:mt-8 md:w-[65%]  text-xl md:text-3xl">
        <p className="text-[#07222E]">{heroSubtitle} </p>
      </div>
      <form onSubmit={findTalents} className="flex items-center mt-8 ">
        <div className="flex border-2 border-pry-color border-opacity-80 px-1 py-1 md:py-2  rounded-full  md:mr-7 mr-2 text-sm w-[80%] md:w-[40%]">
          {" "}
          <Image
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
            className=" ml-4 outline-0 text- w-full bg-transparent "
            placeholder="Search for Talents"
          />
        </div>{" "}
        <div>
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
        className={`flex px-6 mb-20 justify-center h-5 my-3 ${
          searchResponse.includes("Success") ? "text-green-600" : "text-red-600"
        } text-sm`}
      >
        <p>{searchResponse}</p>
      </div>

      <BotIcon />
    </section>
  );
}

export default Section1;

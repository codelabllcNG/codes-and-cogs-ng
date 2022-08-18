import React, { useState } from "react";
import Image from "next/image";
import {
  DESIGNERS,
  ENGINEERS,
  DEVELOPERS,
} from "../a-store/content-store/TALENTS";
import BotIcon from "../components/BotIcon";

import AllCtx from "../util-functions/allCtx";

import { useRouter } from "next/router";

function SearchResults(props) {
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

  //   const { talentsFound } = props;

  const router = useRouter();

  // const [selected, setSelected] = useState(true)
  const [category, setCategory] = useState("designers");

  async function findTalents(e) {
    e.preventDefault();
    if (!searchKeyword || searchKeyword.trim() === "") {
      setSearchResponse("Search keyword cannot be blank.");
      console.log("Search keyword cannot be blank.");
      return;
    }

    try {
        setSearchingSkills(true);
        setSearchResponse('Searching...')
      const response = await fetch(
        `http://dev.codesandcogs.com/server/api/codesandcogs/v1/search?s=${searchKeyword}`
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
        
      if (typeof data.talents === "string") {
        setSearchingSkills(false);
          setSearchResponse(data.talents);
          setTalentsFound([])
        console.log(data.talents);
        return;
      }


      if (data.status !== "success") {
        setSearchingSkills(false);
        setSearchResponse("Something went wrong, please try again!");
        console.log("Something went wrong, please try again!");
        return;
      }

      setSearchResponse(`Success! Some talents match your ${searchKeyword.toUpperCase()} query.`);
      console.log("Success! Some talents match your query.");

      setSearchingSkills(false);
      setTalentsFound(data.talents);
      // localStorage.setItem("flightArray", JSON.stringify(flights));
      // console.log(flights);
      router.push("/search-results");
    } catch (error) {
      setSearchingSkills(false);
      setSearchResponse(
        "Something went wrong! Check internet connection and try again."
      );
      console.log("Something went wrong, try again.");
    }
  }

  return (
    <div className="md:px-10 px-5 mb-8">
      <div>
        <div className="flex  justify-center md:mb-2">
          <h2 className="font-bold 400:text-xl  md:text-3xl">Search Results</h2>
        </div>
        <div className="flex justify-center  ">
          <div className=" w-[75px] md:w-[150px] mb-5">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>

        {/* <div className="flex justify-center">
          <p className="text-sm">Your search result for</p>
        </div> */}
      </div>

      <div>
        <div className="flex justify-center  mt-1">
          <form
            onSubmit={findTalents}
            className="flex items-center  w-[80%] md:w-[60%] "
          >
            <div className="flex border border-pry-color border-opacity-80 px-1 py-1 md:py-2  rounded-full   mr-2 text-sm w-[80%]">
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
                className="outline-0 text-center w-full bg-transparent "
                placeholder="Search for Talents"
              />
            </div>{" "}
            <div>
              {" "}
              <button
                onClick={() => {
                  router.push("/search-results");
                }}
                className="text-white text-sm  rounded-full md:py-2 pt-[0.37rem] pb-[0.37rem] px-4 md:px-8 bg-pry-color "
              >
                Search
              </button>{" "}
            </div>
                  </form>
          
              </div>
              
              <div className={`flex px-5 justify-center h-5 my-3 mb-7 ${searchResponse.includes('Success') ? 'text-green-600 ' : 'text-red-600 '} text-sm`} ><p>{ searchResponse }</p></div>

        <div className="grid gap-2 560:gap-4 grid-cols-2 md:grid-cols-3 mt-5 text-xs 560:text-base">
          {talentsFound.map((talent) => (
            <div
              key={talent.id}
              onClick={() => { 
                router.push(`/talents/${talent.id}`);
              }}
              className="bg-mid-color hover:bg-[#ECF1FA] hover:scale-105 duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
            >
              <div className="w-10 560:w-14">
                <Image height={75} width={64} src={talent.icon} alt="" />
              </div>{" "}
              <div>
                {" "}
                <p className="font-semibold ">{talent.title}</p>{" "}
                <p>{talent.name}</p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://dev.codesandcogs.com/server/api/codesandcogs/v1/aboutpage"
  );
  const data = await response.json();

  const talentsFound = data.designers;

  return {
    props: {
      talentsFound,
    },
    revalidate: 1,
  };
}

export default SearchResults;

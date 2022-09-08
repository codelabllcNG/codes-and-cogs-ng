import React, { useState } from "react";
import Image from "next/image";
import BotIcon from "../components/BotIcon";

import AllCtx from "../util-functions/allCtx";

import { useRouter } from "next/router";

function SearchTalents(props) {
  const {
    searchKeyword,
    setSearchKeyword,
    searchResponse,
    setSearchResponse,
    searchingSkills,
    setSearchingSkills,
    talentsFound,
    setTalentsFound,
    devUrl,
    prodUrl,
  } = AllCtx();

  const { designersArray, developersArray, engineersArray } = props;

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
      setSearchResponse("Searching...");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/search?s=${searchKeyword}`
      );

      const data = await response.json();

      // return

      if (!response.ok) {
        setSearchingSkills(false);
        setSearchResponse("Something went wrong, please search again!");
        console.log("Something went wrong, please search again!");
        return;
      }

      if (typeof data.talents === "string") {
        setSearchingSkills(false);
        setSearchResponse(
          "No Talent matches your search query, try another one, or browse through our collections of talents."
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

      if (data.status !== "success") {
        setSearchingSkills(false);
        setSearchResponse("Something went wrong, please try again!");
        console.log("Something went wrong, please try again!");
        return;
      }

      setSearchResponse(
        `Success! Some talents match your ${searchKeyword.toUpperCase()} query.`
      );
      console.log("Success! Some talents match your query.");

      setSearchingSkills(false);
      setTalentsFound(data.talents);
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
      setSearchResponse("An error occurred, try again.");
      console.log("An error occurred, try again.");
    }
  }

  return (
    <div className="md:px-10 px-5 mb-8">
      <div>
        <div className="flex  justify-center md:mb-2">
          <h2 className="font-bold header">Search Talents</h2>
        </div>
        <div className="flex justify-center  ">
          <div className=" w-[75px] md:w-[150px] mb-5">
            <Image alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>

        <div className="flex justify-center  mb-2">
          <p className="400:text-2xl lg:text-3xl text-center font-semibold text-pry-color">
            Build game-changing projects with the right talents.
          </p>
        
        </div>

        <div className="flex md:px-20 400:text-lg lg:text-2xl justify-center  mb-6">
        <p className='leading-8'>With the right team, you can build anything. Get access to our hub of engineering specialists who have been rigorously vetted, tested, and trained.</p>
        </div>
      </div>

      <div>
        <div className="flex justify-center  mt-1">
          <form
            onSubmit={findTalents}
            className="flex items-center  w-[80%] md:w-[60%] "
          >
            <div className="flex border border-pry-color border-opacity-80 px-1 py-1 md:py-2  rounded-full   mr-2 text-sm w-[80%]">
              {" "}
              <Image alt="Image alt text"
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
                className="outline-0 focus:outline-0 border-0  text-center w-full bg-transparent "
                placeholder="Search for Talents"
              />
            </div>{" "}
            <div>
              {" "}
              <button
                // onClick={() => {
                //   router.push("/search-talents");
                // }}
                className="text-white text-sm  rounded-full md:py-2 pt-[0.37rem] pb-[0.37rem] px-4 md:px-8 bg-pry-color "
              >
                Search
              </button>{" "}
            </div>
          </form>
        </div>

        <div
          className={`flex px-5 justify-center h-5 my-3 mb-7 ${
            searchResponse.includes("Success")
              ? "text-green-600 "
              : "text-red-600 "
          } text-sm`}
        >
          <p>{searchResponse}</p>
        </div>

        {talentsFound.length > 0 ? (
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
                  <Image alt="Image alt text"
                    height={75}
                    width={64}
                    src={talent.icon || "/images/default-dp.png"}
                   
                  />
                </div>{" "}
                <div>
                  {" "}
                  <p className="font-semibold ">{talent.title}</p>{" "}
                  <p>{talent.name}</p>{" "}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-center bg-transparent text-pry-color font-semibold text-xs 400:text-sm 560:text-base  ">
              <div
                onClick={() => {
                  setCategory("designers");
                }}
                className={`${
                  category === "designers"
                    ? "bg-pry-color text-white"
                    : "bg-mid-color"
                } duration-300 w-[32%] cursor-pointer py-1 text-center  rounded-l-full`}
              >
                <p>DESIGNERS</p>
              </div>
              <div
                onClick={() => {
                  setCategory("engineers");
                }}
                className={`${
                  category === "engineers"
                    ? "bg-pry-color text-white"
                    : "bg-mid-color"
                } duration-300 w-[32%] cursor-pointer py-1 text-center`}
              >
                <p>ENGINEERS</p>
              </div>
              <div
                onClick={() => {
                  setCategory("developers");
                }}
                className={`${
                  category === "developers"
                    ? "bg-pry-color text-white"
                    : "bg-mid-color"
                } duration-300 w-[32%] cursor-pointer py-1 text-center  rounded-r-full`}
              >
                <p>DEVELOPERS</p>
              </div>
            </div>

            {category === "designers" && (
              <div className="grid gap-2 560:gap-4 grid-cols-2 md:grid-cols-3 mt-10 text-xs 400:text-sm sm:text-base">
                {designersArray.map((designer) => (
                  <div
                    key={designer.id}
                    onClick={() => {
                      router.push(`/talents/${designer.id}`);
                    }}
                    className="bg-mid-color hover:bg-[#ECF1FA] hover:scale-105 duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                  >
                    <div className="w-10 560:w-14">
                      <Image alt="Image alt text"
                        height={75}
                        width={64}
                        src={designer.icon || "/images/default-dp.png"}
                     
                      />
                    </div>{" "}
                    <div>
                      {" "}
                      <p className="font-semibold ">{designer.title}</p>{" "}
                      <p>{designer.name}</p>{" "}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {category === "engineers" && (
              <div className="grid gap-2 560:gap-4 grid-cols-2 md:grid-cols-3 mt-10 text-xs 400:text-sm sm:text-base">
                {engineersArray.map((engineer) => (
                  <div
                    key={engineer.id}
                    onClick={() => {
                      router.push(`/talents/${engineer.id}`);
                    }}
                    className="bg-mid-color hover:bg-[#ECF1FA] duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                  >
                    <div className="w-10 560:w-14">
                      <Image alt="Image alt text"
                        height={75}
                        width={64}
                        src={engineer.icon || "/images/default-dp.png"}
                      
                      />
                    </div>{" "}
                    <div>
                      {" "}
                      <p className="font-semibold ">{engineer.title}</p>{" "}
                      <p>{engineer.name}</p>{" "}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {category === "developers" && (
              <div className="grid gap-2 560:gap-4 grid-cols-2 md:grid-cols-3 mt-10 text-xs 400:text-sm sm:text-base">
                {developersArray.map((developer) => (
                  <div
                    key={developer.id}
                    onClick={() => {
                      router.push(`/talents/${developer.id}`);
                    }}
                    className="bg-mid-color hover:bg-[#ECF1FA] duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                  >
                    <div className="w-10 560:w-14 ">
                      <Image alt="Image alt text"
                        height={75}
                        width={64}
                        src={developer.icon || "/images/default-dp.png"}
                       
                      />
                    </div>{" "}
                    <div>
                      {" "}
                      <p className="font-semibold ">{developer.title}</p>{" "}
                      <p>{developer.name}</p>{" "}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/aboutpage`
  );
  const data = await response.json();

  const designersArray = data.designers;
  const developersArray = data.developers;
  const engineersArray = data.engineers;

  return {
    props: {
      designersArray,
      developersArray,
      engineersArray,
    },
    revalidate: 300,
  };
}

export default SearchTalents;

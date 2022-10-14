import React, { useEffect, useState } from "react";
import { Agent } from "https";

import Image from "next/image";
import AllCtx from "../../util-functions/allCtx";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Head from "next/head";
import HeaderBanner from "../../components/HeaderBanner";

function ToolID(props) {
  const router = useRouter();

  const [response, setResponse] = useState("");
  const [searchingTalents, setSearchingTalents] = useState(false);
  const [talentsFound, setTalentsFound] = useState([]);

  const [category, setCategory] = useState("designers");

  const {
    skillID,
    selectedSkill,
    designersArray,
    developersArray,
    engineersArray,
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Firing..");
        setSearchingTalents(true);
        setResponse("Loading Talents that match this skill...");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/search?s=${selectedSkill.name}`
        );

        const data = await response.json();

        if (!response.ok) {
          setSearchingTalents(false);
          setResponse(
            "Something went wrong, could not load Talents, please refresh page"
          );
          console.log(
            "Something went wrong, could not load Talents, please refresh page."
          );
          return;
        }

        if (typeof data.talents === "string") {
          setSearchingTalents(false);
          setResponse(
            "Talents that match this skill are currently on other projects, you can browse through our available talents below."
          );
          setTalentsFound([]);
          console.log(data.talents);
          return;
        }

        if (data.status !== "success") {
          setSearchingTalents(false);
          setResponse(
            "Something went wrong, could not load Talents for this skill, please refresh page."
          );
          console.log(
            "Something went wrong, could not load Talents, please refresh page."
          );
          return;
        }

        if (data.talents.length === 0) {
          setResponse(
            "Talents that match this skill are currently on other projects, you can browse through our available talents below."
          );
        }

        // setResponse(
        //   `Success! Some talents match your ${skillID.toUpperCase()} query.`
        // );
        console.log("Success! Some talents match your query.");

        setSearchingTalents(false);
        setTalentsFound(data.talents);
        console.log(data.talents);
      } catch (error) {
        setSearchingTalents(false);
        setResponse("An error occurred while loading talents, reload.");
        console.log("An error occurred while loading talents, reload.");
      }
    };

    fetchData();
  }, []);

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className="px-5 md:px-10 lg:px-16">
      <Head>
        <title>About {selectedSkill.name} on Codes and Cogs</title>
        <meta name="description" content={selectedSkill.name} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/skills/${selectedSkill.id}`}
        />
      </Head>

      {/* <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold header">{selectedSkill.name}</h2>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className=" w-[75px] md:w-[150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div> */}

      <HeaderBanner title={selectedSkill.name} />

      <div className="mt-10  justify-between items-center ">
        <div className=" flex justify-center">
          {" "}
          {selectedSkill.videoUrl.includes(".mp4") ? (
            <video
              width="400"
              height="305"
              controls
              // autoPlay
              loop
              // muted
              className="rounded-lg mb-2 "
            >
              <source src={selectedSkill.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              alt="Skill image"
              src={selectedSkill.videoUrl}
              width="500"
              height="300"
              className="rounded-lg"
            />
          )}
        </div>

        <div className=" prose max-w-none prose-h1:text-3xl prose-h1:font-bold text-justify lg:leading-8 mb-5 900:mb-0 text-pry-color">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: selectedSkill.toolInfo }}
          >
            {}
          </div>
        </div>
      </div>

      <div className="mt-10 ">
        {searchingTalents ? (
          <div className="flex justify-center text-lg font-semibold">
            <p>{response}</p>
          </div>
        ) : talentsFound.length < 1 ? (
          <div className="flex  justify-center text-lg font-semibold text-red-600">
            <div className="w-full">
              <p className="mb-5">{response}</p>
              <div className="">
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
                  <div className="grid gap-2 560:gap-4 grid-cols-2 md:grid-cols-3 mt-10 text-xs 400:text-sm sm:text-base ">
                    {designersArray.map((designer) => (
                      <div
                        key={designer.id}
                        onClick={() => {
                          window.fbq("trackCustom", "Talent Profile View", {
                            viewedTalent: `${designer.name}`,
                            // page: "Skills Page",
                          });
                          router.push(`/talents/${designer.id}`);
                        }}
                        className="bg-mid-color hover:bg-[#ECF1FA] hover:scale-105 duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                      >
                        <div className="w-10 560:w-14">
                          <Image
                            alt="Image alt text"
                            height={75}
                            width={64}
                            src={designer.icon || "/images/default-dp.svg"}
                          />
                        </div>{" "}
                        <div>
                          {" "}
                          <p className="font-semibold ">
                            {designer.title}
                          </p>{" "}
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
                          window.fbq("trackCustom", "Talent Profile View", {
                            viewedTalent: `${engineer.name}`,
                            // page: "Skills Page",
                          });
                          router.push(`/talents/${engineer.id}`);
                        }}
                        className="bg-mid-color hover:bg-[#ECF1FA] hover:scale-105 duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                      >
                        <div className="w-10 560:w-14">
                          <Image
                            alt="Image alt text"
                            height={75}
                            width={64}
                            src={engineer.icon || "/images/default-dp.svg"}
                          />
                        </div>{" "}
                        <div>
                          {" "}
                          <p className="font-semibold ">
                            {engineer.title}
                          </p>{" "}
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
                          window.fbq("trackCustom", "Talent Profile View", {
                            viewedTalent: `${developer.name}`,
                            // page: "Skills Page",
                          });
                          router.push(`/talents/${developer.id}`);
                        }}
                        className="bg-mid-color hover:bg-[#ECF1FA] hover:scale-105 duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                      >
                        <div className="w-10 560:w-14 ">
                          <Image
                            alt="Image alt text"
                            height={75}
                            width={64}
                            src={developer.icon || "/images/default-dp.svg"}
                          />
                        </div>{" "}
                        <div>
                          {" "}
                          <p className="font-semibold ">
                            {developer.title}
                          </p>{" "}
                          <p>{developer.name}</p>{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex  justify-center md:mb-2">
              <h2 className="font-bold text-xs 400:text-xl  md:text-3xl">
                Talents available for {selectedSkill.name}
              </h2>
            </div>
            <div className="flex justify-center mb-4">
              <div className=" w-[75px] md:w-[150px]">
                <Image
                  alt="Image alt text"
                  src="/images/logos-and-icons/red-underline.png"
                  width={150}
                  height={20}
                />
              </div>
            </div>

            <div className="grid gap-2 560:gap-4 grid-cols-2 md:grid-cols-3 mt-5 text-xs 560:text-base">
              {talentsFound.map((talent) => (
                <div
                  key={talent.id}
                  onClick={() => {
                    window.fbq("trackCustom", "Talent Profile View", {
                      viewedTalent: `${talent.name}`,
                      // page: "Skills Page",
                    });
                    router.push(`/talents/${talent.id}`);
                  }}
                  className="bg-mid-color hover:bg-[#ECF1FA] hover:scale-105 duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                >
                  <div className="w-10 560:w-14">
                    <Image
                      alt="Image alt text"
                      height={75}
                      width={64}
                      src={talent.icon || "/images/default-dp.svg"}
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
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const skillID = context.params.skillID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/homepage`,
    new Agent({ keepAlive: true })
  );
  const data = await response.json();
  const skillsArray = data.skills;

  function skillFinder() {
    return skillsArray.find((skill) => skill.id === skillID);
  }

  const selectedSkill = skillFinder(skillID);

  if (!selectedSkill) {
    return {
      notFound: true,
    };
  }

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/aboutpage`
  );
  const data2 = await response2.json();

  const designersArray = data2.designers;
  const developersArray = data2.developers;
  const engineersArray = data2.engineers;

  return {
    props: {
      skillID,
      skillsArray,
      selectedSkill,

      designersArray,
      developersArray,
      engineersArray,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/homepage`,
    new Agent({ keepAlive: true })
  );
  const data = await response.json();

  const skillsArray = data.skills;

  const skillPaths = skillsArray.map((skill) => skill.id);

  return {
    paths: skillPaths.map((skillID) => ({
      params: { skillID: skillID },
    })),
    fallback: true,
  };
}

export default ToolID;

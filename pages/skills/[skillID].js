import React, { useEffect, useState } from "react";
import Image from "next/image";
import AllCtx from "../../util-functions/allCtx";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Head from "next/head";

function ToolID(props) {
  const router = useRouter();

  const [response, setResponse] = useState("");
  const [searchingTalents, setSearchingTalents] = useState(false);
  const [talentsFound, setTalentsFound] = useState([]);

  const { skillID, selectedSkill } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Firing..");
        setSearchingTalents(true);
        setResponse("Loading Talents that match this skill...");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/search?s=${selectedSkill.name}`
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
          setResponse("No Talent currently matches this tool.");
          setTalentsFound([]);
          console.log("No Talent currently matches this tool.");
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

        // setResponse(
        //   `Success! Some talents match your ${skillID.toUpperCase()} query.`
        // );
        console.log("Success! Some talents match your query.");

        setSearchingTalents(false);
        setTalentsFound(data.talents);
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
    <div className="px-5 md:px-10">
      <Head>
        <title>About {selectedSkill.name} on Codes and Cogs</title>
        <meta name="description" content={selectedSkill.name} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/skills/${selectedSkill.id}`}
        />
      </Head>

      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold text-3xl">{selectedSkill.name}</h2>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className=" 900:flex justify-between items-center ">
        <div className="900:w-[55%] prose max-w-none prose-h1:text-3xl prose-h1:font-bold text-justify lg:leading-8 mb-5 900:mb-0 text-pry-color">
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: selectedSkill.toolInfo }}
          >
            {}
          </p>
        </div>
        <div className="900:w-[40%] flex justify-center">
          {" "}
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
        </div>
      </div>

      <div className="mt-10">
        {searchingTalents ? (
          <div className="flex justify-center text-lg font-semibold">
            <p>{response}</p>
          </div>
        ) : talentsFound.length < 1 ? (
          <div className="flex justify-center text-lg font-semibold text-red-600">
            <p>{response}</p>
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
        )}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const skillID = context.params.skillID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/homepage`
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

  return {
    props: {
      skillID,
      skillsArray,
      selectedSkill,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/homepage`
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

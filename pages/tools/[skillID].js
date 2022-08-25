import React from "react";
import Image from "next/image";
import AllCtx from "../../util-functions/allCtx";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Head from "next/head";

function ToolID(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const { skillID, selectedSkill } = props;

  return (
    <div className="px-5 md:px-10">


<Head>
        <title>About {selectedSkill.name} on Codes and Cogs</title>
        <meta name="description" content={selectedSkill.name} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/tools/${selectedSkill.id}`}
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

      <div className="900:flex justify-between items-center ">
        <div className="900:w-[55%] text-justify lg:leading-8 mb-5 900:mb-0 text-pry-color">
          <p>{selectedSkill.toolInfo}</p>
        </div>
        <div className="900:w-[40%] flex justify-center">
          {" "}
          <video
            // width="400"
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
    </div>
  );
}

export async function getStaticProps(context) {

  const skillID = context.params.skillID;
  const response = await fetch(`${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/homepage`);
  const data = await response.json();
  console.log(data.status);

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
    revalidate: 600,
  };
}

export async function getStaticPaths() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/homepage`);
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

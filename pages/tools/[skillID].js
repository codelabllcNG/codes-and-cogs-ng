import React from "react";
import { selectedTool, TOOLS } from "../../a-store/content-store/TOOLS";
import Image from "next/image";

function ToolID(props) {
  const { skillID, selectedSkill } = props;

  return (
    <div className="px-5 md:px-10">
      <div className="flex  md:justify-center md:mb-2">
        <h2 className="font-bold text-3xl">{selectedSkill.name}</h2>
      </div>
      <div className="flex md:justify-center mb-10 ">
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
          <p>
      {selectedSkill.toolInfo}
          </p>
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
  const response = await fetch(
    "http://dev.codesandcogs.com/server/api/codesandcogs/v1/homepage"
  );
  const data = await response.json();
  console.log(data.status);

  const skillsArray = data.skills;

  function skillFinder() {
    return skillsArray.find((skill) => skill.id === skillID);
  }

  const selectedSkill = skillFinder(skillID);

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
  const response = await fetch(
    "http://dev.codesandcogs.com/server/api/codesandcogs/v1/homepage"
  );
  const data = await response.json();

  const skillsArray = data.skills;

  const skillPaths = skillsArray.map((skill) => skill.id);

  return {
    paths: skillPaths.map((skillID) => ({
      params: { skillID: skillID },
    })),
    fallback: false,
  };
}

export default ToolID;

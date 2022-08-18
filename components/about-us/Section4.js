import React, { useState } from "react";
import Image from "next/image";
import {
  DESIGNERS,
  ENGINEERS,
  DEVELOPERS,
} from "../../a-store/content-store/TALENTS";
import BotIcon from "../BotIcon";

import { useRouter } from "next/router";

function Section4(props) {
  const { ourTalentTitle, designersArray, developersArray, engineersArray } =
    props;

  const router = useRouter();

  // const [selected, setSelected] = useState(true)
  const [category, setCategory] = useState("designers");

  //   function selectCategory(category) {
  //   setCategory(category)
  // }

  return (
    <div className="md:px-10 px-5 mb-8">
      <div className="flex  md:justify-center md:mb-2">
        <h2 className="font-bold text-xs 400:text-xl  md:text-3xl">
        {ourTalentTitle}
        </h2>
      </div>
      <div className="flex md:justify-center mb-3 ">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

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
                  <Image height={75} width={64} src={designer.icon} alt="" />
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
                  <Image height={75} width={64} src={engineer.icon} alt="" />
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
                  <Image height={75} width={64} src={developer.icon} alt="" />
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

      {/* <BotIcon />  */}
    </div>
  );
}

export default Section4;

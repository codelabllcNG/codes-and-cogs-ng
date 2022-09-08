import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { TOOLS } from "../../a-store/content-store/TOOLS";
import AllCtx from "../../util-functions/allCtx";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import BotIcon from "../BotIcon";
import { useRouter } from "next/router";

function Section2(props) {
  const router = useRouter();

  // const theSelectedTool = selectedTool()
const { skillsArray,
  skillsTitle,
  skillsSubtitle,} = props
  const { setSectionTwoHeight, sectionOneHeight, sectionTwoHeight } = AllCtx();

  const divHeightRef = useRef();
  const scrollRef = useRef();
  const largeScreenScrollRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (divHeightRef.current) {
        setSectionTwoHeight(divHeightRef.current.clientHeight);
      }
    });
  }, []);

  // console.log('Section two', sectionTwoHeight);

  function scroll(value) {
    scrollRef.current.scrollLeft += value;
  }

  function largeScreenScroll(value) {
    largeScreenScrollRef.current.scrollLeft += value;
  }

  return (
    <div className="md:bg-[url('/images/sections-watermark.png')] bg-cover bg-right-bottom  bg-no-repeat px-5 md:px-10 lg:p-16">
       <section
      id="section2"
      ref={divHeightRef}
      className="  md:ml-8 "
    >
      <div>
        <div className="flex text-center justify-center md:mb-2">
          <h2 className="font-bold header  font-larken">
           {skillsTitle}
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>
      {/* <div className="md:flex md:justify-center mb-8">
        <p>{skillsSubtitle}</p> 
      </div> */}

      <div className="1000:flex justify-between hidden mb-12 ">
        {/* First Column  */}
        <div className="flex items-center">
          {skillsArray.map((tool) => (
            <div
              key={tool.id}
              onClick={() => {
                router.push(`/skills/${tool.id}`);
              }}
              className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
            >
              <div className="flex justify-center">
                {" "}
                <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
              </div>
              <div className="flex justify-center">
                <p className="text-xs font-semibold">{tool.name}</p>
              </div>
            </div>
          )).filter((tool, i) => i === 0)}
        </div>

        {/* Second Column  */}
        <div className="flex items-center">
          {skillsArray.map((tool) => (
            <div
              key={tool.id}
              onClick={() => {
                router.push(`/skills/${tool.id}`);
              }}
              className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
            >
              <div className="flex justify-center">
                {" "}
                <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
              </div>
              <div className="flex justify-center">
                <p className="text-xs font-semibold">{tool.name}</p>
              </div>
            </div>
          )).filter((tool, i) => i === 1)}
        </div>

        {/* Third Column  */}
        <div className="flex items-center">
          <div className="space-y-10">
            {skillsArray.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  router.push(`/skills/${tool.id}`);
                }}
                className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
              >
                <div className="flex justify-center">
                  {" "}
                  <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
                </div>
                <div className="flex justify-center">
                  <p className="text-xs font-semibold">{tool.name}</p>
                </div>
              </div>
            )).filter((tool, i) => i > 1 && i < 4)}
          </div>
        </div>

        {/* Fourth Column  */}
        <div className="flex items-center">
          <div className="space-y-10">
            {skillsArray.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  router.push(`/skills/${tool.id}`);
                }}
                className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
              >
                <div className="flex justify-center">
                  {" "}
                  <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
                </div>
                <div className="flex justify-center">
                  <p className="text-xs font-semibold text-center">{tool.name}</p>
                </div>
              </div>
            )).filter((tool, i) => i > 3 && i < 7)}
          </div>
        </div>

        {/* Fifth Column  */}
        <div className="flex items-center">
          <div className="space-y-10">
            {skillsArray.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  router.push(`/skills/${tool.id}`);
                }}
                className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
              >
                <div className="flex justify-center">
                  {" "}
                  <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
                </div>
                <div className="flex justify-center">
                  <p className="text-xs font-semibold">{tool.name}</p>
                </div>
              </div>
            )).filter((tool, i) => i > 6 && i < 12)}
          </div>
        </div>

        {/* Sixth Column  */}
        <div className="flex items-center">
          <div className="space-y-10">
            {skillsArray.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  router.push(`/skills/${tool.id}`);
                }}
                className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
              >
                <div className="flex justify-center">
                  {" "}
                  <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
                </div>
                <div className="flex justify-center">
                  <p className="text-xs font-semibold text-center">{tool.name}</p>
                </div>
              </div>
            )).filter((tool, i) => i > 11 && i < 15)}
          </div>
        </div>

        {/* Seventh Column  */}
        <div className="flex items-center">
          <div className="space-y-10">
            {skillsArray.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  router.push(`/skills/${tool.id}`);
                }}
                className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
              >
                <div className="flex justify-center">
                  {" "}
                  <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
                </div>
                <div className="flex justify-center">
                  <p className="text-xs font-semibold text-center">{tool.name}</p>
                </div>
              </div>
            )).filter((tool, i) => i > 14 && i < 17)}
          </div>
        </div>

        {/* Eighth Column  */}
        <div className="flex items-center">
          {skillsArray.map((tool) => (
            <div
              key={tool.id}
              onClick={() => {
                router.push(`/skills/${tool.id}`);
              }}
              className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
            >
              <div className="flex justify-center">
                {" "}
                <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
              </div>
              <div className="flex justify-center">
                <p className="text-xs font-semibold">{tool.name}</p>
              </div>
            </div>
          )).filter((tool, i) => i === 17)}
        </div>

        {/* Ninth Column  */}
        <div className="flex items-center">
          {skillsArray.map((tool) => (
            <div
              key={tool.id}
              onClick={() => {
                router.push(`/skills/${tool.id}`);
              }}
              className="bg-mid-color cursor-pointer hover:bg-gray-200  px-2 py-1 w-[5rem] text-center pt-1 rounded-lg"
            >
              <div className="flex justify-center">
                {" "}
                <Image alt="Image alt text" src={tool.imageUrl || '/images/default-skill.png'} width={35} height={31} />{" "}
              </div>
              <div className="flex justify-center">
                <p className="text-xs font-semibold">{tool.name}</p>
              </div>
            </div>
          )).filter((tool, i) => i === 18)}
        </div>
      </div>

      {/* THE EXTRA ICONS FOR LARGE SCREEN   */}
      {skillsArray.length > 19 && (
        <div className="1000:flex hidden mb-0 -mt-10 justify-between  ">
          <div className="flex cursor-pointer items-center ">
            {" "}
            <FaAngleLeft
              className="opacity-50 hover:opacity-100 text-pry-color"
              onClick={() => {
                largeScreenScroll(-200);
                console.log(";;;DLD");
              }}
              size={20}
            />
          </div>
          <div
            ref={largeScreenScrollRef}
            className="flex scroll-smooth   overflow-x-scroll justify-between items-center scrollbar-hide "
          >
            {skillsArray.map((icon) => (
              <div
                onClick={() => {
                  router.push(`/skills/${icon.id}`);
                }}
                className="mx-3 hover:bg-semi-sec-color cursor-pointer relative justify-between p-3 rounded-md     "
                key={icon.id}
              >
                <div className="flex justify-center w-20 select-none ">
                  {" "}
                  <Image alt="Image alt text" src={icon.imageUrl || '/images/default-skill.png'} layout=""  width='35' height='31' />
                </div>
                <div className="flex justify-center select-none">
                  <p className="text-xs text-center ">{icon.name}</p>
                </div>
              </div>
            )).filter((tool, i) => i > 18 )}
          </div>
          <div className="flex cursor-pointer items-center bg-transparent ">
            {" "}
            <FaAngleRight
              className="opacity-50 hover:opacity-100 text-pry-color"
              onClick={() => {
                largeScreenScroll(200);
              }}
              size={20}
            />
          </div>
        </div>
      )}

      {/* SMALLER SCREEN SCREEN skillsArray  */}
      <div className="flex 1000:hidden mb-10 ">
        <div className="flex cursor-pointer items-center">
          {" "}
          <FaAngleLeft
            className="opacity-50 hover:opacity-100 text-pry-color"
            onClick={() => {
              scroll(-200);
            }}
            size={20}
          />
        </div>
        <div
          ref={scrollRef}
          className="flex scroll-smooth   overflow-x-scroll justify-between items-center scrollbar-hide "
        >
          {skillsArray.map((icon) => (
            <div
              onClick={() => {
                router.push(`/skills/${icon.id}`);
              }}
              className="mx-3 hover:bg-semi-sec-color cursor-pointer relative justify-between p-3 rounded-md     "
              key={icon.id}
            >
              <div className="flex justify-center w-20 select-none ">
                {" "}
                <Image alt="Image alt text" src={icon.imageUrl || '/images/default-skill.png'} layout="" width='35' height='31' />
              </div>
              <div className="flex justify-center select-none">
                <p className="text-xs text-center ">{icon.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex cursor-pointer items-center bg-transparent ">
          {" "}
          <FaAngleRight
            className="opacity-50 hover:opacity-100 text-pry-color"
            onClick={() => {
              scroll(200);
            }}
            size={20}
          />
        </div>
      </div>

      <BotIcon />
    </section>
   </div>
  );
}

export default Section2;

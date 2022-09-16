import React, { useEffect, useRef, useState } from "react";
import AllCtx from "../../util-functions/allCtx";
import Image from "next/image";
import {
  FEASIBILITY,
  selectedFeasibility,
} from "../../a-store/content-store/FEASIBILITY";
import BotIcon from "../BotIcon";
import { useRouter } from "next/router";

function Section4(props) {
  const router = useRouter();

  const { setSectionFourHeight, sectionFourHeight } = AllCtx();

  const { feasibilityTitle, feasibilitySubtitle, feasibilityDescription, feasibilityArray } = props;

  const [oneIsOpened, setOneIsOpened] = useState(true);
  const [twoIsOpened, setTwoIsOpened] = useState(false);
  const [threeIsOpened, setThreeIsOpened] = useState(false);
  const [fourIsOpened, setFourIsOpened] = useState(false);
  const [fiveIsOpened, setFiveIsOpened] = useState(false);
  const [selectedContent, setSelectedContent] = useState('local-environments-setup');

  const divHeightRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (divHeightRef.current) {
        setSectionFourHeight(divHeightRef.current.clientHeight);
      }
    });
  }, []);

  function selectContent(contentID) {
    let chosenContent = feasibilityArray.find((content) => content.id === contentID);
    setSelectedContent(chosenContent.id);
  }
 
  return (
    <div className="mt-20 lg:bg-[url('/images/sections-watermark.png')] bg-contain bg-right-bottom  bg-no-repeat px-5 md:px-10 lg:px-16">
        <section
      id="section4"
      ref={divHeightRef}
      className=" md:ml-8 "
    >
      <div>
        <div className="flex text-center justify-center md:mb-2">
          <h2 className="font-bold header font-larken  ">
          {feasibilityTitle}
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

      <div className="dangerous-html md:flex !text-xl md:!justify-center  mb-8">
        <div dangerouslySetInnerHTML={{__html: feasibilityDescription}}>
{}
        </div>
      </div>

      <div className="dangerous-html md:flex justify-center mb-4">
        <div dangerouslySetInnerHTML={{__html: feasibilitySubtitle}} className="font-semibold text-lg 400:text-xl font-larken">
       {}
        </div>
      </div>

      <div className="mb-10">
        {feasibilityArray.map((content, i) => (
          <div className="" key={content.id}>
            <hr className="border-[1px] border-[#404033]" />
            <div className="flex py-2 items-center  justify-between mb-4">
              <div className="flex mr-1">
                <Image alt="Image alt text"
                  height='40'
                  width='40'
                  className="mr-3 w-[40px] h-[40px] "
                  src={content.iconUrl}
            
                />{" "}
                <div className="ml-1 flex items-center ">
                  {" "}
                  <p className="font-semibold text-pry-color text-sm 400:text-base md:text-xl">
                    {content.title}
                  </p>
                </div>{" "}
              </div>{" "}
              <div className="flex">
                <img alt="Image alt text"
                height='40'
                 width='40'
                  onClick={() => {
                    selectContent(content.id);
                  }}
                  className={`${
                    selectedContent !== content.id ? "" : "hidden"
                  } ml-2 w-[40px] h-[40px] cursor-pointer`}
                  src="/images/logos-and-icons/plus.svg"
               
                />{" "}
                <img alt="Image alt text"
                height='40'
                 width='40'
                  onClick={() => {
                    setSelectedContent(0);
                  }}
                  className={`${
                    selectedContent === content.id ? "" : "hidden"
                  } w-[40px] h-[40px] cursor-pointer`}
                  src="/images/logos-and-icons/minus.svg"
                 
                />
              </div>
            </div>
            <div
              className={`${
                selectedContent === content.id
                  ? "block opacity-100"
                  : "opacity-0 hidden"
              } duration-500 text-pry-color -mt-5 text-sm pl-14 pr-9 mb-2 text-justify 400:text-base md:text-lg`}
            >
              <div dangerouslySetInnerHTML={{ __html: content.excerpt }}>
                {}
              </div>{" "}
              <button
                onClick={() => {
                  router.push(`/feasibility/${content.id}`);
                }}
                className="mt-3 font-semibold text-sm hover:to-blue-400 "
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <BotIcon />
    </section>
  </div>
  );
}

export default Section4;

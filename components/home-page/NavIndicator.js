import React, { useEffect, useState } from "react";
import AllCtx from "../../util-functions/allCtx";
import { useRouter } from 'next/router'


function NavIndicator() {
let router = useRouter()

  const {
    setSection,
    isSectionOne,
    isSectionTwo,
    isSectionThree,
    isSectionFour,
    isSectionFive,
    isSectionSix,

    sectionOneHeight,
    sectionTwoHeight,
    sectionThreeHeight,
    sectionFourHeight,
    sectionFiveHeight,
    sectionSixHeight,
  } = AllCtx();




  return (
    <div className=" hidden px-5 md:flex h-screen items-center mr-5 fixed top-0">
      <div className=" hidden md:block">
        <div className="flex justify-center">
          <div onClick={()=>{router.push('#')}}
            className={`flex justify-center duration-500 h-3 w-3 cursor-pointer hover:bg-gray-400 rounded-full ${
              isSectionOne ? "bg-pry-color" : "bg-sec-color"
            }`}
          ></div>
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="h-5 w-[1.9px] bg-sec-color "></div>
        </div>
        <div className="flex justify-center">
          <div onClick={()=>{router.push('#section2')}}
            className={`flex justify-center duration-500 h-3 w-3 cursor-pointer hover:bg-gray-400 rounded-full ${
              isSectionTwo ? "bg-pry-color" : "bg-sec-color"
            }`}
          ></div>
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="h-5 w-[1.9px] bg-sec-color "></div>
        </div>
        <div className="flex justify-center">
          <div onClick={()=>{router.push('#section3')}}
            className={`flex justify-center duration-500 h-3 w-3 cursor-pointer hover:bg-gray-400 rounded-full ${
              isSectionThree ? "bg-pry-color" : "bg-sec-color"
            }`}
          ></div>
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="h-5 w-[1.9px] bg-sec-color "></div>
        </div>
        <div className="flex justify-center">
          <div onClick={()=>{router.push('#section4')}}
            className={`flex justify-center duration-500 h-3 w-3 cursor-pointer hover:bg-gray-400 rounded-full ${
              isSectionFour ? "bg-pry-color" : "bg-sec-color"
            }`}
          ></div>
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="h-5 w-[1.9px] bg-sec-color "></div>
        </div>
        <div className="flex justify-center">
          <div onClick={()=>{router.push('#section5')}}
            className={`flex justify-center duration-500 h-3 w-3 cursor-pointer hover:bg-gray-400 rounded-full ${
              isSectionFive ? "bg-pry-color" : "bg-sec-color"
            }`}
          ></div>
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="h-5 w-[1.9px] bg-sec-color "></div>
        </div>
        <div className="flex justify-center">
          <div onClick={()=>{router.push('#footer')}}
            className={`flex justify-center duration-500 h-3 w-3 cursor-pointer hover:bg-gray-400 rounded-full ${
              isSectionSix ? "bg-pry-color" : "bg-sec-color"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default NavIndicator;

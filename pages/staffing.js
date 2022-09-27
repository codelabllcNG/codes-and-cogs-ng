import Image from "next/image";
import React, { useState } from "react";
import HeaderBanner from "../components/HeaderBanner";
import Banner from "../components/staffing/Banner";
import Section1 from "../components/staffing/Section1";
import Section2 from "../components/staffing/Section2";
import Section3 from "../components/staffing/Section3";

function Staffing() {
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <div className="px-5 md:px-10 lg:px-16">
      <HeaderBanner title="Staffing" />

      <Section1 />

      <Section2 />

      <Section3 />

      {/* HOW IT WORKS TITLE*/}

      <div
        className="text-center font-bold mt-10 text-[24px] lg:text-[32px]"
        dangerouslySetInnerHTML={{ __html: "How it Works " }}
      >
        {}
      </div>

      {/* HOW IT WORKS NUMBERING    */}
      <div className="mt-5 flex justify-evenly">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            onClick={() => {
              setSelectedStep(num);
            }}
            key={num}
            className={`${
              selectedStep === num ? "shadow-md" : ""
            } duration-300 hover:bg-gray-100 text-center flex justify-center items-center bg-white text-pry-color rounded-full font-bold text-3xl 400:text-4xl 560:text-5xl sm:text-6xl lg:text-7xl  cursor-pointer w-10 h-10 560:w-16 400:h-12 400:w-12 560:h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 `}
          >
            <div className="flex justify-center items-center w-full h-full ">
              <p className="z-10">{num}</p>
              <div className=" bg-red-200 rounded-full w-1/4 h-1/4  -ml-[20%] mt-[48%] 400:mt-[43%]  1000:mt-[33%]  "></div>
            </div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS HEADER  */}
      <div className="mt-10">
        <div
          className="text-xl text-red-700 font-semibold text-center"
          dangerouslySetInnerHTML={{ __html: "Discuss your hiring needs" }}
        >
          {}
        </div>
      </div>

      {/* HOW IT WORKS BODY   */}
      <div className="md:flex justify-evenly items-center mt-5 md:mt-10">
        <div className="md:w-[45%] mr-5  flex justify-center">
          <Image
            alt="Image alt text"
            src={"/images/career.png"}
            width="500"
            height="300"
          />{" "}
        </div>

        <div
          className="md:w-[50%] text-lg mt-5 md:mt-0"
          dangerouslySetInnerHTML={{
            __html:
              "In order to develop and personalize the best hiring strategy for you, we collaborate to identify your objectives and examine the market's situation. Not sure what you're searching for exactly? We got you. We have highly skilled experts for every tech stack. ",
          }}
        >
          {}
        </div>
          </div>
          
          {/* HOW IT WORKS BANNER  */}

         <Banner/>
    </div>
  );
}

export default Staffing;

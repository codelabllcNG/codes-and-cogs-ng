import Image from "next/image";
import React from "react";

function Model() {
  return (
    <div className="900:flex justify-between items-center mt-20 ">
      <div className="900:w-[50%] mr-3">
        <div
          dangerouslySetInnerHTML={{
            __html: "HIRE <br/> HASSLE-FREE IN 24 HOURS",
          }}
          className="text-[24px] 890:text-[30px] font-bold leading-9"
        >
          {}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html:
              "We make complex and complicated tech hiring simple and straightforward. Find, hire and manage world-class tech talents the easy way.  ",
          }}
          className="mt-5 890:text-[22px]"
        >
          {}
        </div>

        <div className="mt-8 hidden 900:flex">
          <button className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]">
            Hire Tech Talent
          </button>
        </div>
      </div>
      <div className="mt-10 900:mt-0 900:w-[50%]">
        <div className={` grid grid-cols-1 500:grid-cols-2 gap-8 500:gap-3 `}>
          {[1, 2, 3, 4].map((model, i) => (
            <div
              data-aos="fade-up"
              data-aos-once
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={model}
              className={`p-4 rounded-xl hover:!scale-95 cursor-pointer duration-300 ${
                i === 0
                  ? "bg-[#dedeeb]"
                  : i === 1
                  ? "bg-[#f9e5e5]"
                  : i === 2
                  ? "bg-[#ededed]"
                  : i === 3
                  ? "bg-[#d6dade]"
                  : ""
              } ${i % 2 === 0 ? "900:-mt-4" : ""} ${
                i % 2 === 0 ? "900:mb-4" : ""
              }`}
            >
              <div className="flex justify-center items-center">
                {" "}
                <Image
                  className=""
                  alt="Model Icon"
                  src="/images/find-talent-icon.svg"
                  width={50}
                  height={50}
                />{" "}
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: "Find a Talent" }}
                className="890:text-[22px] font-semibold text-center mt-4"
              >
                {}
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "Hire the right talent immediately and start building a scalable solution with no down payment while we take care of the paperwork. ",
                }}
                className="text-[16px] mt-4"
              >
                {}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8  900:hidden flex justify-center">
          <button className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]">
            Hire Tech Talent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;

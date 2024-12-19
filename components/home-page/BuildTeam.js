import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function BuildTeam() {
const router = useRouter()


  return (
    <div className="900:flex flex-row-reverse justify-between items-center mt-20 gap-x-7 ">
      <div className="900:w-[50%] ">
        <div
          dangerouslySetInnerHTML={{
            __html: "CERTIFICATION TRAINING FOR INDUSTRY EXCELLENCE",
          }}
          className="text-[24px] 890:text-[30px] font-bold leading-9"
        >
          {}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html:
              "Data confidentiality is one of the risks of hiring remote tech talents. In addition to connecting, you with the best talents, we are keen on protecting your data by these steps.",
          }}
          className="mt-5 890:text-[22px]"
        >
          {}
        </div>

        <div className="mt-8 hidden 900:flex">
          <button    onClick={() => {
                  router.push("/coming-soon");
                }} className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-10 900:mt-0 900:w-[50%]">
        {/* <div
          className={` sm:flex sm:space-x-5 space-y-5 sm:space-y-0 items-center`}
        >
          <div className="sm:w-1/2">
            <div 
              // key={model}
              className={`p-4 rounded-xl hover:scale-95 cursor-pointer duration-300 bg-[#ededed]`}
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
                dangerouslySetInnerHTML={{ __html: "Vetted Talents" }}
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
          </div>

          <div className="sm:w-1/2 space-y-5">
            <div
              // key={model}
              className={`p-4 rounded-xl hover:scale-95 cursor-pointer duration-300 bg-[#f9e5e5]`}
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
                dangerouslySetInnerHTML={{ __html: "Remote Locations" }}
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

            <div
              // key={model}
              className={`p-4 rounded-xl hover:scale-95 cursor-pointer duration-300 bg-[#d6dade]`}
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
                dangerouslySetInnerHTML={{ __html: "Workstation as a service" }}
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
          </div>
        </div> */}
           <div className=" ">
          <Image
            className="rounded-lg"
            alt="Talents"
            src="/images/certification.png"
            width={724}
            height={656}
          />
        </div>

        <div className="mt-8  900:hidden flex justify-center">
          <button    onClick={() => {
                  router.push("/coming-soon");
                }} className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]">
            Hire Tech Talent
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuildTeam;

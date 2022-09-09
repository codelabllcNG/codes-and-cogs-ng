import Image from "next/image";
import React from "react";


function Section2() {



  return (
    <div className="px-5 md:px-10 lg:px-16">
      <div className="mb-3" id='kick-start'>
        <div className="flex  justify-center md:mb-2">
          <div
            dangerouslySetInnerHTML={{
              __html: "Want to Kick-start a Career in Tech?",
            }}
            className="font-bold header font-larken  "
          >
            {}
          </div>
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
      </div>

      <div
        className="text-center text-xl mb-8"
        dangerouslySetInnerHTML={{
          __html:
            "Whether you're an experienced techie looking to increase your knowledge, transitioning into tech, or completely new to the industry and wish to explore more opportunities, learn in-demand tech skills from industry experts in our Software Engineering School.",
        }}
      >
        {}
      </div>

          {/* IMAGE AND EXPLAINER  */}
      <div className="md:flex">
        <div className="md:w-[40%] mr-5 flex md:block justify-center ">
          <Image
            className="rounded-md"
            alt="Career image"
            width={566}
            height={352}
            src={"/images/career.png"}
          />
        </div>

        <div
          className="dangerous-html md:w-[55%] mt-3 md:mt-0"
          dangerouslySetInnerHTML={{
            __html:
              "•	We go beyond the basics and delve deeper into the technologies we teach. <br/> •	We provide you with not just “theories” but real-life projects to learn from.<br/>•	Our facilitators are in the top 7% in Europe and we only offer the best modules according to industry standards. <br/>•After the course, you can take a test to intern with us or top global tech companies and launch your career in tech immediately.<br/>•After the course, you can take a test to intern with us or top global tech companies and launch your career in tech immediately.",
          }}
        >
          {}
        </div>
      </div>
{/* WHY BE PART OF THIS  */}
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: "WHY BE PART OF THIS?" }}
          className="text-center text-2xl font-semibold mt-8"
        >
          {}
        </div>

        <div className="md:flex justify-between mt-5 text-[#142E62] space-y-3 md:space-y-0 ">
          <div className=" md:w-[30%]">
            <div className="flex justify-center ">
              <div
                className="w-24 h-24 bg-mid-color rounded-full flex
                      justify-center items-center -mb-12 border-8 border-white"
              >
                <Image alt="Icon" width='60' height='37' src='/images/logos-and-icons/why-be-part1.png'/>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: "High-quality training from industry experts",
              }}
              className="pt-16 pb-8 bg-mid-color px-3 lg:px-10 rounded-3xl hover:bg-gray-200 duration-300  font-semibold text-xl sm:text-2xl  text-center h-48"
            >
                {}
            </div>
          </div>

          <div className=" md:w-[30%]">
            <div className="flex justify-center ">
              <div
                className="w-24 h-24 bg-mid-color rounded-full flex
                      justify-center items-center -mb-12 border-8 border-white"
              >
                <Image alt="Icon" width='36' height='44' src='/images/logos-and-icons/why-be-part2.png'/>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: "Real-life projects",
              }}
              className="pt-16 pb-8 bg-mid-color px-3 lg:px-10 rounded-3xl hover:bg-gray-200 duration-300  font-semibold text-xl sm:text-2xl  text-center h-48"
            >
                {}
            </div>
          </div>

          <div className=" md:w-[30%]">
            <div className="flex justify-center ">
              <div
                className="w-24 h-24 bg-mid-color rounded-full flex
                      justify-center items-center -mb-12 border-8 border-white"
              >
                <Image alt="Icon" width='40' height='38' src='/images/logos-and-icons/why-be-part3.png'/>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: "Access to community",
              }}
              className="pt-16 pb-8 bg-mid-color px-3 lg:px-10 rounded-3xl hover:bg-gray-200 duration-300  font-semibold text-xl sm:text-2xl  text-center h-48"
            >
                {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;

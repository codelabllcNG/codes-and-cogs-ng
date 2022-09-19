import Image from "next/image";
import React from "react";


function Section2(props) {
const {title,
  subtitle,
  bulletinImage,
  whyBePartTitle,
  bulletin,   whyBePart1,
  whyBePart2,
  whyBePart3,} = props


  return (
    <div className="px-5 md:px-10 lg:px-16 scroll-smooth">
      <div className="mb-3 scroll-mt-10"  id='kick-start'>
        <div className="flex scroll-mt-40 justify-center md:mb-2">
          <div
            dangerouslySetInnerHTML={{
              __html: title
            }}
            className="font-bold header  font-larken  "
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
          __html: subtitle
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
            src={bulletinImage}
          />
        </div>

        <div
          className="dangerous-html md:w-[55%] mt-3 md:mt-0"
          dangerouslySetInnerHTML={{
            __html: bulletin
          }}
        >
          {}
        </div>
      </div>
{/* WHY BE PART OF THIS  */}
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: whyBePartTitle }}
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
                <Image alt="Icon" width='60' height='37' src={whyBePart1.icon}/>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: whyBePart1.text
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
                <Image alt="Icon" width='36' height='44' src={whyBePart2.icon}/>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: whyBePart2.text
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
                <Image alt="Icon" width='40' height='38' src={whyBePart3.icon}/>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: whyBePart3.text
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




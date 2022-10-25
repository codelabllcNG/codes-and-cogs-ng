import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Banner from "../staffing/Banner";


function Section7(props) {
const router = useRouter();


const {  getStartedTitle,
  getStartedSubtitle,
  getStarted,    banner2,} = props



  const [selectedStep, setSelectedStep] = useState(getStarted[0].title);

  return (
    <div className="mt-16">
      <div className="flex  justify-center md:mb-2">
        <div dangerouslySetInnerHTML={{ __html: getStartedTitle}} className="font-bold header">
        {}
        </div>
      </div>
      <div className="flex justify-center -mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div
        className="text-xl text-red-700 font-semibold text-center mt-10"
        dangerouslySetInnerHTML={{ __html: getStartedSubtitle || "HOW TO GET STARTED" }}
      >
        {}
      </div>

      {/*  NUMBERING    */}
      <div className="mt-5 flex justify-evenly">
        {getStarted.map((item, i) => (
          <div
            onClick={() => {
              setSelectedStep(item.title);
            }}
            key={item.title}
            className={`${
              selectedStep === item.title ? "shadow-md" : ""
            } duration-300 hover:bg-gray-100 text-center flex justify-center items-center bg-white text-pry-color rounded-full font-bold text-3xl 400:text-4xl 560:text-5xl sm:text-6xl lg:text-7xl  cursor-pointer w-10 h-10 560:w-16 400:h-12 400:w-12 560:h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 `}
          >
            <div className="flex justify-center items-center w-full h-full ">
              <p className="z-10">{i + 1}</p>
              <div className=" bg-red-200 rounded-full w-1/4 h-1/4  -ml-[20%] mt-[48%] 400:mt-[43%]  1000:mt-[33%]  "></div>
            </div>
          </div>
        ))}
      </div>

         {/* HOW TO GET STARTED BODY   */}
      <div>
        {getStarted.map(
          (item, i) =>
            selectedStep === item.title && (
              <div className="mt-10" key={item.title}>
                <div></div>

            
                <div className={`md:flex ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } justify-evenly items-center mt-5 md:mt-10`}>
                  <div className=" md:w-[45%] mr-5  flex justify-center">
                    <Image
                      alt="Image alt text"
                      src={item.imageUrl || "/images/career.png"}
                      width="500"
                      height="300"
                      className='rounded-xl'
                    />{" "}
                  </div>

                  <div
                    className="md:w-[50%]  text-center font-bold text-2xl mt-5 md:mt-0"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  >
                    {}
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      {/*  BANNER  */}

      <div className="mt-10 rounded-xl  bg-center bg-cover bg-no-repeat   text-white px-5 md:px-10 lg:px-16  py-5 md:py-10 lg:py-12"
      // bg-[url('/images/career-banner2.png')]
      style={{ backgroundImage: `url(${banner2.bannerUrl || '/images/career-banner2.png'})` }}
    >
      <div className='flex justify-end'>
      <div className='md:w-[30%] '></div>   <div className='md:w-[70%] text-xs 320:text-base  sm:text-xl md:text-2xl lg:text-3xl text-right' dangerouslySetInnerHTML={{ __html: banner2.text}}>
              {}
          </div>
   </div>
      <div className='flex justify-end text-right'>
      <button onClick={()=>{router.push('/career/#job-openings')}} className='md:text-xl bg-white text-pry-color px-2 py-1 mt-5 md:font-semibold md:px-3 rounded-lg hover:bg-pry-color hover:text-white duration-300'>Join Codes and Cogs</button>
         </div>
    </div>
    </div>
  );
}

export default Section7;

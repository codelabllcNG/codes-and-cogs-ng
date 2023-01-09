import Image from "next/image";
import Link from "next/link";
import React from "react";

function Testimonials() {


  function switchTestimony() {
  
}

  return (
    <div className="mt-20">
      <div
        dangerouslySetInnerHTML={{
          __html: "TESTIMONIALS",
        }}
        className="text-[24px] 890:text-[30px] font-bold leading-9 "
      >
        {}
      </div>

      <div className="  flex  mt-5 justify-between  items-center">
        <div className="cursor-pointer">
          <Image
            className=""
            alt="Arrow Left"
            src="/images/arrow-l.png"
            width={55}
            height={55}
          />
        </div>
        <div
          className=" pt-5 lg:pt-8 px-3 sm:px-8 rounded-lg 
        bg-cover bg-center  bg-no-repeat bg-[url('/images/testimonies-bg.png')] w-full "
          // bg-[url('/images/trusted-bg.png')]
          //   style={{ backgroundImage: `url(${remoteBgImage})` }}
        >
       
                
          <div className="890:flex-row-reverse flex flex-col justify-center items-center w-full">
          <div className="w-[40%] sm:w-[35%] flex ">
                  <Image
              className=""
              alt="Testimony DP"
              src="/images/testimony-pic1.png"
              width={502}
              height={485}
                  /> 
                  </div>
  <div className="890:w-[65%] 890:pt-10">
                      <p className="890:text-[28px] text-sm 890:!leading-9 !leading-7  320:text-base 350:text-[20px] font-medium" dangerouslySetInnerHTML={{ __html: "Codes and Cogs provides you with the best developers, Designers, a whole team to make sure you get the results you want" }} >
                          {}
                      </p>

                      <div className="mt-5 text-xs 320:text-base ">
                          <p className="text-pry-color font-semibold" dangerouslySetInnerHTML={{__html: "Adam Ladin"}}>
                              {}
                          </p>
                          <p className="pb-4" dangerouslySetInnerHTML={{__html: "Manager Codelab LLC"}}>
                              {}
                          </p>
                      </div>
                  </div>
             </div>
        
        </div>
        <div className="cursor-pointer">
          <Image
            className=""
            alt="Arrow Left"
            src="/images/arrow-r.png"
            width={55}
            height={55}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

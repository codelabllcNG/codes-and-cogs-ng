import React from "react";
import Image from "next/image";
import { REVIEWS } from "../../a-store/content-store/REVIEWS";
import BotIcon from "../BotIcon";

function Section2(props) {
  const { reviewsTitle, reviewsArray } = props;

  return (
    <div className="md:px-10 px-5 lg:px-16 mb-8">
      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold header  ">
          {reviewsTitle}

          {/* Customer Reviews */}
        </h2>
      </div>
      <div className="flex justify-center -mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className="flex  justify-between scroll-smooth  snap-x overflow-x-scroll hover:overscroll-x-none   snap-mandatory duration-500 scrollbar-hide  ">
        {reviewsArray.map((review) => (
          <div
            key={review.id}
            className={`    py-12 px-4 700:w-[32%] w-[15rem]  400:w-[17rem] shrink-0 snap-center `}
          >
            <div
              className={`bg-mid-color  rounded-lg hover:bg-[#ECF1FA] hover:scale-110 duration-300 py-8 px-3`}
            >
              <div className="text-pry-color flex items-center justify-center space-x-3 mb-2 700:mb-5">
                <div className="w-[3rem]  h-[4rem] 700:w-[4rem] 700:h-[5rem] ">
                  <Image  height={70} width={64} className="" src={review.icon} alt={review.name} />
                </div>{" "}
                <div>
                  <div className="flex justify-center 400:text-base text-sm font-semibold">
                    <p>{review.title}</p>
                  </div>{" "}
                  <div className="flex justify-center 400:text-sm text-xs">
                    <p>{review.name}</p>
                  </div>{" "}
                </div>
              </div>

              <div className="text-xs 400:text-sm 700:text-base text-justify mb-3 700:mb-10">
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <BotIcon />  */}
    </div>
  );
} 

export default Section2;

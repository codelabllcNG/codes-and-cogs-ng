import { useRouter } from "next/router";
import React from "react";

function Outro() {
const router = useRouter()

  return (
    <div className="mt-20 rounded-xl bg-[url('/images/outro-banner.png')] bg-center bg-cover bg-no-repeat   text-white px-3 sm:px-8  py-5 md:py-10 lg:py-12 ">
      <div
        className="text-xs 320:text-base 350:text-2xl 500:!leading-10 sm:text-[28px] md:text-[30px] w-full sm:w-[65%]"
        dangerouslySetInnerHTML={{
          __html: "With The Right Team and Tools, You Can Build Anything",
        }}
      >
        {}
      </div>

      <div className="flex space-x-4 mt-8 ">
        <button
          onClick={() => {
            router.push("/coming-soon");
          }}
          className="bg-white rounded-lg text-pry-color px-2 400:px-3 py-1 400:py-2 font-medium hover:bg-gray-100 duration-300 text-sm 350:text-[18px] "
        >
          Hire Talent
        </button>
        {/* <button className="border hover:bg-opacity-10 rounded-lg text-white px-2 400:px-3 py-1 400:py-2 font-medium hover:bg-gray-100 duration-300 text-sm 350:text-[18px]">
          Book A Call
        </button> */}
      </div>
    </div>
  );
}

export default Outro;

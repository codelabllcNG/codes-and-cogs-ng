import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Banner(props) {
  const router = useRouter();
  const { banner } = props;
  return (
    <div
      className="mt-10 rounded-xl  bg-center bg-cover bg-no-repeat   text-white px-5 md:px-10 lg:px-16  py-5 md:py-10 lg:py-12"
      // bg-[url('/images/career-banner.png')]
      style={{
        backgroundImage: `url(${
          banner.bannerUrl || "/images/career-banner.png"
        })`,
      }}
    >
      <div className="flex justify-end">
        <div className="md:w-[30%]"></div>{" "}
        <div
          className="md:[70%] text-xs 320:text-base  sm:text-xl md:text-2xl lg:text-3xl text-right"
          dangerouslySetInnerHTML={{ __html: banner.text }}
        >
          {}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            router.push("/career/#job-openings");
          }}
          className="md:text-xl bg-white text-pry-color px-2 py-1 mt-5 md:font-semibold md:px-3 rounded-lg hover:bg-pry-color hover:text-white duration-300"
        >
          Join Codes and Cogs
        </button>
      </div>
    </div>
  );
}

export default Banner;

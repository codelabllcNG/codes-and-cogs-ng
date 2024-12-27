import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Banner1({ bgUrl }) {
  const router = useRouter();

  return (
    <div className="sm:flex mt-20 ">
      <div className="sm:w-[40%] flex ">
        {/* <Image
              className="rounded-tl-3xl rounded-tr-3xl sm:rounded-l-3xl sm:rounded-tr-none"
              alt="Banner Image"
              src="/images/banner1-image.webp"
              width={646}
              height={670}
                  />  */}
        <div className="flex justify-center ">
          {/* <video
            width="646"
            height="670"
            controls
            // autoPlay
            loop
            // muted
            className=" h-full rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl  "
          >
            <source src={"videoUrl"} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <Image
            alt="Hero image"
            className="object-cover"
            width={599}
            height={501}
            src={bgUrl || "/images/new-hero-image.png"}

            // style={{ backgroundImage: `url(${bgUrl})` }}
          />
        </div>
      </div>
      <div className="sm:w-[60%] bg-pry-color text-white rounded-bl-3xl rounded-br-3xl sm:rounded-r-3xl sm:rounded-bl-none px-5 py-8 lg:py-16 sm:flex flex-col justify-center">
        <div
          dangerouslySetInnerHTML={{
            __html: "Empowering Innovation in Oil & Gas",
          }}
          className="sm:text-[35px] font-bold 400:text-[24px]"
        >
          {}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html:
              "At Codes and Cogs, we unite industry-leading professionals with groundbreaking projects, blending technical expertise with advanced technology to offer comprehensive oilfield solutions, global talent connections, and specialized training.",
          }}
          className="text-[14px] 400:text-[16px]  sm:text-[22px] mt-5"
        >
          {}
        </div>

        <div className="flex justify-center sm:justify-start mt-10 ">
          <button
            onClick={() => {
              router.push("/coming-soon");
            }}
            className="text-pry-color bg-white font-bold px-4 py-2 shadow rounded-lg text-[14px] 400:text-[16px]  sm:text-[22px] hover:bg-gray-50"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner1;

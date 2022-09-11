import Image from "next/image";
import React from "react";

function Section3() {
  return (
    <div className="px-5 md:px-10 lg:px-16 mt-10">
      <div className=" flex justify-around bg-[url('/images/sch-bg.png')] bg-cover rounded-3xl  bg-center bg-no-repeat text-white  text-lg sm:text-xl md:text-2xl py-5 md:py-10 ">
        <div className="w-1/3 ">
          <div className="h-20 flex justify-center items-center">
            <Image
              alt="Icon1"
              width={78}
              height={42}
              src="/images/logos-and-icons/icon1.png"
            />
          </div>
          <div className="text-center h-12">20</div>
          <div className="text-center h-10">Courses</div>
        </div>

        <div className="w-1/3 ">
          <div className="h-20 flex justify-center items-center">
            <Image
              alt="Icon2"
              width={78}
              height={54}
              src="/images/logos-and-icons/icon2.png"
            />
          </div>
          <div className="text-center h-12">100</div>
          <div className="text-center h-10">Qualified Facilitators</div>
        </div>

        <div className="w-1/3 ">
          <div className="h-20 flex justify-center items-center">
            <Image
              alt="Icon3"
              width={61}
              height={55}
              src="/images/logos-and-icons/icon3.png"
            />
          </div>
          <div className="text-center h-12">50</div>
          <div className="text-center h-10">Graduates Placed</div>
        </div>
      </div>

      <div className="text-center  mt-8 text-lg sm:text-xl md:text-2xl font-bold">
        Introduction to some of our courses
      </div>

      <div className="md:flex justify-between md:space-x-3 mt-5  md:space-y-0 space-y-8">
     {[1, 2, 3].map(video =>    <div>
          <div key={video} className="flex justify-center mb-1 ">
            <video
              // width="400"
              height="305"
              controls
              // autoPlay
              loop
              // muted
              className="rounded-lg mb-2 h-auto"
            >
              <source src={"https://example.com"} />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className=" text-lg sm:text-lg font-semibold  text-center ">
            Introduction to Java
          </p>
        </div>) }
      </div>
    </div>
  );
}

export default Section3;

import Image from "next/image";
import React from "react";
import { SERVICES } from "../../a-store/content-store/SERVICES";
import { useRouter } from "next/router";

function Model() {
  const router = useRouter();

  return (
    <div id="services" className="900:flex justify-between items-center mt-20 ">
      <div className="900:w-[50%] mr-3">
        <div
          dangerouslySetInnerHTML={{
            __html: "SOLUTIONS DELIVERED HASSLE-FREE IN 24 HOURS",
          }}
          className="text-[24px] 890:text-[30px] font-bold leading-9"
        >
          {}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html:
              "Codes and Cogs provides end-to-end solutions for oilfield operations, from well insights and AI-driven analysis to designing custom, cost-effective solutions tailored to unique field needs. We are also dedicated to developing local talent through comprehensive training in safety, oil and gas operations, and specialized roles like slickline, wireline, and coiled tubing, ensuring companies have skilled professionals to work safely and efficiently..  ",
          }}
          className="mt-5 890:text-[18px]"
        >
          {}
        </div>

        {/* <div className="mt-8 hidden 900:flex">
          <button    onClick={() => {
                  router.push("/coming-soon");
                }} className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]">
           Learn More
          </button>
        </div> */}
      </div>
      <div className="mt-10 900:mt-0 900:w-[50%]">
        <div className={` grid grid-cols-1 500:grid-cols-2 gap-8 500:gap-3 `}>
          {SERVICES.map((service, i) => (
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={service.title}
              className={`p-4 rounded-xl hover:!scale-95 cursor-pointer duration-300 ${
                i === 0
                  ? "bg-[#dedeeb]"
                  : i === 1
                  ? "bg-[#f9e5e5]"
                  : i === 2
                  ? "bg-[#ededed]"
                  : i === 3
                  ? "bg-[#d6dade]"
                  : ""
              } ${i % 2 === 0 ? "900:-mt-4" : ""} ${
                i % 2 === 0 ? "900:mb-4" : ""
              }`}
            >
              {/* Icon Section */}
              <div className="flex justify-center items-center">
                <Image
                  className=""
                  alt="Model Icon"
                  src="/images/find-talent-icon.svg"
                  width={50}
                  height={50}
                />
              </div>

              {/* Title */}
              <div
                dangerouslySetInnerHTML={{ __html: service.title }}
                className="890:text-[22px] font-semibold text-center mt-4"
              ></div>

              {/* Content Section with Truncation */}
              <div className="text-[16px] mt-4">
                {service.content.length > 50
                  ? `${service.content.slice(0, 110)}...`
                  : service.content}
              </div>

              {/* Beautified Read More Button */}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => router.push(`/services/${service.id}`)} // Replace with navigation logic if needed
                  className="text-sm text-black px-4 py-2 rounded-md shadow"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8  900:hidden flex justify-center">
          <button className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]">
            Hire Tech Talent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;

import Image from "next/image";
import React from "react";
import { CERTIFICATIONS } from "../../a-store/content-store/CERTIFICATIONS";

function WhyUS() {
  return (
    <div className="mt-20">
      <div
        dangerouslySetInnerHTML={{
          __html: "THE CERTIFICATIONS WE OFFER",
        }}
        className="text-[24px] 890:text-[30px] font-bold leading-9"
      >
        {}
      </div>

      <div className="mt-10 grid grid-cols-1 500:grid-cols-2 900:grid-cols-3 gap-4 ">
        {CERTIFICATIONS.map((cert) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-once
            data-aos-duration="2000"
            key={cert.header}
            className=" duration-300  px-3 py-4 bg-white text-gray-800 hover:bg-pry-color hover:text-white  rounded-lg rounded-tr-[3rem] shadow-lg "
          >
            {/* <div>
              <Image
                className=""
                alt="Instant Hiring Icon"
                src="/images/clock-icon.svg"
                width={55}
                height={52}
              />
            </div>  */}

            <div
              dangerouslySetInnerHTML={{ __html: cert.header }}
              className="text-[22px] font-bold"
            >
              {}
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: cert.subheader }}
              className="text-gray-400 font-medium"
            >
              {}
            </div>

            <ul className="text-sm mt-3 list-disc pl-5">
              {cert.content.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
            {/* <div
              dangerouslySetInnerHTML={{
                __html:
                  "Hire vetted tech talents in 24 hours and save time on long hiring processes.",
              }}
              className="text-base mt-3"
            >
              {}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUS;

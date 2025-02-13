import Image from "next/image";
import React from "react";
import { CERTIFICATIONS } from "../../a-store/content-store/CERTIFICATIONS";
import { useRouter } from "next/router";

function WhyUS() {
  const router = useRouter();

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
            data-aos-duration="2000"
            key={cert.header}
            className="duration-300 px-3 py-4 bg-white text-gray-800 hover:bg-pry-color hover:text-white rounded-lg rounded-tr-[3rem] shadow-lg relative"
          >
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

            <ul className="text-sm mt-3 list-disc pl-5 mb-9">
              {cert.content.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>

            <div className="flex justify-center sm:justify-start mt-2">
              <button
                onClick={() => {
                  router.push("/coming-soon");
                }}
                className="text-pry-color bg-white font-semibold px-2 py-1 shadow rounded-lg text-[10px] 400:text-[13px]  sm:text-[18px] hover:bg-gray-50 absolute bottom-2"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUS;

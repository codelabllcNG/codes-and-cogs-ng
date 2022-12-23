import Image from "next/image";
import React from "react";

function RemoteTalents() {
  return (
    <div className="mt-20">
      <div
        dangerouslySetInnerHTML={{
          __html: "OUR REMOTE TALENTS",
        }}
        className="text-[24px] 890:text-[30px] font-bold leading-9 890:hidden"
      >
        {}
      </div>
      <div className=" 890:flex flex-row-reverse items-center">
        <div className="890:w-1/2">
          <Image
            className=""
            alt="Talents"
            src="/images/abuja-talents.png"
            width={724}
            height={656}
          />
        </div>

              <div className="890:w-1/2 890:mr-5">
                  
              <div
        dangerouslySetInnerHTML={{
          __html: "OUR REMOTE TALENTS",
        }}
        className="text-[24px] 890:text-[30px] font-bold leading-9 hidden 890:block"
      >
        {}
      </div>

          <div
            dangerouslySetInnerHTML={{
              __html:
                "Data confidentiality is one of the risks of hiring remote tech talents. In addition to connecting, you with the best talents, we are keen on protecting your data by these steps.",
            }}
            className="text-[22px] 890:mt-10"
          >
            {}
          </div>

          <div className="mt-8">
            <button className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]">
              Our Talents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoteTalents;

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function RemoteTalents() {
  const router = useRouter();

  return (
    <div className="mt-20">
      <div
        dangerouslySetInnerHTML={{
          __html: "GLOBAL POWER OUTSOURCING",
        }}
        className="text-[24px] 890:text-[30px] font-bold leading-9 890:hidden"
      >
        {}
      </div>
      <div className=" 890:flex flex-row-reverse items-center">
        <div className="890:w-1/2 ">
          <Image
            className="rounded-lg"
            alt="Talents"
            src="/images/talent-outsourcing.png"
            width={724}
            height={656}
          />
        </div>

        <div className="890:w-1/2 890:mr-5">
          <div
            dangerouslySetInnerHTML={{
              __html: "GLOBAL POWER OUTSOURCING",
            }}
            className="text-[24px] 890:text-[30px] font-bold leading-9 hidden 890:block"
          >
            {}
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html:
                "We specialize in outsourcing skilled manpower, connecting experienced oil and gas consultants with international projects tailored to their expertise.",
            }}
            className="text-[22px] 890:mt-10"
          >
            {}
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                router.push("/coming-soon");
              }}
              className="px-4 py-2 text-white bg-pry-color hover:bg-opacity-80 rounded-xl shadow-md font-semibold 890:text-[22px]"
            >
              Be a Consultant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoteTalents;

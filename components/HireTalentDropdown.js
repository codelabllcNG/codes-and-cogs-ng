import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import AllCtx from "../util-functions/allCtx";

function HireTalentDropdown() {
  const router = useRouter();
  const { setHireTalentDropdown } = AllCtx();

  return (
    <div
      onMouseLeave={() => {
        setHireTalentDropdown(false);
      }}
      className="flex justify-center"
    >
      <div className="hidden bg-mid-color duration-200 mt-2  z-[5] absolute sm:block  rounded-md shadow text-base w-full">
        <div
          // onClick={() => {
          //   setHireTalentDropdown(false);
          //   router.push("/search-talents");
          // }}
          onClick={() => {
            router.push("/coming-soon");
          }}
          className="hover:bg-white rounded-md py-2 pr-3 select-none cursor-pointer"
        >
          <div className="flex  items-center ">
            <Image
              src="/images/logos-and-icons/global-talents-icon.svg"
              width="55"
              height="55"
              alt="Global icon "
            />{" "}
            <div className="whitespace-nowrap">Global Talents</div>
          </div>
        </div>
        <div
          // onClick={() => {
          //   setHireTalentDropdown(false);
          //   router.push("/staffing");
          // }}

          onClick={() => {
            router.push("/coming-soon");
          }}

          className="hover:bg-white rounded-md py-2 pr-3 select-none cursor-pointer"
        >
          <div className="flex items-center">
            <Image
              src="/images/logos-and-icons/local-talents-icon.svg"
              width="55"
              height="55"
              alt="Global icon "
            />{" "}
            <div className="whitespace-nowrap">Local Talents</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireTalentDropdown;

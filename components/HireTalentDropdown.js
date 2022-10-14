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
      <div className="hidden bg-mid-color duration-200 mt-2  z-[5] absolute sm:block  rounded-md shadow">
        <div
          onClick={() => {
                      setHireTalentDropdown(false);
                      router.push("/search-talents")
          }}
          className="hover:bg-white rounded-md py-2 pl-4 pr-8"
        >
          <div className='flex items-center'>
          <Image src='/images/logos-and-icons/global-talents-icon.svg' width='55' height='55' alt="Global icon "/> <div>Global Talents</div>
          </div>
        </div>
        <div
          onClick={() => {
                      setHireTalentDropdown(false);
                      router.push("/staffing")
          }}
          className="hover:bg-white rounded-md py-2 pl-4 pr-8"
        >
           <div className='flex items-center'>
          <Image src='/images/logos-and-icons/local-talents-icon.svg' width='55' height='55' alt="Global icon "/> <div>Local Talents</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireTalentDropdown;

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
          className="hover:bg-white rounded-md py-2 px-4"
        >
          Global Talents
        </div>
        <div
          onClick={() => {
                      setHireTalentDropdown(false);
                      router.push("/staffing")
          }}
          className="hover:bg-white rounded-md py-2 px-4"
        >
          Local Talents{" "}
        </div>
      </div>
    </div>
  );
}

export default HireTalentDropdown;

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AllCtx from "../../util-functions/allCtx";
import ScrollableContent from "./ScrollableContent";

function AboutCodesAndCogs() {
  const { setHeaderTop, setHeaderBottom, headerTop, headerBottom } = AllCtx();

  return (
    <div className="mt-20">
      <p className="hidden 890:block font-bold text-gray-600 text-[24px] md:text-[40px] 890:leading-[2.8rem] leading-7">
        {headerTop} <br />
        <span className="text-pry-color ">{headerBottom}</span>
      </p>
      <div className="flex mt-10">
        <div className="w-[30%] hidden 890:block">
          <Image
            className=""
            alt="Alt_text"
            src="/images/about-us-pointing-image.png"
            width={483}
            height={596}
          />
        </div>
        <ScrollableContent />
      </div>
    </div>
  );
}

export default AboutCodesAndCogs;

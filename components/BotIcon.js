import React from "react";
import Image from "next/image";

function BotIcon() {
  return (
    <div className="hidden  items-center  mb-16">
      {" "}
      <Image alt="Image alt text"
        src="/images/logos-and-icons/bot.png"
        width={45}
        height={55}
      />{" "}
      <div
        className="bg-mid-color h-[45px] flex items-center -ml-10 -mb-1 rounded-full ring-2 ring-mid-color ring-opacity-50
    "
      >
        <p className="pl-11 pr-2 text-xs text-pry-color  font-semibold ">
          Talk to a Project Engineer{" "}
        </p>
      </div>{" "}
    </div>
  );
}

export default BotIcon;

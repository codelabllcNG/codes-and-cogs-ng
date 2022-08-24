import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AllCtx from "../util-functions/allCtx";

function MobileNav() {
  const router = useRouter();

  const { menuIsClicked, setMenuIsClicked } = AllCtx();

  const [bg, setBg] = useState("bg-transparent");

  // useEffect(() => {
  //   if (menuIsClicked) {
  //     //   const timer = setTimeout(() => {
  //     setBg("bg-black bg-opacity-20 ");
  //     //   }, 1000);

  //     //   return () => clearTimeout(timer);
  //   } else {
  //     () => {
  //       setBg("bg-transparent");
  //     };
  //   }
  // }, [menuIsClicked]);

  return (
    <div
      className={`duration-300 ${
        menuIsClicked ? "-translate-x-0 " : " -translate-x-full "
      } -my-4 w-full h-screen flex   fixed z-[10] overflow-y-hidden
`}
    >
      <div
      
        className={`w-[60%] h-screen pl-2 400:pl5 pt-10 bg-mid-color shadow-md `}
      >
        <button
          onClick={() => {
            router.push("/post-a-job");
            setMenuIsClicked(false);
          }}
          className="bg-pry-color px-2 text-xs 400:text-base py-1 ring-2 ring-pry-color hover:bg-blue-800 text-white rounded"
        >
          Get Started
        </button>

        <button className="border border-gray-300 mx-2 hover:border-pry-color text-pry-color px-2 rounded py-1 text-xs 400:text-base ">
              {" "}
              Freelancing{" "}
            </button>
      </div>

      <div
        onClick={() => {
          setMenuIsClicked(false);
        }}
        className={`w-[40%] ${bg}   duration-300  h-screen`}
      ></div>
    </div>
  );
}

export default MobileNav;

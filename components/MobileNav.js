import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AllCtx from "../util-functions/allCtx";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

function MobileNav() {
  const router = useRouter();

  const {
    menuIsClicked,
    setMenuIsClicked,
    setTalentToHire,
    setIdOfTalentToHire,
  } = AllCtx();

  const [whatWeDoExpanded, setWhatWeDoExpanded] = useState(true);

  return (
    <div
      className={` -mx-5 md:-mx-10 lg:-mx-16 890:hidden duration-300 ${
        menuIsClicked ? "translate-x-0 " : " -translate-x-full "
      } -my-4 w-full h-screen flex   fixed z-[10] overflow-y-hidden
`}
    >
      <div
        className={`w-[80%] sm:w-[65%] h-screen pl-3 pr-3 400:pl-5 pt-10 bg-mid-color shadow-md `}
      >
        <div className="flex mb-8">
          <button
            onClick={() => {
              router.push("/contact-us");
              setMenuIsClicked(false);
            }}
            className="border-2 bg-pry-color text-white rounded-md px-4 py-2 border-pry-color hover:bg-opacity-80 hover:border-opacity-80 border-opacity-30"
          >
            Become A Consultant
          </button>
        </div>

        <div className="text-pry-color space-y-4 font-semibold ">
          <div
            onClick={() => {
              router.push("/about-us");
              setMenuIsClicked(false);
            }}
          >
            <button>About Us</button>
          </div>

          {/* <div
            onClick={() => {
              setTalentToHire("");
              setIdOfTalentToHire("");
              router.push("/coming-soon");
              setMenuIsClicked(false);
            }}
          >
            <button>Support</button>
          </div> */}

          <div
            onClick={() => {
              router.push("/#services");
              setMenuIsClicked(false);
            }}
          >
            <button>Service</button>
          </div>

          <div
            onClick={() => {
              setTalentToHire("");
              setIdOfTalentToHire("");
              router.push("/contact-us");
              setMenuIsClicked(false);
            }}
          >
            <button>Contact Us</button>
          </div>
          <div></div>
        </div>
      </div>

      <div
        onClick={() => {
          setMenuIsClicked(false);
        }}
        className={`w-[50%]    duration-300  h-screen`}
      ></div>
    </div>
  );
}

export default MobileNav;

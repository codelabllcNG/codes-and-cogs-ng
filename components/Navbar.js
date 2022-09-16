import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RedUnderline from "./RedUnderline";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import MegaMenu from "./MegaMenu";
import AllCtx from "../util-functions/allCtx";
import { MdExpandMore } from "react-icons/md";
import MobileNav from "./MobileNav";

function Navbar() {
  const router = useRouter();

  const { megaMenu, setMegaMenu, menuIsClicked, setMenuIsClicked, setTalentToHire,  setIdOfTalentToHire } = AllCtx();

  // Hover functions here next
  // const [homeHover, setHomeHover] = useState(true);
  const [aboutHover, setAboutHover] = useState(true);
  const [hireHover, setHireHover] = useState(false);
  const [postHover, setPostHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [supportHover, setSupportHover] = useState(false);

  function showHover(about, hire, post, services, support) {
    // setHomeHover(home);
    setAboutHover(about);
    setHireHover(hire);
    setPostHover(post);
    setServicesHover(services);
    setSupportHover(support);
  }

  return (
    <div className={``}>
      <MobileNav />
      <div className="flex items-center pt-4 justify-between mx-5 my-3 md:mx-10 lg:px-14">
        <div
          onClick={() => {
            router.push("/");
          }}
          className=" flex items-center cursor-pointer w-[4rem] 380:w-[5rem] md:w-[6rem]     "
        >
          {" "}
          <Image alt="Image alt text"
            className=""
            src="/images/logos-and-icons/logo.svg"
            width={180}
            height={172.22}
          />{" "}
        </div>

        <div className="sm:flex hidden text-sm 1130:text-base text-pry-color font-medium space-x-4 800:space-x-5 1000:space-x-7 ">
          {/* <Link passHref href="/">
            <div
              onMouseOver={() => {
                setMegaMenu(false)
                showHover(true, false, false, false, false);
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center">
                {" "}
                <a> Home </a>
              </div>
              {homeHover && <RedUnderline />}
            </div>
          </Link> */}

          <Link passHref href="/about-us">
            <div
              onMouseOver={() => {
                setMegaMenu(false);
                showHover(true, false, false, false, false);
              }}
              className="cursor-pointer hidden 890:block"
            >
              <div className="flex justify-center">
                {" "}
                <a> About Us </a>
              </div>
              {aboutHover && <RedUnderline />}
            </div>
          </Link>

          <Link passHref href="/search-talents">
            <div
              onMouseOver={() => {
                setMegaMenu(false);
                showHover(false, true, false, false, false);
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center">
                {" "}
                <a> Hire Talent </a>
              </div>
              {hireHover && <RedUnderline />}
            </div>
          </Link>

          <Link passHref href="/post-a-job">
            <div
              onMouseOver={() => {
                
                setMegaMenu(false);
                showHover(false, false, true, false, false);
              }}
              className="cursor-pointer"
            >
              <div onClick={()=>{setTalentToHire(''); setIdOfTalentToHire('')}} className="flex justify-center">
                {" "}
                <a> Post a Job </a>
              </div>
              {postHover && <RedUnderline />}
            </div>
          </Link>
          <Link passHref href="/what-we-do">
            <div
              onMouseOver={() => {
                setMegaMenu(true);
                showHover(false, false, false, true, false);
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center">
                {" "}
                <a className="flex items-center">
                  {" "}
                  What We Do <MdExpandMore className="ml-1 text-2xl pt-1" />{" "}
                </a>
              </div>
              {servicesHover && <RedUnderline />}
            </div>
          </Link>

          <Link passHref href="/support">
            <div
              onMouseOver={() => {
                setMegaMenu(false);
                showHover(false, false, false, false, true);
              }}
              className="cursor-pointer hidden 890:block"
            >
              <div className="flex justify-center">
                {" "}
                <a> Support </a>
              </div>
              {supportHover && <RedUnderline />}
            </div>
          </Link>
        </div>
        <div className="890:flex hidden items-center text-sm text-pry-color font-semibold  ">
          <Link passHref href="/join-us">
            <a className="border border-transparent mx-2 hover:border-pry-color px-2 rounded py-1 ">
              {" "}
              Freelancing{" "}
            </a>
          </Link>{" "}
          <button
            onClick={() => {
              router.push("/post-a-job");
            }}
            className="bg-pry-color px-2 font-normal py-1 ring-2 ring-pry-color hover:bg-blue-800 text-white rounded-lg"
          >
            Get Started
          </button>
        </div>
        <div
          onClick={() => {
            setMenuIsClicked(!menuIsClicked);
          }}
          className="relative 890:hidden"
        >
          {" "}
          {!menuIsClicked && (
            <Image alt="Image alt text"
              className="cursor-pointer"
              src="/images/logos-and-icons/hamburger-menu.svg"
              width={40}
              height={40}
            />
          )}
          {menuIsClicked && (
            <IoClose className="w-[28px] -mt-2 h-[28px] text-pry-color cursor-pointer" />
          )}
          {/* Mobile Nav Items  */}
        </div>
      </div>

      {megaMenu && <MegaMenu />}
    </div>
  );
}

export default Navbar;

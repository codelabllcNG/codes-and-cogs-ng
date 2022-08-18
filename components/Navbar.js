import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RedUnderline from "./RedUnderline";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import MegaMenu from "./MegaMenu";
import AllCtx from "../util-functions/allCtx";
import { MdExpandMore } from "react-icons/md";

function Navbar() {
  const { megaMenu, setMegaMenu } = AllCtx(); 

  const router = useRouter();

  // Hover functions here next
  const [homeHover, setHomeHover] = useState(true);
  const [aboutHover, setAboutHover] = useState(false);
  const [postHover, setPostHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [supportHover, setSupportHover] = useState(false);

  const [menuIsClicked, setMenuIsClicked] = useState(false);

  function showHover(home, about, post, services, support) {
    setHomeHover(home);
    setAboutHover(about);
    setPostHover(post);
    setServicesHover(services);
    setSupportHover(support);
  }

  return (
    <div className="">
      <div className="flex items-center py-4 justify-between mx-5 mb-5 mt-3 md:mx-10">
      
          <div  onClick={()=>{router.push('/')} } className=" flex items-center cursor-pointer w-[5rem]     ">
            {" "}
            <Image
              className=""
              src="/images/logos-and-icons/logo.svg"
              width={180}
              height={172.22}
            />{" "}
          </div>
       
        <div className="md:flex hidden text-pry-color font-medium space-x-4 800:space-x-5 1000:space-x-7 ">
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
                setMegaMenu(false)
                showHover(false, true, false, false, false);
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center">
                {" "}
                <a> About Us </a>
              </div>
              {aboutHover && <RedUnderline />}
            </div>
          </Link>

          <Link passHref href="/post-a-job">
            <div
              onMouseOver={() => {
                setMegaMenu(false)
                showHover(false, false, true, false, false);
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center">
                {" "}
                <a> Post a Job </a>
              </div>
              {postHover && <RedUnderline />}
            </div>
          </Link>
          <Link passHref href="/what-we-do">
            <div
              onMouseOver={() => {
                setMegaMenu(true)
                showHover(false, false, false, true, false);
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center">
                {" "}
                <a className='flex items-center'> What We Do <MdExpandMore className='ml-1 text-2xl pt-1' /> </a>
              </div>
              {servicesHover && <RedUnderline />}
            </div>
          </Link>

          <Link passHref href="/support">
            <div
              onMouseOver={() => {
                setMegaMenu(false)
                showHover(false, false, false, false, true);
              }}
              className="cursor-pointer"
            >
              <div className="flex justify-center">
                {" "}
                <a> Support </a>
              </div>
              {supportHover && <RedUnderline />}
            </div>
          </Link>
        </div>
        <div className="md:flex hidden items-center text-sm text-pry-color font-semibold  ">
          <Link passHref href="/freelancing">
            <a className="border border-transparent mx-2 hover:border-pry-color px-2 rounded py-1 ">
              {" "}
              Freelancing{" "}
            </a>
          </Link>{" "}
          <button
            onClick={() => {
              router.push("/join-us");
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
          className="relative md:hidden"
        >
          {" "}
          {!menuIsClicked && (
            <Image
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
          <div
            className={` z-40 duration-200 ${
              menuIsClicked ? "translate-y-0" : "-translate-y-[500px] "
            } absolute right-[5px] top-5`}
          >
            <div
              onClick={() => {
                router.push("/");
              }}
              className="bg-[#ECF1FA] hover:bg-sec-color cursor-pointer duration-300 w-[10rem] p-2  rounded-lg mb-[0.1rem]"
            >
              <p className="text-center text-pry-color font-semibold   ">
                Home
              </p>
            </div>

            <div
              onClick={() => {
                router.push("/about-us");
              }}
              className="bg-[#ECF1FA] hover:bg-sec-color cursor-pointer duration-300 w-[10rem] p-2  rounded-lg mb-[0.1rem]"
            >
              <p className="text-center text-pry-color font-semibold   ">
                About Us
              </p>
            </div>

            <div
              onClick={() => {
                router.push("/post-a-job");
              }}
              className="bg-[#ECF1FA] hover:bg-sec-color cursor-pointer duration-300 w-[10rem] p-2  rounded-lg mb-[0.1rem]"
            >
              <p className="text-center text-pry-color font-semibold   ">
                Post a Job
              </p>
            </div>

            <div
              onClick={() => {
                router.push("/what-we-do");
              }}
              className="bg-[#ECF1FA] hover:bg-sec-color cursor-pointer duration-300 w-[10rem] p-2  rounded-lg mb-[0.1rem]"
            >
              <p className="text-center text-pry-color font-semibold   ">
                What We Do
              </p>
            </div>

            <div
              onClick={() => {
                router.push("/support");
              }}
              className="bg-[#ECF1FA] hover:bg-sec-color cursor-pointer duration-300 w-[10rem] p-2  rounded-lg mb-[0.1rem]"
            >
              <p className="text-center text-pry-color font-semibold   ">
                Support
              </p>
            </div>

            <div
              onClick={() => {
                router.push("/freelancing");
              }}
              className="bg-[#ECF1FA] hover:bg-sec-color cursor-pointer duration-300 w-[10rem] p-2  rounded-lg mb-[0.1rem]"
            >
              <p className="text-center text-pry-color font-semibold   ">
                Freelancing
              </p>
            </div>

            <div
              onClick={() => {
                router.push("/join-us");
              }}
              className="bg-[#ECF1FA] hover:bg-sec-color cursor-pointer duration-300 w-[10rem] p-2  rounded-lg mb-[0.1rem]"
            >
              <p className="text-center text-pry-color font-semibold   ">
                Join Us
              </p>
            </div>
          </div>
        </div>
      </div>
      {megaMenu && <MegaMenu />}
    </div>
  );
}

export default Navbar;

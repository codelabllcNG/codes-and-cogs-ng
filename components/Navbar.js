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
import HireTalentDropdown from "./HireTalentDropdown";
import ApplicationForm from "./career/ApplicationForm";

function Navbar() {
  const router = useRouter();

  const {
    megaMenu,
    setMegaMenu,
    menuIsClicked,
    setMenuIsClicked,
    setTalentToHire,
    setIdOfTalentToHire,
    hireTalentDropdown,
    setHireTalentDropdown,
  } = AllCtx();

  // Hover functions here next
  // const [homeHover, setHomeHover] = useState(true);
  const [hoverUnderline, setHoverUnderline] = useState("");

  

  return (
    <div className={`px-5 md:px-10 lg:px-[110px]`}>
      <MobileNav />
      {/* <ApplicationForm/> */}
      <div className="flex items-center pt-4 justify-between  my-3  ">
        <div
          onClick={() => {
            router.push("/");
          }}
          className=" flex items-center cursor-pointer w-[4rem] 380:w-[5rem] md:w-[6rem]     "
        >
          {" "}
          <Image
            alt="Codes and Cogs logo"
            className=""
            src="/images/logos-and-icons/logo.svg"
            width={180}
            height={172.22} 
          />{" "}
        </div>

        <div className="890:flex hidden  text-pry-color space-x-10  justify-between text-base font-semibold items-center xl:font-bold  xl:text-[22px]">

          <div className='flex justify-between space-x-5'>
          <div onMouseOver={() => {
              setHoverUnderline("about")
              // router.push("/about-us") 
          }} className="cursor-pointer relative">
            <div className="flex justify-center ">
              {" "}
              <a> About Us </a>
            </div>
              <div className='absolute w-full'>
              {hoverUnderline === "about" && <RedUnderline />}
           </div>
            </div>
            
            <div onMouseOver={() => {
            setHoverUnderline("services")
          }} className="cursor-pointer relative">
            <div className="flex justify-center ">
              {" "}
              <a> Services </a>
            </div>
              <div className='absolute w-full'>
              {hoverUnderline === "services" && <RedUnderline />}
           </div>
            </div>
            
            <div onMouseOver={() => {
            setHoverUnderline("support")
          }} className="cursor-pointer relative">
            <div className="flex justify-center ">
              {" "}
              <a> Support </a>
            </div>
              <div className='absolute w-full'>
              {hoverUnderline === "support" && <RedUnderline />}
           </div>
            </div>
          </div>
          
          <div className='flex justify-between items-center space-x-5'>
<button   onClick={() => {
                      setHireTalentDropdown(false);
                      router.push("/join-us")
          }} className='border-2 rounded-md px-4 py-2 border-pry-color hover:bg-gray-50'>Become A Talent</button>
            <div onMouseOver={()=>{setHireTalentDropdown(true)}} onClick={()=>{setHireTalentDropdown(!hireTalentDropdown)}} className='relative'>
            <button  className='border-2 bg-pry-color text-white rounded-md px-4 py-2 border-pry-color hover:bg-opacity-80 hover:border-opacity-80 border-opacity-30'>Hire Tech Talent</button>

             {hireTalentDropdown && <HireTalentDropdown/>}
</div>
          </div>
          
        </div>

        <div
          onClick={() => {
            setMenuIsClicked(!menuIsClicked);
          }}
          className="relative 890:hidden"
        >
          {" "}
          {!menuIsClicked && (
            <Image
              alt="Image alt text"
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

      {/* {megaMenu && <MegaMenu />} */}
    </div>
  );
}

export default Navbar;

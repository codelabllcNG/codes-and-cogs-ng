import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AllCtx from "../util-functions/allCtx";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

function MobileNav() {
  const router = useRouter();

  const { menuIsClicked, setMenuIsClicked } = AllCtx();

  const [whatWeDoExpanded, setWhatWeDoExpanded] = useState(true);

  // const [bg, setBg] = useState("bg-transparent");

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
      className={`md:hidden duration-300 ${
        menuIsClicked ? "-translate-x-0 " : " -translate-x-full "
      } -my-4 w-full h-screen flex   fixed z-[10] overflow-y-hidden
`}
    >
      <div
        className={`w-[60%] sm:w-[50%] h-screen pl-3 pr-3 400:pl-5 pt-10 bg-mid-color shadow-md `}
      >
        <div className="flex mb-8">
          <div className="mr-2">
            <button
              onClick={() => {
                router.push("/post-a-job");
                setMenuIsClicked(false);
              }}
              className="bg-pry-color px-2 text-xs 400:text-base py-1 ring-2 ring-pry-color hover:bg-blue-800 text-white rounded"
            >
              Get Started
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                router.push("/join-us");
                setMenuIsClicked(false);
              }}
              className="border border-gray-300  hover:border-pry-color text-pry-color px-2 rounded py-1 text-xs 400:text-base "
            >
              {" "}
              Freelancing{" "}
            </button>
          </div>
        </div>

        <div className="text-pry-color space-y-4 font-[500] ">
          <div
            onClick={() => {
              router.push("/about-us");
              setMenuIsClicked(false);
            }}
          >
            <button>About Us</button>
          </div>

          <div
            onClick={() => {
              router.push("/post-a-job");
              setMenuIsClicked(false);
            }}
          >
            <button>Post A Job</button>
          </div>

          {/* <div onClick={()=>{setWhatWeDoExpanded(!whatWeDoExpanded)}} className='flex justify-between items-center'>
            <button>What We Do</button> {whatWeDoExpanded ? <HiOutlineChevronDown className='text-xl text-pry-color '/> : <HiOutlineChevronUp className='text-xl text-pry-color '/>}
          </div>
          
          <div className='pl-2 '>
          <div><button>Enterprise Services</button></div>
          <div><button>Solutions</button></div>
          </div> */}

          <div
            className="accordion accordion-flush "
            id="accordionFlushExample"
          >
            <div className="accordion-item  mb-10">
              {" "}
              <h2 className="accordion-header ">
                <button
                  className="accordion-button  relative flex items-center w-full  text-base  text-left border-0 rounded-none transition focus:outline-none !bg-transparent !shadow-none font-sans !text-pry-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                > 
                  What We Do
                </button> 
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse border-0 collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body space-y-4 py-4 px-4 font-normal">
                  <div
                    onClick={() => {
                      router.push("/what-we-do/#enterprise-services");
                      setMenuIsClicked(false);
                    }}
                  >
                    <button>Enterprise Services</button>
                  </div>
                  <div
                    onClick={() => {
                      router.push("/what-we-do/#solution-as-a-service");
                      setMenuIsClicked(false);
                    }}
                  >
                    <button> Solutions</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 h-[2px] -ml-4 -mr-3 "></div>

      

          <div
            onClick={() => {
              router.push("/blog");
              setMenuIsClicked(false);
            }}
          >
            <button>Blog</button>
          </div>

          <div
            onClick={() => {
              router.push("/press-release");
              setMenuIsClicked(false);
            }}
          >
            <button>Press Release</button>
          </div>

          <div
            onClick={() => {
              router.push("/talent-login");
              setMenuIsClicked(false);
            }}
          >
            <button>Talent Login</button>
          </div>

          <div
            onClick={() => {
              router.push("/support");
              setMenuIsClicked(false);
            }}
          >
            <button>Support</button>
          </div>
      
        </div>
      </div>

      <div
        onClick={() => {
          setMenuIsClicked(false);
        }}
        className={`w-[40%]    duration-300  h-screen`}
      ></div>
    </div>
  );
}

export default MobileNav;

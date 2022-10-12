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

  //   useEffect (() => {
  //     window.addEventListener('scroll', ()=>{

  //     })
  // })

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

        <div className="text-pry-color space-y-4 font-semibold ">
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
              setTalentToHire("");
              setIdOfTalentToHire("");
              router.push("/post-a-job");
              setMenuIsClicked(false);
            }}
          >
            <button>Post A Job</button>
          </div>

          <div
            onClick={() => {
              router.push("/search-talents");
              setMenuIsClicked(false);
            }}
          >
            <button>Hire Talent</button>
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
            <div className="accordion-item  ">
              {" "}
              <h2 className="accordion-header ">
                <button
                  onClick={() => {
                    // router.push("/what-we-do");
                    // setMenuIsClicked(false);
                  }}
                  className="accordion-button  relative flex items-center w-full  text-base   text-left border-0 rounded-none transition focus:outline-none !bg-transparent !shadow-none font-sans !text-pry-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Hire Talents
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse border-0 collapse show "
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body space-y-4  px-2 font-[500] text-[0.7rem] 350:text-[0.8rem]">
                 

                  <div>
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample3"
                    >
                    
                    
                      <div className='mt-3'>
                      <button
                        onClick={() => {
                          router.push("/staffing");
                          setMenuIsClicked(false);
                        }}
                        className="text-[0.9rem] font-semibold "
                      >
                        Local Talents
                      </button>
                   </div>
                 
                 
                      <div className='mt-3'>
                      <button
                        onClick={() => {
                          router.push("/search-talents");
                          setMenuIsClicked(false);
                        }}
                        className="text-[0.9rem] font-semibold "
                      >
                        Global Talents
                      </button>
                   </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="accordion accordion-flush "
            id="accordionFlushExample"
          >
            <div className="accordion-item  mb-10">
              {" "}
              <h2 className="accordion-header ">
                <button
                  onClick={() => {
                    router.push("/what-we-do");
                    // setMenuIsClicked(false);
                  }}
                  className="accordion-button  relative flex items-center w-full  text-base   text-left border-0 rounded-none transition focus:outline-none !bg-transparent !shadow-none font-sans !text-pry-color"
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
                className="accordion-collapse border-0 collapse show "
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body space-y-4 py-4 px-2 font-[500] text-[0.7rem] 350:text-[0.8rem]">
                  <div
                  // onClick={() => {
                  //   router.push("/what-we-do/#enterprise-services");
                  //   setMenuIsClicked(false);
                  // }}
                  >
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample2"
                    >
                      <div className="accordion-item  mb-">
                        <h2 className="accordion-header ">
                          <button
                            className="accordion-button  relative flex items-center w-full    text-left border-0 rounded-none transition focus:outline-none !bg-transparent !shadow-none font-sans !text-pry-color text-[0.9rem] font-semibold collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne2"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne2"
                          >
                            Enterprise Packages
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne2"
                          className="accordion-collapse border-0 collapse "
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample2"
                        >
                          <div className="accordion-body  space-y-3 py-4 px-2  font-[500]">
                            <button
                              onClick={() => {
                                router.push(
                                  "/what-we-do/remote-development-services"
                                );
                                setMenuIsClicked(false);
                              }}
                            >
                              Remote Dev Services
                            </button>
                            <br />
                            <button
                              onClick={() => {
                                router.push("/what-we-do/enterprise-packages");
                                setMenuIsClicked(false);
                              }}
                            >
                              Enterprise Packages
                            </button>
                            <br />
                            <button
                              onClick={() => {
                                router.push("/what-we-do/hiring-as-a-service");
                                setMenuIsClicked(false);
                              }}
                            >
                              Hiring as a Service
                            </button>
                            <br />
                            <button
                              onClick={() => {
                                router.push("/what-we-do/training");
                                setMenuIsClicked(false);
                              }}
                            >
                              Training
                            </button>
                            <br />
                            <button
                              onClick={() => {
                                router.push("/what-we-do/global-payroll");
                                setMenuIsClicked(false);
                              }}
                            >
                              Global Payroll
                            </button>
                            <br />
                            <button
                              onClick={() => {
                                router.push("/what-we-do/internship");
                                setMenuIsClicked(false);
                              }}
                            >
                              Internship
                            </button>
                            <br />
                            <button
                              className="!text-left"
                              onClick={() => {
                                router.push(
                                  "/what-we-do/compliance-and-hr-services"
                                );
                                setMenuIsClicked(false);
                              }}
                            >
                              Compliance and HR Services
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample3"
                    >
                      <div className="accordion-item  mb-">
                        <h2 className="accordion-header ">
                          <button
                            className="accordion-button  relative flex items-center w-full    text-left border-0 rounded-none transition focus:outline-none !bg-transparent !shadow-none font-sans !text-pry-color text-[0.9rem] font-semibold collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne3"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne3"
                          >
                            Solutions
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne3"
                          className="accordion-collapse border-0 collapse "
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample3"
                        >
                          <div className="accordion-body space-y-3 py-4 px-2  font-[500]">
                            <button
                              onClick={() => {
                                router.push("/coming-soon");
                                setMenuIsClicked(false);
                              }}
                            >
                              Hackathon
                            </button>
                            <br />
                            <button
                              onClick={() => {
                                router.push("/coming-soon");
                                setMenuIsClicked(false);
                              }}
                            >
                              Infrastructure
                            </button>
                            <br />
                            <button
                              onClick={() => {
                                router.push("/coming-soon");
                                setMenuIsClicked(false);
                              }}
                            >
                              Workspace
                            </button>{" "}
                            <br />
                            <button
                              onClick={() => {
                                router.push("/coming-soon");
                                setMenuIsClicked(false);
                              }}
                            >
                              Salary Estimator
                            </button>
                          </div>
                        </div>
                      </div>
                
                 
              
                    </div>
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

          {/* <div
            onClick={() => {
              router.push("/talent-login");
              setMenuIsClicked(false);
            }}
          >
            <button>Talent Login</button>
          </div> */}

          <div
            onClick={() => {
              router.push("/support");
              setMenuIsClicked(false);
            }}
          >
            <button>Support</button>
          </div>

          <div
            onClick={() => {
              router.push("/faq");
              setMenuIsClicked(false);
            }}
          >
            <button>FAQ</button>
          </div>
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

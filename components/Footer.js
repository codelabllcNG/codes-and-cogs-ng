import React, { useEffect, useRef, useState } from "react";
import AllCtx from "../util-functions/allCtx";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function Footer(props) {
  let router = useRouter();
  const { data } = props;
  
  const [canRun, setCanRun] = useState(false)

  useEffect(() => {  
    setCanRun(true)
    if (canRun) {
    
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/v2.js";
      document.body.appendChild(script);
  
      script.addEventListener("load", () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "22606943",
            formId: "b66e14cd-0804-4916-b219-789cbd466347",
            target: "#newsletter",
          });
        }
      });
  
      return () => { 
        script.removeEventListener('load', () => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "22606943",
              formId: "b66e14cd-0804-4916-b219-789cbd466347",
              target: "#newsletter",
            });
          }
        })
     };
    
  }
  }, [canRun]);

  // const divHeightRef = useRef();

  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //        if(divHeightRef.current) { setSectionSixHeight(divHeightRef.current.clientHeight)}
  //     })
  // },[]) 




  return (
    <section id="footer" className="mt-20">
      <div className="px-5 md:px-20 py-4">
        <div className="flex  justify-center md:mb-2">
          <div
            dangerouslySetInnerHTML={{ __html: "Subscribe to our Newsletter" }}
            className="font-bold header font-larken  "
          >
            {}
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>

        <div className="flex justify-center mb-5">
          <div dangerouslySetInnerHTML={{ __html: "Want in on our exciting offers? Join our community of tech experts to receive exclusive deals and updates"}} className="font-semibold text-pry-color text-center">
            {}
          </div>
        </div>

        <div className="flex items-center justify-center">
        <div id="newsletter" className='w-full sm:w-[70%] md:w-[50%] xl:w-[40%]'>
      
      </div> 


          {/* <div className="flex items-center border-2 border-pry-color px-2 py-1   rounded-full   mr-2   ">
            {" "}
            <p className="text-pry-color font-semibold text-xs">Email</p>
            <input
              type="text"
              className="outline-0 text-center w-full md:text-sm text-xs"
            />
          </div>{" "}
          <div>
            {" "}
            <button className="text-white text-xs  rounded-full border-2 border-pry-color py-1 px-4 md:px-6 bg-pry-color ">
              Subscribe
            </button>{" "}
          </div> */}
        </div>
      </div>

      <div className="bg-[#ECF1FA] md:px-16 py-6 text-pry-color">
        <div className="md:flex px-5 justify-between">
          <div className="flex mb-7 md:mb-0 md:block items-center justify-between">
            <div
              onClick={() => {
                router.push("/");
              }}
              className=" md:flex justify-center md:mb-16 cursor-pointer "
            >
              {" "}
              <Image width={80} height={70}
                alt="Image alt text"
                className="w-20"
                src="/images/logos-and-icons/logo.svg"
              />
            </div>{" "}
            <div className="w-52 md:w-[10rem] flex justify-between  items-center">
            <Link href={"https://www.linkedin.com/company/codes-and-cogs/"}>
          <a rel="noopener noreferrer" target="_blank">
          <Image width={20} height={20}
                  alt="LinkedIn icon"
                  src="/images/logos-and-icons/linkedin.svg"
                />
          </a>
        </Link>

        <Link href={''}>
          <a rel="noopener noreferrer" target="_blank">
          <Image width={20} height={20}
                  alt="Twitter icon"
                  src="/images/logos-and-icons/twitter.svg"
                />
          </a>
        </Link>
      

              <Link href={"https://instagram.com/codesandcogs?igshid=YmMyMTA2M2Y="}>
          <a rel="noopener noreferrer" target="_blank">
          <Image width={20} height={20}
                  alt="Instagram icon"
                  src={"/images/logos-and-icons/instagram.svg"}
                />
          </a>
              </Link>
              
              <Link href={"https://www.facebook.com/Codes-and-Cogs-100895669449690"}>
          <a rel="noopener noreferrer" target="_blank">
          <Image width={20} height={20}
                  alt="Facebook icon"
                  src="/images/logos-and-icons/facebook.svg"
                />
          </a>
        </Link>

        <Link href={""}>
          <a rel="noopener noreferrer" target="_blank">
          <Image width={20} height={20}
                  alt=" YouTube icon"
                  src="/images/logos-and-icons/youtube.svg"
                />
          </a>
        </Link>
           
          
          
            </div>
          </div>
          <div className="grid grid-cols-2 md:flex justify-between md:w-[70%] md:text-xs lg:text-base text-xs 400:text-sm 500:text-base  ">
            <div className=" md:w-[20%] md:space-y-2 space-y-1 md:mb-0 mb-7">
              <button className="font-bold ">CUSTOMERS</button>
              <p
                onClick={() => {
                  router.push("/search-talents");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Hire Talents
              </p>
              {/* <p
                onClick={() => {
                  // router.push("");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Book a Call
              </p> */}
              {/* <p
                onClick={() => {
                  router.push("/customer-reviews");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Customer Reviews
              </p> */}
              {/* <p
                onClick={() => {
                  router.push("/terms-of-service");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Legal{" "}
              </p> */}
              <p
                onClick={() => {
                  router.push("/what-we-do/internship");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Internship{" "}
              </p>
            </div>{" "}
            <div className="  md:w-[25%] md:space-y-2 space-y-1 md:mb-0 mb-7 ">
              <button className="font-bold ">CODES AND COGS</button>
              <p
                onClick={() => {
                  router.push("/about-us");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                About Us
              </p>
              <p
                onClick={() => {
                  router.push("/press-release");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Press Release
              </p>
              <p
                onClick={() => {
                  router.push("/blog");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Blog
              </p>
              <p
                onClick={() => {
                  router.push("/remote-locations");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Our Remote Locations
              </p>
              <p
                onClick={() => {
                  router.push("/coming-soon");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Software Engineering School
              </p>
            </div>{" "}
            <div className="  md:w-[20%] md:space-y-2 space-y-1 md:mb-0 mb-7">
              <button className="font-bold ">DEVELOPERS</button>
              <p
                onClick={() => {
                  router.push("/join-us");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Apply for Jobs
              </p>
              {/* <p     onClick={() => { 
                  // router.push("");
                }} className="cursor-pointer hover:text-red-700">Talent Login</p>{" "} */}
              <p
                onClick={() => {
                  router.push("/about-us/#talent-stories");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Talent Stories  
              </p>
            </div>
            <div className=" md:space-y-2 space-y-1 md:mb-0 mb-7">
              <button className="font-bold ">SOLUTIONS</button>
              <p
                onClick={() => {
                  router.push("/coming-soon");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Hackathon
              </p>
              {/* <p className="cursor-pointer hover:text-red-700">
                Training
              </p>{" "} */}
              <p
                onClick={() => {
                  router.push("/coming-soon");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Infrastructure
              </p>
              <p
                onClick={() => {
                  router.push("/coming-soon");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Workspace
              </p>

              <p
                onClick={() => {
                  router.push("/coming-soon");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Salary Estimator
              </p>

              {/* <p className="cursor-pointer hover:text-red-700">
                Enterprise Packages 
              </p>

              <p className="cursor-pointer hover:text-red-700">
               Remove Dev. Services
              </p> */}
              {/* 
              <p className="cursor-pointer hover:text-red-700">
               Hackathon 
              </p>

              <p className="cursor-pointer hover:text-red-700">
               Infrastructure
              </p>

              <p className="cursor-pointer hover:text-red-700">
             Workspace
              </p>

              <p className="cursor-pointer hover:text-red-700">
             Salary  Estimator
              </p> */}
            </div>
          </div>{" "}
        </div>
        <hr className="border-pry-color border-2 mx-5" />
        <div className="text-center md:flex justify-between text-xs mx-5 mt-3">
          <div className="flex justify-center">
            <p>© 2022 Codes and Cogs. All Rights Reserved.</p>
          </div>{" "}
          <div className="flex justify-center">
            {/* <div className="flex justify-between space-x-3">
              <button
                onClick={() => {
                  router.push("/privacy-policy");
                }}
                className="hover:text-red-700"
              >
                Privacy Policy
              </button>{" "}
              <button
                onClick={() => {
                  router.push("/terms-of-service");
                }}
                className="hover:text-red-700"
              >
                Terms of Service
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}


 
export default Footer;

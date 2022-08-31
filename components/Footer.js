import React, { useEffect, useRef } from "react";
import AllCtx from "../util-functions/allCtx";
import Image from "next/image";
import { useRouter } from "next/router";

function Footer() {
  let router = useRouter();
  // const { setSectionSixHeight, sectionSixHeight } = AllCtx();

  const divHeightRef = useRef();

  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //        if(divHeightRef.current) { setSectionSixHeight(divHeightRef.current.clientHeight)}
  //     })
  // },[])

  return (
    <section id="footer" ref={divHeightRef} className="lg:mt-40">
      <div className="px-5 md:px-20 py-20">
        <div className="flex  md:justify-center md:mb-2">
          <h2 className="font-bold text-xs 400:text-xl font-larken  md:text-3xl">
            Subscribe to our Newsletter
          </h2>
        </div>
        <div className="flex md:justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>

        <div className="flex justify-center mb-5">
          <p className="font-semibold text-pry-color">
            Join our subscribers to receive our latest updates{" "}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center border-2 border-pry-color px-2 py-1   rounded-full   mr-2   ">
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
          </div>
        </div>
      </div>

      <div className="bg-[#ECF1FA] md:px-16 py-6 text-pry-color">
        <div className="md:flex px-5 justify-between">
          <div className="flex mb-7 md:mb-0 md:block items-center justify-between">
            <div     onClick={() => {
                  router.push("/");
                }} className=" md:flex justify-center md:mb-16 cursor-pointer ">
              {" "}
              <img
                className="w-20"
                src="/images/logos-and-icons/footer-logo.svg"
                alt=""
              />
            </div>{" "}
            <div className="w-52 md:w-[10rem] flex justify-between  items-center">
              <div className="md:w-5">
                <img src="/images/logos-and-icons/twitter.svg" alt="" />
              </div>
              <div className="md:w-5">
                <img src="/images/logos-and-icons/instagram.svg" alt="" />
              </div>
              <div className="md:w-5">
                <img src="/images/logos-and-icons/facebook.svg" alt="" />
              </div>
              <div className="md:w-5">
                <img src="/images/logos-and-icons/youtube.svg" alt="" />
              </div>
              <div className="md:w-5">
                <img src="/images/logos-and-icons/linkedin.svg" alt="" />
              </div>
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
              <p
                onClick={() => {
                  // router.push("");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Book a Call
              </p>
              {/* <p
                onClick={() => {
                  router.push("/customer-reviews");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Customer Reviews
              </p> */}
              <p
                onClick={() => {
                  // router.push("/legal");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Legal{" "}
              </p>
              <p
                onClick={() => {
                  router.push("/what-we-do/#internship");
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
              <p     onClick={() => {
                  router.push("/join-us");
                }} className="cursor-pointer hover:text-red-700">
                Apply for Jobs
              </p>
              <p     onClick={() => {
                  // router.push("");
                }} className="cursor-pointer hover:text-red-700">Talent Login</p>{" "}
              <p     onClick={() => {
                  router.push("/about-us/#talent-stories");
                }} className="cursor-pointer hover:text-red-700">
                Talent Stories
              </p>
            </div>
            <div className=" md:space-y-2 space-y-1 md:mb-0 mb-7">
              <button className="font-bold ">SOLUTIONS</button>
              <p
                onClick={() => {
                  router.push("/what-we-do/#hackathon");
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
                  router.push("/what-we-do/#infrastructure");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Infrastructure
              </p>
              <p
                onClick={() => {
                  router.push("/what-we-do/#workspace");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Workspace
              </p>

              <p
                onClick={() => {
                  router.push("/what-we-do/#salary-estimator");
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
            <div className="flex justify-between space-x-3">
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
                  // router.push("/terms-of-service");
                }}
                className="hover:text-red-700"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

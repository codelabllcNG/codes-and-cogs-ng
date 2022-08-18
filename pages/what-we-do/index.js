import React from "react";
import Image from "next/image";
import Link from "next/link";
import BotIcon from "../../components/BotIcon";
import {
  selectedService,
  SERVICES,
  SOLUTIONS,
} from "../../a-store/content-store/WHAT-WE-DO";

function Services() {
  return (
    <div className="px-5 ">
      <div className="900:bg-[url('/images/services-bg.png')]  bg-cover bg-center bg-no-repeat pt-16 900:pb-16   900:mb-16">
        <div className="900:px-14  mb-5 -mt-10 ">
          {" "}
          <h1 className="font-bold text-3xl">What We Do</h1>
        </div>
        <div className="mb-5 900:px-14">
          <p>
            Unlike our competitors we mean it when we say “We got your back”{" "}
          </p>
        </div>

        <div className="900:px-14 flex space-x-5 mt-7  items-center mb-6">
          {" "}
          <Image
            src="/images/logos-and-icons/enterprise.png"
            width="35"
            height="35"
          />{" "}
          <Link passHref href={`#enterprise-services`}>
            <button className="font-semibold text-pry-color hover:text-blue-600">
              Enterprise Services
            </button>
          </Link>{" "}
        </div>

        <div className="900:px-14 flex space-x-5 items-center mb-4">
          {" "}
          <Image
            src="/images/logos-and-icons/solutions.png"
            width="35"
            height="35"
          />{" "}
          <Link passHref href={`#solution-as-a-services`}>
            <button className="font-semibold text-pry-color hover:text-blue-600">
              Solution As A Service
            </button>
          </Link>{" "}
        </div>

        <div className="px-14 mt-16">
          {" "}
          <BotIcon />
        </div>
      </div>

      <div id="enterprise-services" className="mb-10">
        <div className="flex  md:justify-center mb-2">
          <h2 className="font-bold text-3xl">Enterprise Services</h2>
        </div>
        <div className="flex md:justify-center mb-3 ">
          <div className=" [150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {SERVICES.map((service, i) => (
        <div key={service.id} className="mb-20" id={`${service.id}`}>
          <div className="flex  md:justify-center mb-2">
            <h2 className="font-bold text-2xl">{service.title}</h2>
          </div>
          {/* <div className="flex md:justify-center mb-3 ">
          <div className=" [150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            /> 
          </div>
    </div> */}

          <div className="mb-5">
            <p className="text-center">{service.subTitle}</p>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`sm:w-[55%] text-justify  mb-5 sm:mb-0 text-pry-color `}
            >
              <p className="sm:leading-10  ">{service.body}</p>
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <img className="w-300px" src={service.imageUrl} alt="" />
            </div>
          </div>
        </div>
      ))}

      <div id="solution-as-a-services" className="mb-10 ">
        <div className="flex  md:justify-center mb-2">
          <h2 className="font-bold text-3xl">Solution As A Service</h2>
        </div>
        <div className="flex md:justify-center mb-3 ">
          <div className=" [150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {SOLUTIONS.map((service, i) => (
        <div key={service.id} className="mb-20" id={`${service.id}`}>
          <div className="flex  md:justify-center mb-2">
            <h2 className="font-bold text-2xl">{service.title}</h2>
          </div>
          {/* <div className="flex md:justify-center mb-3 ">
          <div className=" [150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            /> 
          </div>
    </div> */}

          <div className="mb-5">
            <p className="text-center">{service.subTitle}</p>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`sm:w-[55%] text-justify  mb-5 sm:mb-0 text-pry-color `}
            >
              <p className="sm:leading-10  ">{service.body}</p>
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <img className="w-300px" src={service.imageUrl} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;

import React from "react";
import Image from "next/image";
import AllCtx from "../util-functions/allCtx";
import { useRouter } from "next/router";



function MegaMenu() {
const router = useRouter();

  const {
    servicesClicked,
    solutionsClicked,
    setMegaMenuTab,
    megaMenu,
    setMegaMenu,
  } = AllCtx();

  return (
    <div
      onMouseLeave={() => {
        setMegaMenu(false);
      }}
      className="hidden  z-[10] absolute w-auto  md:flex  text-xs font-semibold text-blue-900 rounded-lg bg-white shadow-md  top-[5rem]  ml-[10%] 900:ml-[15%] 1000:ml-[20%] 1130:ml-[25%] 1200:ml-[30%]  "
    >
      <div className="w-[30%] space-y-5 p-5 font-bold">
        <div>
          <p className="select-none text-gray-700  ">Services</p>
        </div>
        <div
          onClick={() => {
            setMegaMenuTab(true, false);
          }}
        >
          <p
            className={`cursor-pointer ${
              !servicesClicked ? "font-normal" : ""
            }`}
          >
            Enterprise Services
          </p>
        </div>
        <div
          onClick={() => {
            setMegaMenuTab(false, true);
          }}
        >
          <p
            className={`cursor-pointer ${
              !solutionsClicked ? "font-normal" : ""
            }`}
          >
            Solutions
          </p>
        </div>
      </div>

      {/* SERVICES MEGA MENU  */}
      {servicesClicked && (
        <div className="w-[500px] h-[18rem] rounded-r-lg grid grid-cols-2 bg-mid-color    p-5 ">
          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/mega1.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => {router.push('/what-we-do/#global-payroll')}}>Global Payroll</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/mega2.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => {router.push('/what-we-do/#training')}}>Training</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/mega3.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#hiring-as-a-service') }}>Hiring as a Service</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/mega4.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#internship') }}>Internship</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/mega5.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#conpliance-and-hr-services') }}>Compliance and HR Services</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/mega6.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#enterprise-packages') }}>Enterprise Packages</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/mega7.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#remote-development-services') }}>Remote Development Services</p>
            </div>
          </div>
        </div>
      )}

      {/* SOLUTIONS MEGA MENU TAB  */}

      {solutionsClicked && (
        <div className="w-[500px] h-[18rem] rounded-r-lg grid grid-cols-2 bg-mid-color    p-5 ">
          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/solution1.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#hackathon') }}>Hackathon</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/solution2.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#infrastructure') }}>Infrastructure</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/solution3.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#workspace') }}>Workspace</p>
            </div>
          </div>

          <div className="flex items-center  hover:text-blue-600 cursor-pointer">
            <div>
              <Image
                src="/images/logos-and-icons/solution4.png"
                width="55"
                height="55"
              />{" "}
            </div>
            <div>
              <p onClick={() => { router.push('/what-we-do/#salary-estimator') }}>Salary Estimator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaMenu;

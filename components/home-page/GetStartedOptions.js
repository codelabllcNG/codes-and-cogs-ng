import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AllCtx from "../../util-functions/allCtx";

function GetStartedOptions(props) {
  const router = useRouter();
  const { showApplicationForm, setShowApplicationForm } = AllCtx();
  const { selectedVacancy } = props;

  // document.body.style.overflow = "hidden"

  const [selectedOption, setSelectedOption] = useState("");

  return (
    showApplicationForm && (
      <div className="  flex justify-center items-center h-auto pb-32 w-full bg-black bg-opacity-50  -ml-5 md:-ml-10 lg:-ml-16 z-[10]  absolute -mt-32 pt-32">
        <div className=" w-[90%] md:w-[75%] h-auto  bg-white z-[11]  rounded-xl shadow-lg p-5 md:p-8 relative ">
          <div className=" text-center font-bold text-black md:text-[35px] text-lg">
            <p>
              {" "}
              Join us as a <span className="text-pry-color">
                Client
              </span> or <span className="text-pry-color">Talent</span>
            </p>
          </div>

          <div className="text-center font-medium md:text-[18px] text-base mt-2 ">
            Pick a category to get started
          </div>

          {/* <hr className="-mx-2 md:-mx-5 my-4 border" /> */}

          <div className="flex space-x-4 justify-center mt-10 ">
            <div
              onClick={() => {
                setSelectedOption("client");
              }}
              className="bg-[#ededed] rounded-lg p-5 cursor-pointer select-none w-[40%]"
            >
              <div className="flex justify-between">
                <Image
                  className=""
                  alt="Client icon"
                  src="/images/client-get-started.svg"
                  width={80}
                  height={80}
                />

                <div
                  className={`h-8 w-8 ${
                    selectedOption === "client" ? "bg-pry-color" : ""
                  } border border-pry-color  rounded-full `}
                ></div>
              </div>

              <p className="mt-4 font-medium">
                I am a client <span className="text-pry-color">HIRING</span>{" "}
                talents for a project
              </p>
            </div>

            <div
              onClick={() => {
                setSelectedOption("talent");
              }}
              className="bg-[#ededed] rounded-lg p-5 cursor-pointer select-none w-[40%]"
            >
              <div className="flex justify-between">
                <Image
                  className=""
                  alt="Talent icon"
                  src="/images/talent-get-started.svg"
                  width={80}
                  height={80}
                />

                <div
                  className={`h-8 w-8 ${
                    selectedOption === "talent" ? "bg-pry-color" : ""
                  } border border-pry-color  rounded-full `}
                ></div>
              </div>

              <p className="mt-4 font-medium">
                I am a <span className="text-pry-color">TALENT</span> looking
                for some work
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 mb-10">
            <button
              onClick={() => {
                selectedOption === "client"
                  ? router.push("/search-talents")
                  : selectedOption === "talent"
                  ? router.push("/join-us")
                  : null;
                setShowApplicationForm(false);
              }}
              disabled={!selectedOption}
              className="w-1/2 bg-pry-color text-white font-semibold rounded-lg py-2"
            >
              Continue
            </button>
          </div>

          <button
            onClick={() => {
              setShowApplicationForm(false);
            }}
            className="absolute 
             bottom-5 right-5 px-2 py-1 shadow-md md:px-x text-xs rounded-lg bg-pry-color text-white "
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default GetStartedOptions;

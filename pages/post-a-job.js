import React, { useRef } from "react";
import BotIcon from "../components/BotIcon";

function PostAJob() {
  const nameRef = useRef();
  const emailRef = useRef();
  const engineerRef = useRef();
  const descriptionRef = useRef();

  function submitRequirement(e) {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    const engineerInput = engineerRef.current.value;
    const descriptionInput = descriptionRef.current.value;

    console.log(nameInput, emailInput, engineerInput, descriptionInput);
  }

  return (
    <div className="px-5 md:px-14   md:bg-[url('/images/post-job-bg.png')]  bg-cover bg-bottom bg-no-repeat">
      <div className="mb-5">
        <p className="font-semibold text-gray-700 md:text-xl">
          Post your requirements and get a perfect fit
        </p>
      </div>

      <form
        onSubmit={submitRequirement}
        className="py-5 bg-mid-color rounded-3xl px-4 sm:px-8 md:w-[50%] mb-10"
      >
        <div className="mb-5">
          <div>
            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Name
            </p>
          </div>
          <div>
            <input
              ref={nameRef}
              className="w-full h-[2rem] text-sm focus:outline outline-1 outline-blue-900 rounded-lg px-3"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="mb-5">
          <div>
            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Email Address
            </p>
          </div>
          <div>
            <input
              ref={emailRef}
              className="w-full h-[2rem] text-sm focus:outline outline-1 outline-blue-900 rounded-lg px-3"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="mb-5">
          <div>
            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Type of Engineer
            </p>
          </div>
          <div>
            <select
              ref={engineerRef}
              className="w-full h-[2rem] text-sm   focus:outline outline-1 outline-blue-900 rounded-lg px-3"
              type="text"
              name=""
              id=""
            >
              <option className="w-1/2 " value=""></option>

              <option className="w-1/2 " value="web">
                Web Engineer
              </option>

              <option className="w-1/2 " value="web">
                Mobile Engineer
              </option>

              <option className="w-1/2 " value="web">
                Database Engineer
              </option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <div>
            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Project Description
            </p>
          </div>
          <div>
            <textarea
              ref={descriptionRef}
              //   required
              rows={5}
              className="w-full resize-none invalid:outline-red-600  focus:outline outline-1 outline-blue-900 rounded-lg px-3"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>

        <div className=" text-center font-bold">
          <button
            type="submit"
            className="bg-pry-color text-white h-[2.5rem] w-full rounded-lg sm:text-lg hover:bg-opacity-80"
          >
            Submit Requirement
          </button>
        </div>
      </form>

      <BotIcon />
    </div>
  );
}

export default PostAJob;

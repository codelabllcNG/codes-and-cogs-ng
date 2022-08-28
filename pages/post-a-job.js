import Head from "next/head";
import React, { useRef, useState } from "react";
import BotIcon from "../components/BotIcon";

 function PostAJob() {

  const [posting, setPosting] = useState(false) 
  const [response, setResponse] = useState('') 


  const nameRef = useRef();
  const emailRef = useRef();
  const durationRef = useRef();
  const engineerRef = useRef();
  const descriptionRef = useRef();

  async function submitRequirement(e) {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    const durationInput = durationRef.current.value
    const engineerInput = engineerRef.current.value;
    const descriptionInput = descriptionRef.current.value;

    if (
      !nameInput ||
      nameInput.trim() === "" ||
      !durationInput ||
      durationInput.trim() === "" ||
      !emailInput ||
      emailInput.trim() === "" ||
      !engineerInput ||
      engineerInput.trim() === "" ||
      !descriptionInput ||
      descriptionInput.trim() === "" 
    ) {
      setResponse("Fill all inputs!");
      return;
    }

    try {
      setResponse("Posting a job...");
      setPosting(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/postjobrequest`,
        {
          method: "POST",
          body: JSON.stringify({
            name: nameInput,
            email: emailInput,
            engineer: engineerInput,
            description: descriptionInput,
            duration: durationInput,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.status === "error") {
        setResponse(data.message);
        console.log(data.message);
        setPosting(false);
        return;
      }

      if (!response.ok) {
        setResponse("Something went wrong, retry!");
        console.log(data);
        setPosting(false);
        return;
      }


   
      setResponse("Job posted successfully! You will be contacted very soon.");
      console.log("Job posted successfully! You will be contacted very soon.");
      console.log(data);
      // nameRef.current.value = "";
      // emailRef.current.value = "";
      // durationRef.current.value = "";
      // descriptionRef.current.value = "";
      // engineerRef.current.value = "";

      setPosting(false);
      // router.push("/take-a-test");
    } catch (error) {
      console.log(error);
      setResponse("Error, failed to post a job.");
      setPosting(false);
    }
  }

  return (
    <div className="px-5 md:px-14   md:bg-[url('/images/post-job-bg.png')]  bg-cover bg-bottom bg-no-repeat">
      <Head>
        <title>Post Your Job - Codes and Cogs</title>
        <meta
          name="description"
          content="Post your job requirements to Codes and Cogs and be attended to in a jiffy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <p className="text-xs mb-1 md:text-sm font-semibold text-gray-500">
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
            <p className="text-xs mb-1 md:text-sm font-semibold text-gray-500">
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
            <p className="text-xs mb-1 md:text-sm font-semibold text-gray-500">
              Proposed Duration
            </p>
          </div>

          <div>
            <input
              ref={durationRef}
              placeholder="e.g three months"
              className="w-full h-[2rem] text-sm focus:outline outline-1 outline-blue-900 rounded-lg px-3"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="mb-5">
          <div>
            <p className="text-xs mb-1 md:text-sm font-semibold text-gray-500">
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
            <p className="text-xs mb-1 md:text-sm font-semibold text-gray-500">
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

        <div
              className={`h-9 text-sm flex justify-center  ${
                response.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              <p>{response}</p>
            </div>

        <div className=" text-center font-bold">
          <button
            type="submit"
            className={`bg-pry-color ${posting ? 'bg-gray-400 pointer-events-none' : ''} text-white h-[2.5rem] w-full rounded-lg sm:text-lg hover:bg-opacity-80`}
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

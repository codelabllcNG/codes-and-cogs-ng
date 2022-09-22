import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import BotIcon from "../components/BotIcon";
import SectionBanner from "../components/SectionBanner";
import AllCtx from "../util-functions/allCtx";


function PostAJob(props) {
  const {
    talentToHire,
    setTalentToHire,
    idOfTalentToHire,
    setIdOfTalentToHire,
  } = AllCtx();



  const {title,
    engineerType,
    bgImage,} = props

  const [posting, setPosting] = useState(false);
  const [response, setResponse] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const durationRef = useRef();
  const engineerRef = useRef();
  const descriptionRef = useRef();

  async function submitRequirement(e) {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    const durationInput = durationRef.current.value;
    const engineerInput = engineerRef.current?.value || "I chose a talent.";
    const descriptionInput = descriptionRef.current.value;

    if (
      !nameInput ||
      nameInput.trim() === "" ||
      !durationInput ||
      durationInput.trim() === "" ||
      !emailInput ||
      emailInput.trim() === "" ||
      !descriptionInput ||
      descriptionInput.trim() === ""
    ) {
      setResponse("Fill all inputs!");
      return;
    }

    try {
      talentToHire
        ? setResponse("Sending request...")
        : setResponse("Posting a job...");
      setPosting(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/postjobrequest`,
        {
          method: "POST",
          body: JSON.stringify({
            name: nameInput,
            email: emailInput,
            engineer: engineerInput,
            description: descriptionInput,
            duration: durationInput,
            talentToHire: idOfTalentToHire,
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

      talentToHire
        ? setResponse(
            `Request to hire ${talentToHire} sent successfully. You will be contacted soon.`
          )
        : setResponse(
            "Job posted successfully! You will be contacted very soon."
          );
      talentToHire
        ? console.log(
            `Request to hire ${talentToHire} sent successfully. You will be contacted soon.`
          )
        : console.log(
            "Job posted successfully! You will be contacted very soon."
          );
      console.log(data);
      nameRef.current.value = "";
      emailRef.current.value = "";
      durationRef.current.value = "";
      descriptionRef.current.value = "";
      talentToHire ? "" : (engineerRef.current.value = "");
      setTalentToHire("");
      setIdOfTalentToHire("");
      setPosting(false);
      // router.push("/take-a-test");
    } catch (error) {
      console.log(error);
      setResponse("Error, failed to post a job.");
      setPosting(false);
    }
  }

  return (
    <div className=' px-5 md:px-10 lg:px-16'>
      <Head>
        <title>Post Your Job - Codes and Cogs</title>
        <meta
          name="description"
          content="Post your project requirements to Codes and Cogs and be attended to in a jiffy."
        />

<meta
          property="og:url"
          content={`https://www.codesandcogs.com/post-a-job`}
        />

        <meta property="og:title" content="Post Your Job - Codes and Cogs" />
        <meta
          property="og:description"
          content="Post your job requirements to Codes and Cogs and be attended to in a jiffy."
        />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="flex text-center justify-center mb-2">
        <h2 className="font-bold header">Submit Requirement</h2>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className=" [150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div> */}

      <div className="flex   890:space-x-2 "
      
      >
        <div className='w-full 890:w-1/2'>
        <div className="my-5">
        <p className="font-semibold text-gray-700 text-xl font-larken 890:text-2xl lg:text-4xl lg:leading-relaxed">
          {talentToHire
            ? `Submit a request to hire ${talentToHire}`
            : "   Post your requirements and get a perfect fit"}
        </p>
      </div>

      <form
        onSubmit={submitRequirement}
        className="py-5 bg-mid-color rounded-3xl px-4 sm:px-8  mb-10"
      >
        <div className="mb-5">
          <div>
            <p className="text-xs mb-1 md:text-sm font-semibold text-gray-500">
              Your Name
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

        {talentToHire ? (
          <div disabled className="mb-5 ">
            <div>
              <p className="text-xs mb-1 md:text-sm font-semibold text-gray-500">
                Talent to Hire
              </p>
            </div>

            <div>
              <input
                // ref={}
                defaultValue={talentToHire}
                className="w-full h-[2rem] text-sm focus:outline outline-1 outline-blue-900 rounded-lg px-3"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        ) : (
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

             {engineerType.map(engineer =>    <option key={engineer} className="w-1/2 " value={engineer}>
                 {engineer}
                </option>)}

              
             
              </select>
            </div>
          </div>
        )}

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

        <div className=" mt-3 text-center font-bold">
          <button 
            type="submit"
            className={`bg-pry-color ${
              posting ? "bg-gray-400 pointer-events-none" : ""
            } text-white h-[2.5rem] w-full rounded-lg sm:text-lg hover:bg-opacity-80`}
          >
            {talentToHire ? "Hire Talent" : "Submit Requirement"}
          </button>
        </div>
      </form>
        </div> 

        {/* <div className="hidden  890:flex w-1/2   890:bg-cover 890:bg-center 890:bg-no-repeat"
          // md:bg-[url('/images/post-a-job-bg.png')]
          style={{ backgroundImage: `url(${bgImage})` }}
        >

        </div> */}

        <div className="890:w-1/2 z-[-1]  hidden 890:flex  absolute right-0 ">
          <Image alt='Hero image' width={1039} height={1100} src={ bgImage} />
        </div>
        

        
  </div>

  <SectionBanner bgUrl={"/images/post-a-job-banner.webp"} title={"Get connected to highly skilled tech experts in 3 days."} btnText={"See More"} btnUrl={"/search-talents"} />

      <BotIcon />
    </div>
  );
}

export async function getStaticProps() {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/jobrequest`
  );
  const data = await response.json();

  const title = data.jobRequestTitle;
  const engineerType = data.jobRequestEngineerType;
  const bgImage = data.JobRequestBgImage 
  

  return {
    props: {
      title,
      engineerType,
      bgImage,
    },
    revalidate: 300,
  };
}

export default PostAJob;


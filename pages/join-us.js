import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AllCtx from "../util-functions/allCtx";

function JoinUS(props) {
  let router = useRouter();

  const { title, subtitle, videoUrl, testRoles, testCategories } = props;

  const { testData, setTestData, setCountDownTimer, setExpiryTime } = AllCtx();

  const [response, setResponse] = useState("");
  const [fetchingQuestions, setFetchingQuestions] = useState(false);

  const [confirmBox, setConfirmBox] = useState(false);
  // const [countDownTimer, setCountDownTimer] = useState('__ : __ : __')

  


  useEffect(() => {
    if (testData) {
      router.push("/take-a-test");
    }
  }, []);

  useEffect(() => {
    confirmBox
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [confirmBox]);



  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const categoryRef = useRef();
  const roleRef = useRef(); 

  async function triggerConfirmBox(e) {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    const phoneInput = phoneRef.current.value;
    const categoryInput = categoryRef.current.value;
    const roleInput = roleRef.current.value;

    if (
      !nameInput ||
      nameInput.trim() === "" ||
      !phoneInput ||
      phoneInput.trim() === "" ||
      !emailInput ||
      emailInput.trim() === "" ||
      !categoryInput ||
      categoryInput.trim() === "" ||
      !roleInput ||
      roleInput.trim() === ""
    ) {
      setResponse("Fill all inputs!");
      return;
    }

    setConfirmBox(true);
  } 

  async function takeTest(e) {
    try {
      const nameInput = nameRef.current.value;
      const emailInput = emailRef.current.value;
      const phoneInput = phoneRef.current.value;
      const categoryInput = categoryRef.current.value;
      const roleInput = roleRef.current.value;

      setConfirmBox(false);
      setResponse("Fetching questions...");
      setFetchingQuestions(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/getquestions`,
        {
          method: "POST",
          body: JSON.stringify({
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            category: categoryInput,
            role: roleInput,
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
        setFetchingQuestions(false);

        return;
      }
 
      if (!response.ok) {
        setResponse("Something went wrong, retry!");
        console.log(data);
        setFetchingQuestions(false);

        return;
      }

      setTestData(data);
      setExpiryTime(new Date(`${data.expireTime}`).setMinutes(new Date(`${data.expireTime}`).getMinutes() - 1))
      setResponse("Test questions fetched successfully!");
      console.log("Test questions fetched successfully!");
      // console.log(data);
      // nameRef.current.value = "";
      // emailRef.current.value = "";
      // phoneRef.current.value = "";
      // categoryRef.current.value = "";
      // roleRef.current.value = "";

      setFetchingQuestions(false);

      router.push("/take-a-test");
    } catch (error) {
      console.log(error);
      setResponse("Error, failed to apply for test.");
      setFetchingQuestions(false);
    }
  }

  // async function takeDemoTest() {
  //   try {
   
  //     setResponse("Fetching questions...");
  //     setFetchingQuestions(true);
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/getquestions`,
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: nameInput,
  //           email: emailInput,
  //           phone: phoneInput,
  //           category: categoryInput,
  //           role: roleInput,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await response.json();

  //     if (data.status === "error") {
  //       setResponse(data.message);
  //       console.log(data.message);
  //       setFetchingQuestions(false);

  //       return;
  //     }
 
  //     if (!response.ok) {
  //       setResponse("Something went wrong, retry!");
  //       console.log(data);
  //       setFetchingQuestions(false);

  //       return;
  //     }

  //     setTestData(data);
  //     setExpiryTime(new Date(`${data.expireTime}`).setMinutes(new Date(`${data.expireTime}`).getMinutes() - 1))
  //     setResponse("Test questions fetched successfully!");
  //     console.log("Test questions fetched successfully!");
  //     // console.log(data);
  //     // nameRef.current.value = "";
  //     // emailRef.current.value = "";
  //     // phoneRef.current.value = "";
  //     // categoryRef.current.value = "";
  //     // roleRef.current.value = "";

  //     setFetchingQuestions(false);

  //     router.push("/take-a-test");
  //   } catch (error) {
  //     console.log(error);
  //     setResponse("Error, failed to apply for test.");
  //     setFetchingQuestions(false);
  //   }
  // }

  return (
    <div>
      <Head>
        <title>Join Codes and Cogs</title>
        <meta
          name="description"
          content="Work In our world class facility, collaborate with some of the best developers and engineers around the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CONFIRM BOX */}
      {confirmBox && (
        <div className="flex justify-center items-center -my-40 h-screen w-full overflow-hidden bg-black bg-opacity-30 fixed z-30 ">
          <div
            className="w-[70%] bg-white h-1/3 rounded-md shadow-md shadow-pry-color p-5
        "
          >
            <div>
              <p className="text-pry-color 400:text-xl font-semibold">
                Hello {nameRef.current?.value}, this is the real test. Once you
                continue, your time starts immediately.{" "}
              </p>
            </div>

            <div className="mt-12">
              <div className="flex justify-center text-center mb-2 text-lg font-semibold">
                <p>Do you want to take the test now?</p>
              </div>
              <div className="flex justify-center space-x-5">
                <button
                  onClick={takeTest}
                  className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                >
                  YES
                </button>{" "}
                <button
                  onClick={() => {
                    setConfirmBox(false);
                  }}
                  className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
{/* PAGE CONTENT */}
      <div className="md:bg-[url('/images/sections-watermark.png')] bg-cover bg-right-bottom  px-5 md:px-10 bg-no-repeat">
        <div className="flex  justify-center md:mb-2">
          <h2 className="font-bold text-xs 400:text-xl  md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>

        <div className="flex justify-center px-5 md:px-14">
          <video
            // width="400"
            height="250"
            controls
            // autoPlay
            loop
            // muted
            className="rounded-lg mb-2 h-auto w-[80%]  "
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className=" text-center flex justify-center px-5 md:px-14">
          <p className="text-sm  w-[80%] text-pry-color">{subtitle}</p>
        </div>

        <div>
          <div className="px-5 md:px-14 mt-5 justify-center flex decoration-blue-600 underline text-cyan-400 font-semibold ">
            {" "}
            <Link passHref href="#take-a-test">
              <a> Fill in your details to take a test!</a>
            </Link>
          </div>
          <p className="text-center font-semibold mt-2">OR</p>

          <div className="px-5 md:px-14 mt-2 justify-center flex decoration-blue-600 underline text-cyan-400 font-semibold ">
            {" "}
            <Link passHref href="">
              <a>Take a demo test.</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:bg-[url('/images/sections-watermark.png')] bg-cover bg-right-bottom  bg-no-repeat">
        <div
          id="take-a-test"
          className="mb-5 mt-16 px-5 md:px-14 flex justify-center font-bold text-pry-color md:text-2xl"
        >
          <p>Fill Your Details</p>
        </div>

        <div className="flex justify-center px-5 md:px-14">
          <form
            onSubmit={triggerConfirmBox}
            className="py-5 bg-mid-color rounded-3xl px-4 sm:px-8 md:w-[80%] w-full mb-10"
          >
            <div className="mb-5">
              <div className="flex space-x-2 items-center text-center">
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  Full Name
                </p>
                <p className="text-red-500">&#9733;</p>
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
              <div className="flex space-x-2 items-center text-center">
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  Email Address
                </p>{" "}
                <p className="text-red-500">&#9733;</p>
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
              <div className="flex space-x-2 items-center text-center">
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  Phone Number
                </p>{" "}
                <p className="text-red-500">&#9733;</p>
              </div>
              <div>
                <input
                  ref={phoneRef}
                  className="w-full h-[2rem] text-sm   focus:outline outline-1 outline-blue-900 rounded-lg px-3"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="flex space-x-2 items-center text-center">
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  Test Category
                </p>{" "}
                <p className="text-red-500">&#9733;</p>
              </div>
              <div>
                <select
                  ref={categoryRef}
                  className="w-full h-[2rem] text-sm   focus:outline outline-1 outline-blue-900 rounded-lg px-3"
                  type="text"
                  name=""
                  id=""
                >
                  <option className="w-1/2 " value=""></option>

                  {testCategories.map((category) => (
                    <option
                      key={category.id}
                      className="w-1/2 "
                      value={category.name}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex space-x-2 items-center text-center">
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  Role
                </p>{" "}
                <p className="text-red-500">&#9733;</p>
              </div>
              <div>
                <select
                  ref={roleRef}
                  className="w-full h-[2rem] text-sm   focus:outline outline-1 outline-blue-900 rounded-lg px-3"
                  type="text"
                  name=""
                  id=""
                >
                  <option className="w-1/2 " value=""></option>

                  {testRoles.map((role) => (
                    <option key={role} className="w-1/2 " value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                  ))}
                </select>
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
                className={`bg-pry-color text-white h-[2.5rem] w-full rounded-lg sm:text-lg hover:bg-opacity-80 ${
                  fetchingQuestions ? "bg-gray-400 pointer-events-none" : ""
                }`}
              >
                Take Test
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/getstartedpage`
  );
  const data = await response.json();

  const title = data.title;
  const subtitle = data.subtitle;
  const videoUrl = data.videoUrl;
  const testRoles = data.testRoles;
  const testCategories = data.testCategories;

  return {
    props: {
      title,
      subtitle,
      videoUrl,
      testRoles,
      testCategories,
    },
    revalidate: 300,
  };
}

export default JoinUS;

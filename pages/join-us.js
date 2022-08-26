import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AllCtx from "../util-functions/allCtx";

function JoinUS(props) {
  let router = useRouter();

  const { title, subtitle, videoUrl } = props;

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const categoryRef = useRef();
  const roleRef = useRef();

  function takeATest(e) {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    const phoneInput = phoneRef.current.value;
    const categoryInput = categoryRef.current.value;
    const roleInput = roleRef.current.value;

    console.log(nameInput, emailInput, phoneInput, categoryInput, roleInput);

    router.push("/take-a-test");
  }



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

      <div className="md:bg-[url('/images/sections-watermark.png')] bg-cover bg-right-bottom  px-5 md:px-10 bg-no-repeat">
        <div className="flex  md:justify-center md:mb-2">
          <h2 className="font-bold text-xs 400:text-xl  md:text-3xl">
            {title}
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

        <div className="px-5 md:px-14 mt-5 justify-center flex decoration-blue-600 underline text-cyan-400 font-semibold ">
          {" "}
          <Link passHref href="#take-a-test">
            <a> Take a test now!</a>
          </Link>
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
            onSubmit={takeATest}
            className="py-5 bg-mid-color rounded-3xl px-4 sm:px-8 md:w-[80%] w-full mb-10"
          >
            <div className="mb-5">
              <div className="flex space-x-2 items-center text-center">
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  Name
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

                  <option className="w-1/2 " value="web">
                    Category1
                  </option>

                  <option className="w-1/2 " value="web">
                    Category2
                  </option>

                  <option className="w-1/2 " value="web">
                    Category3
                  </option>
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

                  <option className="w-1/2 " value="web">
                    Role1
                  </option>

                  <option className="w-1/2 " value="web">
                    Role2
                  </option>

                  <option className="w-1/2 " value="web">
                    Role3
                  </option>
                </select>
              </div>
            </div>

            <div className=" text-center font-bold">
              <button
                type="submit"
                className="bg-pry-color text-white h-[2.5rem] w-full rounded-lg sm:text-lg hover:bg-opacity-80"
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
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/getstartedpage`
  );
  const data = await response.json();

  const title = data.title;
  const subtitle = data.subtitle;
  const videoUrl = data.videoUrl;

  return {
    props: {
      title,
      subtitle,
      videoUrl,
    },
    revalidate: 300,
  };
}

export default JoinUS;

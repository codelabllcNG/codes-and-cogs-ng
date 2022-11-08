import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import HeaderBanner from "../components/HeaderBanner";
import Banner from "../components/staffing/Banner";
import Section1 from "../components/staffing/Section1";
import Section2 from "../components/staffing/Section2";
import Section3 from "../components/staffing/Section3";
import AllCtx from "../util-functions/allCtx";

function Staffing(props) {
  const router = useRouter();
  const { staffing } = props;
  const [selectedStep, setSelectedStep] = useState(
    staffing.howItWorks[0].title
  );

  const {
    talentsNearYouResponse,
    setGeolocationSupported,
    geolocationSupported,
    locationGranted,
    setLocationGranted,
    setTalentsNearYouResponse,
    coordinates,
    setCoordinates,
    setState,
    country,
    setCountry,
  } = AllCtx();

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(success, error, options);

    if (!navigator.geolocation) {
      alert("Your browser does not support Geolocation, but we got you!");
      setState("");
      setGeolocationSupported(false);
      setTalentsNearYouResponse(
        "We could not find talents near you because your browser does not support Geolocation. You can browse through our pool of US-based talents below."
      );
      router.push("/talents-near-you");
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(position) {
      const crd = position.coords;

      setLocationGranted(true);
      setGeolocationSupported(true);
      setTalentsNearYouResponse("Wait, while we find talents near you.");
      setCoordinates({ latitude: crd.latitude, longitude: crd.longitude });
      console.log("Coordinates got!");

      //TO SEARCH COORDINATES
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${crd.latitude}&lon=${crd.longitude}`
          // `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=35.64302&lon=-79.03621`
        );

        if (!response.ok) {
          setState("none");
          setCountry(data.address.country);
          router.push("/talents-near-you");
          return;
          // throw new Error();
        }

        const data = await response.json();
        const address = data.address;
        setCountry(data.address.country);
        setState(address["ISO3166-2-lvl4"].substr(3));
        console.log(address["ISO3166-2-lvl4"].substr(3));
        router.push("/talents-near-you");
        // fetchTalents();
        return;
      } catch (error) {
        console.log(error);
        setSearchingTalents(false);

        setState("none");
        setCountry(data.address.country);
        router.push("/talents-near-you");
        // fetchTalents();
      }

      // router.push("/talents-near-you");

      return;
    }

    function error(err) {
      setState("none");
      setLocationGranted(false);
      setGeolocationSupported(true);
      setTalentsNearYouResponse(
        "Your location access denied, enable it from your browser."
      );

      console.warn(`ERROR(${err.code}): ${err.message}`);
      router.push("/talents-near-you");
      return;
    }
  }

  return (
    <div className="px-5 md:px-10 lg:px-16">
      <Head>
        <title>Codes and Cogs - Staffing Page</title>
        <meta name="description" content="Staffing Page for Codes and Cogs" />

        <meta
          property="og:url"
          content={`https://www.codesandcogs.com/staffing`}
        />

        <meta property="og:title" content="Codes and Cogs - Staffing" />
        <meta
          property="og:description"
          content="Staffing Page for Codes and Cogs"
        />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBanner title={staffing.pageTitle} />

      <Section1 staffing={staffing} getCoordinates={getCoordinates} />

      <Section2 staffing={staffing} />

      <Section3 staffing={staffing} />

      {/* HOW IT WORKS TITLE*/}

      <div
        className="text-center font-bold mt-10 text-[24px] lg:text-[32px]"
        dangerouslySetInnerHTML={{ __html: staffing.howItWorksHeader }}
      >
        {}
      </div>

      {/* HOW IT WORKS NUMBERING    */}
      <div className="mt-5 flex justify-evenly">
        {staffing.howItWorks.map((item, i) => (
          <div
            onClick={() => {
              setSelectedStep(item.title);
            }}
            key={item.title}
            className={`${
              selectedStep === item.title ? "shadow-md" : ""
            } duration-300 hover:bg-gray-100 text-center flex justify-center items-center bg-white text-pry-color rounded-full font-bold text-3xl 400:text-4xl 560:text-5xl sm:text-6xl lg:text-7xl  cursor-pointer w-10 h-10 560:w-16 400:h-12 400:w-12 560:h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 `}
          >
            <div className="flex justify-center items-center w-full h-full ">
              <p className="z-10">{i + 1}</p>
              <div className=" bg-red-200 rounded-full w-1/4 h-1/4  -ml-[20%] mt-[48%] 400:mt-[43%]  1000:mt-[33%]  "></div>
            </div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS HEADER  */}
      <div>
        {staffing.howItWorks.map(
          (item) =>
            selectedStep === item.title && (
              <div className="mt-10" key={item.title}>
                <div>
                  <div
                    className="text-xl text-red-700 font-semibold text-center"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  >
                    {}
                  </div>
                </div>

                {/* HOW IT WORKS BODY   */}
                <div className="md:flex justify-evenly items-center mt-5 md:mt-10">
                  <div className=" md:w-[45%] mr-5  flex justify-center">
                    <Image
                      alt="Image alt text"
                      src={item.imageUrl || "/images/career.png"}
                      width="500"
                      height="300"
                    />{" "}
                  </div>

                  <div
                    className="md:w-[50%] text-lg mt-5 md:mt-0"
                    dangerouslySetInnerHTML={{
                      __html: item.body,
                    }}
                  >
                    {}
                  </div>
                </div>

                {item.vettingProcess.title && (
                  <div className="mt-16">
                    {
                      <div
                        className=" text-xl text-red-700 font-semibold text-center"
                        dangerouslySetInnerHTML={{
                          __html: item.vettingProcess.title,
                        }}
                      >
                        {}
                      </div>
                    }

                    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 ">
                      {item.vettingProcess.process.map((vp, i) => (
                        <div
                          key={vp.title}
                          className="shadow p-5 relative hover:bg-gray-50 mt5"
                        >
                          <div className="flex justify-center">
                            <p className="text-center flex justify-center items-center text-xl border-pry-color w-14 h-14 rounded-full border font-semibold">
                              {i + 1}
                            </p>
                          </div>

                          <div
                            className="text-center mt-2 text-pry-color font-semibold text-lg"
                            dangerouslySetInnerHTML={{ __html: vp.title }}
                          >
                            {}
                          </div>

                          <div
                            className="mt-5"
                            dangerouslySetInnerHTML={{ __html: vp.body }}
                          >
                            {}
                          </div>

                          {/* <div className='mt-20'></div>
                      <button className=' text-right absolute bottom-3 text-pry-color translate-x-[140%] font-semibold '>Learn More</button> */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
        )}
      </div>

      {/* HOW IT WORKS BANNER  */}

      <Banner getCoordinates={getCoordinates} staffing={staffing} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/staffing`
  );
  const data = await response.json();

  const staffing = data;

  // console.log(data);

  return {
    props: {
      staffing,
    },
    revalidate: 300,
  };
}

export default Staffing;

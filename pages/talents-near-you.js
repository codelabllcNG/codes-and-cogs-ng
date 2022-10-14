import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import HeaderBanner from "../components/HeaderBanner";
import { USA_STATES } from "../a-store/content-store/USA_STATES";
import AllCtx from "../util-functions/allCtx";
import { useRouter } from "next/router";

function TalentsNearYou() {
  const router = useRouter();

  const countryRef = useRef();
  const stateRef = useRef();
  const searchKeywordRef = useRef();

  const [response, setResponse] = useState("");
  const [searchingTalents, setSearchingTalents] = useState(false);
  const [talentsFound, setTalentsFound] = useState([]);
  // const [country, setCountry] = useState("");

  const {
    talentsNearYouResponse,
    setGeolocationSupported,
    geolocationSupported,
    locationGranted,
    setLocationGranted,  
    setTalentsNearYouResponse,
    coordinates,
    setCoordinates, state, setState, country, setCountry
  } = AllCtx();

  const [condition, setCondition] = useState(false) //So that useEffect does not rerun

  useEffect(() => {
    // setRunUseEffect(true) 
    const fetchData = async () => {
   getCoordinates()
      return;
    };

  fetchData() 
  }, [condition]);

  async function fetchTalents() {
    const searchKeywordInput = searchKeywordRef.current.value;

    // if (!locationGranted) {
      
    // }


    try {
      setSearchingTalents(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/search?country=US&state=${state}&s=${searchKeywordInput}`
      );

      const data = await response.json();

      if (!response.ok) {
        setSearchingTalents(false);
        setTalentsFound([]);
        setTalentsNearYouResponse(
          "Something went wrong. Could not load Talents, please refresh page."
        );
        console.log(
          "Something went wrong. Could not load Talents, please refresh page."
        );
        return;
      }

      window.fbq('trackCustom', 'Local Talent Search', {
        keywordSearched: searchKeywordInput,
        state: state
      })

      if (country !== "United States") {
        setSearchingTalents(false);
        setTalentsFound([]);
        // console.log(data.talents);
        setTalentsNearYouResponse(`Seems you are in ${country ? country+"," : "another country,"} not in the United States; or your location permission is denied. Select a state to find US based talents.`);
        console.log("Seems you are not in the United States. Select A state to find US based talents.");
        return
    }

      if (typeof data.talents === "string") {
        setSearchingTalents(false);
        setTalentsFound([]);
        setTalentsNearYouResponse(
          "The talents near you are currently on other projects, please try another state or reach out to us for further assistance."
        );

        // console.log(data.talents);
        return;
      }

      if (data.status !== "success") {
        setSearchingTalents(false);
        setTalentsFound([]);
        setTalentsNearYouResponse(
          "Something went wrong. Could not load Talents, please refresh page."
        );
        console.log(
          "Something went wrong. Could not load Talents, please refresh page."
        );
        return;
      }

      if (data.talents.length < 1) {
        setSearchingTalents(false);
        setTalentsFound([]);
        setTalentsNearYouResponse(
          "The talents near you are currently on other projects, please try another state or reach out to us for further assistance."
        );

        console.log(
          "The talents near you are currently on other projects, please try another state or reach out to us for further assistance."
        );

        return;
      }

  

      if (state === "none") {
        setSearchingTalents(false);
        setTalentsFound(data.talents);
        console.log(data.talents);
        setTalentsNearYouResponse("We could not get talents near you but we got you some talents from the United States.");
        console.log("We could not get talents near you but we got you some talents from the United States.");
        return
      }

      if (state !== "none") {
        setSearchingTalents(false);
        setTalentsFound(data.talents);
        console.log(data.talents);
        setTalentsNearYouResponse("Success! We have some talents near you!");
        return
     }

     
    } catch (error) {
      console.log(error);
      setSearchingTalents(false);
      setTalentsFound([]);
      setTalentsNearYouResponse(
        "An error occurred while loading talents, reload or retry."
      );
      setResponse("");
      console.log("An error occurred while loading talents, reload or retry.");
    }
  }


  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(success, error, options);

    if (!navigator.geolocation) {
      alert("Your browser does not support Geolocation, but we got you!");
      setGeolocationSupported(false);
      console.log(
        "Your browser does not support Geolocation, please wait while we find you US based talents..."
      );
      fetchTalents();
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    // IF  LATITUDE AND LONGITUDE ARE FOUND
    async function success(position) {
      const crd = position.coords;
      setLocationGranted(true);
      setGeolocationSupported(true);
      setCoordinates({ latitude: crd.latitude, longitude: crd.longitude });
      setSearchingTalents(true);

      //TO SEARCH COORDINATES
      try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${crd.latitude}&lon=${crd.longitude}`
        //   `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=35.64302&lon=-79.03621`
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        const address = data.address
        setState(address['ISO3166-2-lvl4'].substr(3));
if (country !== "United States") {setCountry(data.address.country)}
    

        console.log(address['ISO3166-2-lvl4'].substr(3));
        console.log(data.address.country);
        console.log(country);
  
        fetchTalents();
        return;
      } catch (error) {
        console.log(error);
        setSearchingTalents(false);
        
        setState("none");
        fetchTalents();

      }
    }

    // IF NO LATITUDE AND LONGITUDE ARE FOUND
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      setLocationGranted(false);
      setGeolocationSupported(true);
      setState("");
      fetchTalents();
    }
  }

  return (
    <div className="px-5 md:px-10 lg:px-16">
      <HeaderBanner title={"Talents Near You"} />

      <div className="mt-10 text-center font-semibold text-xs 400:text-xl  md:text-2xl">
        Popular Searches
      </div>

      <div className="flex justify-center mt-4 space-x-3 text-pry-color flex-wrap text-sm ">
        {[
          "Graphics Designer",
          "React Native",
          "Java",
          "NodeJS Engineer",
          "UI/UX Designer",
        ].map((searchWord) => (
          <div
            className="px-2 py-1 mb-2 bg-semi-sec-color rounded-full text-center"
            key={searchWord}
          >
            {searchWord}
          </div>
        ))}
      </div>

      {/* SEARCH AND SORT BAR   */}
      <div
        // onSubmit={() => {
        //   fetchTalents();
        // }}
        className="md:flex justify-evenly space-y-3 md:space-y-0 mt-3"
      >
        {/* Country and State  */}
        <div className="flex justify-between items-center md:w-[50%] ">
          {/* Country  */}
          <div className="items-center flex border-2 border-gray-400 border-opacity-80 pl-3 py-2  rounded-full  md:mr-3 mr-2 text-sm w-[50%] bg-gray-50">
            {" "}
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/usa-flag.svg"
              width={35}
              height={30}
            />{" "}
            <input
              disabled
              defaultValue="United States of America"
              required
              //   onChange={(e) => {
              //     setSearchKeyword(e.target.value);
              //   }}
              type="text"
              className="text-gray-500  ml-4 placeholder:text-xs text-xs outline-0 focus:!outline-0 focus:!outline-none border-0 text- w-full bg-transparent "
              placeholder="USA"
            />
          </div>
          {/* State  */}
          <div className="items-center flex border-2 border-pry-color border-opacity-80 pl-3 py-2  rounded-full  md:mr-3 mr-2 text-sm  w-[50%]">
            {" "}
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/location-icon.png"
              width={20}
              height={27}
            />{" "}
            <select
              required
              //   ref={stateRef}
              onChange={(e) => {
                setCountry("United States")
                setState(e.target.value);
              }}
              type="text"
              className=" ml-4 placeholder:text-xs text-xs outline-0 focus:!outline-0 focus:!outline-none border-0 text- w-full bg-transparent mr-2"
              placeholder="Select State"
            >
               <option value="">Select State</option>
              {USA_STATES.map((state) => (
              
                <option
                  key={state.name}
                  className="text-sm"
                  value={state.value}
                >
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Input and Button  */}
        <div className="flex justify-between items-center md:w-[50%] ">
          {/* Search Input */}
          <div className="items-center flex border-2 border-pry-color border-opacity-80 pl-3 py-2  rounded-full  md:mr-3 mr-2 text-sm w-[80%] md:w-full ">
            {" "}
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/search.png"
              width={23}
              height={23}
            />{" "}
            <input
              required
              ref={searchKeywordRef}
              //   onChange={(e) => {
              //     setSearchKeyword(e.target.value);
              //   }}
              type="text"
              className=" ml-4 placeholder:text-xs outline-0 focus:!outline-0 focus:!outline-none border-0 text- w-full bg-transparent "
              placeholder="e.g Developer"
            />
          </div>{" "}
          {/* Button  */}
          <div
            className="w-[15%] md:w-[25%]"
            //    onClick={() => {
            //     window.fbq('trackCustom', 'Talent Search',  {
            //       searchKeyword: `${searchKeyword}`,
            //       page: "Landing Page"
            //     })
            //     }}
          >
            {" "}
            <button
              onClick={() => {
                // getReverseGeocodingData(6.5568768, 3.3718272);
                fetchTalents()
              }}
              type="submit"
              className="text-white text-sm md:text-lg w-full ring-pry-color md:ring-transparent ring rounded-full md:py-2 pt-[0.37rem] pb-[0.37rem] px-4 md:px-5 bg-pry-color hover:bg-blue-800"
            >
              Search
            </button>{" "}
          </div>
        </div>
      </div>
      <div
        className="text-center text-sm text-gray-400 mt-2"
        dangerouslySetInnerHTML={{
          __html:
            "Fill in the state and find the closest talents to you in the United States Of America ",
        }}
      >
        {}
      </div>

      <div
        className={`${
          talentsNearYouResponse.includes("Success") && !searchingTalents
            ? "text-green-600"
            : " text-red-600 "
        } md:font-semibold mt-3 text-center mb-3`}
      >
        {searchingTalents ? "Searching talents..." : talentsNearYouResponse}
      </div>

      <div className="mt-5">
        {/* <div className='mt-20 sm:text-xl text-center text-pry-color'>{ talentsNearYouResponse}</div> */}

        {talentsFound.length < 1 ? (
          <div className="mt-16">
            <div className="flex  justify-center md:mb-2">
              <h2 className="font-bold text-xs 400:text-xl  md:text-3xl">
                Search Result
              </h2>
            </div>
            <div className="flex justify-center mb-4">
              <div className=" w-[75px] md:w-[150px]">
                <Image
                  alt="Image alt text"
                  src="/images/logos-and-icons/red-underline.png"
                  width={150}
                  height={20}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <Image
                width="308"
                height="250"
                src="/images/nothing-to-show.svg"
              />{" "}
            </div>
            <div className="-mt-5 to-pry-color text-center">
              Nothing to show here!
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <div className="flex  justify-center md:mb-2">
              <h2 className="font-bold text-xs 400:text-xl  md:text-3xl">
                Search Result
              </h2>
            </div>
            <div className="flex justify-center mb-4">
              <div className=" w-[75px] md:w-[150px]">
                <Image
                  alt="Image alt text"
                  src="/images/logos-and-icons/red-underline.png"
                  width={150}
                  height={20}
                />
              </div>
            </div>
            <div className="grid gap-2 560:gap-4 grid-cols-2 md:grid-cols-3 mt-5 text-xs 560:text-base">
              {talentsFound.map((talent) => (
                <div
                  key={talent.id}
                  onClick={() => {
                    window.fbq("trackCustom", "Talent Profile View", {
                      viewedTalent: `${talent.name}`,
                      // page: "Skills Page",
                    });
                    router.push(`/talents/${talent.id}`);
                  }}
                  className="bg-mid-color hover:bg-[#ECF1FA] hover:scale-105 duration-300 cursor-pointer rounded-lg flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color items-center"
                >
                  <div className="w-10 560:w-14">
                    <Image
                      alt="Image alt text"
                      height={75}
                      width={64}
                      src={talent.icon || "/images/default-dp.svg"}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="font-semibold ">{talent.title}</p>{" "}
                    <p>{talent.name}</p>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TalentsNearYou;

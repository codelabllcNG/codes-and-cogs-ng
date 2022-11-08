import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HeaderBanner from "../../components/HeaderBanner";
import Jobs from "../../components/career/Jobs";
import Head from "next/head";
import Loading from "../../components/Loading";
import ApplicationForm from "../../components/career/ApplicationForm";
import AllCtx from "../../util-functions/allCtx";

function JobPosting(props) {
  const { showApplicationForm, setShowApplicationForm } = AllCtx();

  const router = useRouter();

  const { selectedJobCategory, jobCategoryID, jobCategoryArray } = props;

  const [statefulSelectedJobCategory, setStatefulSelectedJobCategory] =
    useState(selectedJobCategory);
  const [response, setResponse] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [vacancyArray, setVacancyArray] = useState(
    selectedJobCategory?.postings
  );

  const [selectedVacancy, setSelectedVacancy] = useState(
    selectedJobCategory?.postings[0]
  );

  // JOB SEARCHING
  function searchJob(searchKeyword) {
    if (!searchKeyword || searchKeyword.trim() === "") {
      function jobCategoryFinder() {
        setResponse("All available job openings.");
        return jobCategoryArray.find(
          (jobCategory) => jobCategory.id === statefulSelectedJobCategory.id
        );
      }

      const currentCat = jobCategoryFinder();
      console.log(currentCat);
      console.log(jobCategoryArray);
      setStatefulSelectedJobCategory(currentCat);
      setVacancyArray(currentCat.postings);
      return;
    }

    const foundVacancies = statefulSelectedJobCategory?.postings.filter((v) =>
      v.title.toLowerCase().includes(`${searchKeyword.toLowerCase()}`)
    );

    if (foundVacancies.length === 0) {
      console.log(foundVacancies);
      setResponse("No job opening for this keyword, try another.");
      setVacancyArray(foundVacancies);
      // console.log("Nothing to display");
      return;
    }

    setResponse("We found some job opening(s) for your search.");
    setVacancyArray(foundVacancies);
    console.log(foundVacancies);
  }

  const relativeTimePeriods = [
    [31536000, "year"],
    [2419200, "month"],
    [604800, "wk"],
    [86400, "day"],
    [3600, "hr"],
    [60, "min"],
    [1, "sec"],
  ];

  function relativeTime(date, isUtc = true) {
    if (!(date instanceof Date)) date = new Date(date * 1000);
    const seconds = (new Date() - date) / 1000;
    for (let [secondsPer, name] of relativeTimePeriods) {
      if (seconds >= secondsPer) {
        const amount = Math.floor(seconds / secondsPer);
        return `${amount} ${name}${amount > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  }

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className="px-5 md:px-10 lg:px-16 ">

<Head>
        <title>{`Career for ${selectedJobCategory.category} at Codes and Cogs`}</title>
        <meta name="description" content={`Career for ${selectedJobCategory.category} at Codes and Cogs`} />

        <meta
          property="og:url"
          content={`https://www.codesandcogs.com/career/${selectedJobCategory.category}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Career for ${selectedJobCategory.category} at Codes and Cogs`} />
        <meta property="og:description" content={`Career for ${selectedJobCategory.category} at Codes and Cogs`} />
        <meta property="og:image" content={selectedJobCategory.imageUrl} />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/career/${selectedJobCategory.category}`}
        />
      </Head>

      <ApplicationForm selectedVacancy={selectedVacancy} />
      <HeaderBanner title="Career With Codes and Cogs" />

      {/* HEADER CATEGORY NAME LIST */}

      <div className="flex justify-center mt-10 font-semibold space-x-3 text-pry-color flex-wrap text-sm ">
        {jobCategoryArray.map((posting) => (
          <div
            onClick={() => {
              console.log(posting);

              setStatefulSelectedJobCategory(posting);
              setVacancyArray(posting.postings);
              setSelectedVacancy(posting?.postings[0]);
              setResponse("");
              router.push(`/career/${posting.id}`);
              // setVacancyArray(statefulSelectedJobCategory.postings)
            }}
            className={`select-none cursor-pointer px-4 py-1 mb-2 ${
              statefulSelectedJobCategory.category === posting.category
                ? "bg-pry-color text-white"
                : "bg-semi-sec-color text-pry-color"
            } rounded-full text-center`}
            key={posting.category}
          >
            {posting.category}
          </div>
        ))}
      </div>

      <div className="flex justify-center  mt-5">
        <div className="flex items-center  w-[80%] md:w-[60%] ">
          <div className="pl-3 flex border border-pry-color border-opacity-80 px-1 py-1 md:py-2  rounded-full   mr-2 text-sm w-[80%]">
            {" "}
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/search.png"
              width={23}
              height={23}
            />{" "}
            <input
              //   required
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                searchJob(e.target.value);
              }}
              type="text"
              className="outline-0 focus:!outline-0 focus:!outline-none border-0  ml-4 w-full bg-transparent "
              placeholder="Search for Talents"
            />
          </div>{" "}
          <div>
            {" "}
            <button
              onClick={() => {
                searchJob(searchKeyword);
              }}
              className="text-white text-sm  rounded-full md:py-2 pt-[0.37rem] pb-[0.37rem] px-4 md:px-8 bg-pry-color "
            >
              Search
            </button>{" "}
          </div>
        </div>
      </div>

      {/* RESPONSE */}
      <div
        className={`flex !text-lg px-5 justify-center h-5 my-3 mb-7 ${
          response.includes("found") ? "text-green-600 " : "text-red-600 "
        } text-sm m-2`}
      >
        {response}
      </div>

      {/* VACANCY LIST BODY  */}
      {vacancyArray.length === 0 ? (
        <div>
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
          </div>{" "}
        </div>
      ) : (
        //
        <div className="flex">
          <div className="w-[40%] mr-2 sm:mr-4 ">
            <div className="text-sm  text-gray-400">Available Jobs</div>
            <div className="overflow-y-scroll h-[800px] scrollbar-hide">
              {vacancyArray.map((job) => (
                <div
                  onClick={() => {
                    setSelectedVacancy(job);
                    // console.log(job.id);
                    // console.log(selectedVacancy);
                  }}
                  key={job.id}
                  className={` rounded-lg ${
                    selectedVacancy?.id === job.id
                      ? "bg-pry-color text-white "
                      : "bg-white "
                  } mt-3 400:pl-2 sm:pl-3 p-1 sm:p-3  shadow-md lg:flex items-start cursor-pointer hover:shadow-lg`}
                >
                  <div className="mr-3 hidden lg:flex">
                    <Image
                      src={
                        selectedVacancy?.id === job.id
                          ? "/images/candc-jobs-logo-blue.svg"
                          : "/images/candc-jobs-logo-white.svg"
                      }
                      height={60}
                      width={60}
                      alt="Job posting logo"
                    />
                  </div>

                  <div className="w-full 400:text-sm text-xs ">
                    <div className="sm:flex justify-between items-center">
                      <span className="font-bold text-sm 400:text-base md:text-xl">
                        {job.title}
                      </span>{" "}
                      <span className=" italic text-xs sm:text-sm hidden ">
                        {relativeTime(new Date(`${job.date}`))}
                      </span>
                    </div>
                    <div className="text-xs 400:text-sm font-semibold mt-1">
                      <span>{job.state},</span> <span>{job.country}</span>{" "}
                      <span>({job.type})</span>
                    </div>

                    <div className="mt-1 text-xs sm:text-sm font-semibold">
                      {job.company}
                    </div>
                    <div className="italic mt-1 sm:text-sm text-xs  font-semibold">
                      {relativeTime(new Date(`${job.date}`))}
                    </div>

                    {/* <div
                    className="mt-4 text-xs 350:text-sm "
                    dangerouslySetInnerHTML={{
                      __html:
                        job.summary,
                    }}
                  >
                    {}
                  </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[55%]   overflow-y-scroll scrollbar-hide">
            <div className="text-sm  text-gray-400">Job Description</div>
            <div className="rounded-lg shadow-md mt-3 p-2 sm:p-4">
              <div className="font-semibold">
                <div
                  dangerouslySetInnerHTML={{ __html: selectedVacancy?.title }}
                  className="text-base 400:text-lg md:text-2xl font-bold"
                >
                  {}
                </div>
                <div className="text-xs 400:text-sm">
                  <span className="text-pry-color mt-1">
                    <span>{selectedVacancy?.state},</span>{" "}
                    <span>{selectedVacancy?.country}</span>{" "}
                  </span>
                  <span>({selectedVacancy?.type})</span>
                </div>
                <div className="mt-1 text-xs 400:text-sm">
                  {selectedVacancy?.company}
                </div>
                <button
                  onClick={() => {
                    setShowApplicationForm(true);
                    window.fbq("trackCustom", "Apply for Job Button - Career", {
                      jobTitle: `${selectedVacancy.title}`,
                    });
                  }}
                  className="bg-pry-color mt-2 text-white rounded-md p-1 font-normal text-xs 400:text-sm 400:px-2 hover:bg-white hover:text-pry-color hover:shadow-md duration-200"
                >
                  Apply for Job
                </button>
                <hr className="-mx-2 sm:-mx-4 my-4 border" />

                <div
                  className="h-[500px] overflow-y-auto scrollbar-hide text-sm md:text-base font-normal "
                  dangerouslySetInnerHTML={{ __html: selectedVacancy?.content }}
                >
                  {}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  const jobCategoryID = context.params.jobCategoryID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/careerpage`
    // new Agent({ keepAlive: true })
  );
  const data = await response.json();
  const jobCategoryArray = data.job_postings;

  // console.log(data.job_postings);

  function jobCategoryFinder() {
    return jobCategoryArray.find(
      (jobCategory) => jobCategory.id === jobCategoryID
    );
  }
  const selectedJobCategory = jobCategoryFinder(jobCategoryID);

  if (!selectedJobCategory) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      jobCategoryID,
      jobCategoryArray,
      selectedJobCategory,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/careerpage`
    //   new Agent({ keepAlive: true })
  );
  const data = await response.json();

  const jobCategoryArray = data.job_postings;

  const jobCategoryPaths = jobCategoryArray.map(
    (jobCategory) => jobCategory.id
  );

  return {
    paths: jobCategoryPaths.map((jobCategoryID) => ({
      params: { jobCategoryID: jobCategoryID },
    })),
    fallback: true,
  };
}

export default JobPosting;

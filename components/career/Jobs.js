import Image from "next/image";
import React, { useState } from "react";

function Jobs(props) {
  const {
    jobCategoryID,

    selectedJobCategory,
  } = props;

  const [selectedVacancy, setSelectedVacancy] = useState(
    selectedJobCategory?.postings[0].id
  );

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

  return (
    <div className="flex">
      <div className="w-[40%] mr-2 sm:mr-4 ">
        <div className="text-sm  text-gray-400">Available Jobs</div>
        <div className="overflow-y-scroll h-[800px] scrollbar-hide">
          {selectedJobCategory.postings.map((job) => (
            <div
              onClick={() => {
                setSelectedVacancy(job.id);
                console.log(job.id);
                console.log(selectedJobCategory[0].id);
              }}
              key={job.id}
              className={` rounded-lg ${
                selectedVacancy.id === job.id
                  ? "bg-pry-color text-white "
                  : "bg-white "
              } mt-3 400:pl-2 sm:pl-3 p-1 sm:p-3 hover:text-white hover:bg-pry-color shadow-md lg:flex items-start cursor-pointer hover:shadow-lg`}
            >
              <div className="mr-3 hidden lg:flex">
                <Image
                  src={
                    selectedVacancy.id === job.id
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
        {selectedJobCategory.postings.map((job) => (
          <div key={job.id} className="rounded-lg shadow-md mt-3 p-2 sm:p-4">
            <div className="font-semibold">
              <div className="text-base 400:text-lg md:text-2xl font-bold">
                UI/UX Designer
              </div>
              <div className="text-xs 400:text-sm">
                <span className="text-pry-color mt-1">Abuja, Nigeria</span>{" "}
                (REMOTE)
              </div>
              <div className="mt-1 text-xs 400:text-sm">Codes and Cogs</div>
              <button className="bg-pry-color mt-2 text-white rounded-md p-1 font-normal text-xs 400:text-sm 400:px-2 hover:bg-white hover:text-pry-color hover:shadow-md duration-200">
                Apply for Job
              </button>
              <hr className="-mx-2 sm:-mx-4 my-4 border" />

              <div
                className="h-[500px] overflow-y-auto "
                dangerouslySetInnerHTML={{ __html: job.content }}
              >
                {}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;

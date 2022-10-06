import React from 'react'

function Section1(props) {

const {getCoordinates, staffing} = props

  return (
      <div>
            {/* VIDEO  */}
      <div className="flex justify-center mt-10 ">
        <video
          // width="400"
          height="250"
          controls
          // autoPlay
          loop
          // muted
          className="rounded-lg mb-2 h-auto w-[80%] md:w-[60%]  "
        >
          <source src={"videoUrl"} type={staffing.pageVideo} />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* BUTTONS  */}
      <div className="mt-5 flex justify-center space-x-3 450:font-semibold text-sm 350:text-base">
        <button onClick={()=>{getCoordinates()}} className="rounded bg-pry-color text-white px-1 450:px-[0.7rem] py-1   ">
          Hire Talents Near You
        </button>
        <button  className="rounded px-1 450:px-[0.7rem] py-1 bg-white text-pry-color border-2 border-pry-color   ">
          Apply for Job
        </button>
      </div>

      {/* FIRST DESCRIPTION  */}
      <div
        className="text-center mt-10 md:text-[22px]"
        dangerouslySetInnerHTML={{
          __html: staffing.firstDescription,
        }}
      >
        {}
      </div>
    </div>
  )
}

export default Section1
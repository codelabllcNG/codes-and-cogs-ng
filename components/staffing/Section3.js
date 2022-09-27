import React from 'react'

function Section3() {
  return (
      <div>
            {/* SECOND SUBTITLE */}
      <div
        className="text-center font-bold mt-10 text-[24px] lg:text-[32px]"
        dangerouslySetInnerHTML={{ __html: "What makes us different: " }}
      >
        {}
      </div>

      {/* SECOND GRID  */}
      <div className="md:mr-5 grid grid-cols-1 gap-8 sm:gap-x-4 md:gap-x-8  gap-x 800:grid-cols-2 1000:grid-cols-3 mt-5">
        <div className="bg-mid-color relative  rounded-md p-4 pb-8">
          <div className="flex   mb-5">
            <p className=" font-semibold text-2xl">{"Local Talent Hub"}</p>
          </div>
          <div className="dangerous-html !text-base mb-5">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "Just like LinkedIn, Indeed, and other talent sourcing platforms, we are constantly scanning, vetting, and recruiting tech experts to our talent hub. (hyperlink this to the list of talents for the staffing sections…).  We rely on market trend data to sign on the best in-demand tech specialists across North America. That said, we are most likely to have your tech needs local to you. ",
              }}
              className="  text-gray-600 "
            >
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
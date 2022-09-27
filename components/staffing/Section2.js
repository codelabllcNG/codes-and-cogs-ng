import React from 'react'

function Section2() {
  return (
      <div>
              {/* FIRST SUBTITLE */}
      <div
        className="text-center font-bold mt-10 text-[24px] lg:text-[32px]"
        dangerouslySetInnerHTML={{
          __html: "Some of these challenges could include: ",
        }}
      >
        {}
      </div>

      {/* FIRST GRID */}
      <div className="md:mr-5 grid grid-cols-1 gap-8 sm:gap-x-4 md:gap-x-8  gap-x 800:grid-cols-2 1000:grid-cols-3 mt-5">
        <div className="bg-mid-color relative  rounded-md p-4 pb-8">
          <div className="flex   mb-5">
            <p className=" font-semibold text-2xl">
              {"The limitation of talent sourcing platforms"}
            </p>
          </div>
          <div className="dangerous-html !text-base mb-5">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "LinkedIn, Indeed and a host of others are great platforms to find multiple talents. However, they do not guarantee that you find the right candidate. ",
              }}
              className="  text-gray-600 "
            >
              {}
            </div>
          </div>
        </div>
      </div>

      {/* SECOND DESCRIPTION  */}
      <div
        className="text-center mt-10 md:text-[22px]"
        dangerouslySetInnerHTML={{
          __html:
            "  From web developers to cloud experts, we help you hire the right talent for your project in only a few hours. At Codes and Cogs, we take recruiting seriously and are committed to providing businesses with the finest technical talent that meets your criteria and resonates with your company's value. ",
        }}
      >
        {}
      </div>
    </div>
  )
}

export default Section2
import React from 'react'

function Section3(props) {
const {staffing} = props


  return (
      <div>
            {/* SECOND SUBTITLE */}
      <div
        className="text-center font-bold mt-10 text-[24px] lg:text-[32px]"
        dangerouslySetInnerHTML={{ __html: staffing.whatMakeUsDifferentHeader }}
      >
        {}
      </div>

      {/* SECOND GRID  */}
      <div className="md:mr-5 grid grid-cols-1 gap-8 sm:gap-x-4 md:gap-x-8  gap-x 800:grid-cols-2 1000:grid-cols-3 mt-5">
    {staffing.whatMakeUsDifferent.map(item =>     <div key={item.title} className="bg-mid-color relative  rounded-md p-4 pb-8">
          <div className="flex   mb-5">
        <div className=" font-semibold text-2xl" dangerouslySetInnerHTML={{ __html: item.title}}>
          {}
        </div>
          </div>
          <div className="dangerous-html !text-base mb-5">
            <div
              dangerouslySetInnerHTML={{
                __html: item.body,
              }}
              className="  text-gray-600 "
            >
              {}
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Section3
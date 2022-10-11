import Image from 'next/image';
import React from 'react'

function Banner(props) {
const {staffing} = props
  return (
      <div className="mt-10 rounded-xl bg-[url('/images/staffing-banner.webp')] bg-center bg-cover bg-no-repeat   text-white px-5 md:px-10 lg:px-16  py-5 md:py-10 lg:py-12">
          <div className='text-xs 320:text-base 350:text-2xl sm:text-2xl md:text-3xl' dangerouslySetInnerHTML={{ __html: staffing.banner.text}}>
              {}
          </div>
          <button className='text-xl bg-pry-color px-2 py-1 mt-5 md:font-semibold md:px-3 rounded-lg hover:bg-white hover:text-pry-color duration-300'>Get Started Here</button>
    </div>
  )
}

export default Banner
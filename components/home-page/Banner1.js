import Image from 'next/image';
import React from 'react'

function Banner1() {
  return (
      <div className='sm:flex mt-20 '>
          <div className='sm:w-[40%] flex '>
          <Image
              className="rounded-tl-3xl rounded-tr-3xl sm:rounded-l-3xl sm:rounded-tr-none"
              alt="Banner Image"
              src="/images/banner1-image.webp"
              width={646}
              height={670}
                  /> 
          </div>
          <div className='sm:w-[60%] bg-pry-color text-white rounded-bl-3xl rounded-br-3xl sm:rounded-r-3xl sm:rounded-bl-none px-5 py-8 lg:py-16 sm:flex flex-col justify-center'>
              <div dangerouslySetInnerHTML={{__html: "Build a Team for Your Project"}} className='sm:text-[35px] font-bold 400:text-[24px]'>
                  {}
              </div>

              <div dangerouslySetInnerHTML={{__html: "Level up your development process, build scalable solutions and reduce cost by hiring an extended development team with Codes and Cogs. "}} className='text-[14px] 400:text-[16px]  sm:text-[22px] mt-5'>
                  {}
              </div>

              <div className='flex justify-center sm:justify-start mt-10 '>
                  <button className='text-pry-color bg-white font-bold px-4 py-2 shadow rounded-lg text-[14px] 400:text-[16px]  sm:text-[22px] hover:bg-gray-50'>Read More</button>
              </div>
          </div>
    </div>
  )
}

export default Banner1
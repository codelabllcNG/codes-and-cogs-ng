import Image from 'next/image';
import React from 'react'

function Section3() {
  return (
    <div className='px-5 md:px-10 lg:px-16 mt-10'>
      <div className=" flex justify-around bg-[url('/images/sch-bg.png')] bg-cover rounded-3xl  bg-center bg-no-repeat text-white  text-lg sm:text-xl md:text-2xl py-5 md:py-10 ">
        <div className='w-1/3 '>
          <div className='h-20 flex justify-center items-center'><Image alt='Icon1' width={78} height={ 42} src='/images/logos-and-icons/icon1.png'/></div>
          <div className='text-center h-12'>20</div>
          <div className='text-center h-10'>Courses</div>
        </div>
       
        

        <div className='w-1/3 '>
          <div className='h-20 flex justify-center items-center'><Image alt='Icon2' width={78} height={ 54} src='/images/logos-and-icons/icon2.png'/></div>
          <div className='text-center h-12'>20</div>
          <div className='text-center h-10'>Courses</div>
        </div>


        <div className='w-1/3 '>
          <div className='h-20 flex justify-center items-center'><Image alt='Icon3' width={61} height={ 55} src='/images/logos-and-icons/icon3.png'/></div>
          <div className='text-center h-12'>20</div>
          <div className='text-center h-10'>Courses</div>
        </div>
      </div>
    </div>
  ) 
}

export default Section3
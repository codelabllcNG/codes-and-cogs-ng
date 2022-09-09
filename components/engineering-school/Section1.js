import Image from 'next/image';
import React from 'react'
import { useRouter } from "next/router";


function Section1() {
  const router = useRouter();

  return (
    <div className='px-5 md:px-10 lg:px-16 mb-16'>

  
          
          <div className='flex justify-center'>
            <Image alt="Landing illustration"  width={850} height={600} src={'/images/engineering-sch.png'}/>
          </div>
          <div onClick={()=>{router.push('#kick-start')}} className='flex justify-center'><button className='bg-pry-color text-white hover:bg-blue-800 hover:shadow-md text-xl sm:text-2xl md:text-3xl lg:text-4xl px-5 py-3 rounded-md animate-bounce font-larken'>Get Started</button></div>
        </div>
  )
}

export default Section1
import Image from 'next/image';
import React from 'react'
import { useRouter } from "next/router";

function SectionBanner(props) {
  const router = useRouter();


  return (
    <div  className=" flex justify-end bg-center bg-cover bg-no-repeat  text-xs 320:text-base 350:text-2xl sm:text-2xl md:text-3xl  lg:text-4xl text-white px-5 md:px-10 lg:px-16 -mx-5 md:-mx-10  lg:-mx-16 py-8 md:py-14  text-right"
      
      // bg-[url('/images/header-banner.webp')]
    style={{ backgroundImage: `url(${props.bgUrl})` }}
    >
      <div className='md:w-[60%]'>
      <div  dangerouslySetInnerHTML={{ __html: props.title }}>
        {}
        </div>
        <button onClick={()=>{router.push(`${props.btnUrl}`)}} className='bg-white text-pry-color px-2 md:px-4 py-1 md:py-2 rounded-lg lg:mr-10 mt-5 font-semibold hover:bg-slate-200'>{ props.btnText}</button>
      </div>
    </div>
  )
}

export default SectionBanner 
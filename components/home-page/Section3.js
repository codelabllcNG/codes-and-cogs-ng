import React, { useEffect, useRef } from 'react'
import AllCtx from "../../util-functions/allCtx";
import Image from "next/image";
import {modelsArray} from '../../a-store/content-store/OUR-MODELS'
import BotIcon from '../BotIcon';
import { useRouter } from 'next/router';

function Section3(props) {
  const router = useRouter(); 

  const { setSectionThreeHeight } = AllCtx()
  
  const {modelsTitle, modelsSubtitle, modelsArray} = props

    const divHeightRef = useRef()

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(divHeightRef.current)  {setSectionThreeHeight(divHeightRef.current.clientHeight)}
      })
  }, []) 

    // console.log('Section three', sectionThreeHeight);

  return (
    <div className="lg:bg-[url('/images/sections-watermark.png')] bg-contain bg-right-bottom  bg-no-repeat px-5 md:px-10 lg:px-16">
        <section id='section3' ref={divHeightRef} className=" mb-16 md:ml-8 ">
              <div>
        <div className="flex  text-center justify-center md:mb-2">
          <h2 className="font-bold header font-larken   text-[#07222E]">
           {modelsTitle}
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

         <div className="dangerous-html md:flex md:justify-center mb-8">
          <div dangerouslySetInnerHTML={{ __html: modelsSubtitle }}>
            { }
          </div>
      </div>

      <div className='md:mr-5 grid grid-cols-1 gap-8 sm:gap-x-4 md:gap-x-8  gap-x 800:grid-cols-2 1000:grid-cols-3 mb-8'>

        {modelsArray.map(content => <div key={content.id} className='bg-mid-color relative text-xl rounded-md p-4 pb-8'>
          <div className="flex justify-center   mb-5"><p className='text-center font-semibold'>{content.title}</p></div>
          <div className='dangerous-html !text-xl mb-5'><div dangerouslySetInnerHTML={{ __html: content.excerpt }} className='  text-gray-600 '>
            {}
          </div></div>
          
         <div className='text-sm absolute  bottom-3   '> <button  onClick={()=>{router.push(`/models/${content.id}`)}} className='font-semibold text-pry-color hover:text-blue-500 duration-300'>Learn More</button></div>
        </div> )}

      </div>
      <BotIcon/>
    </section>
    </div>
  )
}

export default Section3
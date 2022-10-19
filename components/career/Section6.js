import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import React, { useRef } from 'react'

function Section6(props) {
const {  jobOpeningTitle,
  jobOpenings,} = props


const router = useRouter();
  const scrollRef = useRef() 

  function scroll(value) {
    scrollRef.current.scrollLeft += value;
  }

  return (
      <div className='mt-12'>
       
          <div className="flex  justify-center md:mb-2">
              <div className="font-bold header" dangerouslySetInnerHTML={{ __html: jobOpeningTitle}}>
              {}
              </div>
      </div>
      <div className="flex justify-center -mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
    
          </div>

          <div
          ref={scrollRef}
          className="flex scroll-smooth   overflow-x-scroll justify- items-center scrollbar-hide mt-10 -mx-5 md:-mx-10 lg:-mx-16 "
        >
          {jobOpenings.map((opening) => ( 
            <div
              onClick={() => {
                router.push(`/career/${opening.id}`);
              }}
              className="mx-3 hover:bg-semi-sec-color cursor-pointer relative justify-between p-3 rounded-md duration-300 shadow-md mb-3"
              key={opening.category}
            >
              <div className="flex justify-center select-none w-[150px]">
                {" "}
                <Image alt="Job opening image" src={opening.imageUrl || '/images/job-opening1.png'}  width='300' height='350' />
              </div>
              <div className="flex  select-none mt-3 ">
                <p className="font-semibold text-left ml-3 text-pry-color ">{opening.category }</p>
              </div>
            </div>
          ))}
      </div>
      <div className='flex justify-center text-2xl text-pry-color space-x-4 mt-3'>
        <div className='p-1 bg-mid-color rounded-full flex justify-center items-center'>
        <FaAngleLeft onClick={()=>{scroll(-300)}} className='cursor-pointer'/>
        </div>

        <div className='p-1 bg-mid-color rounded-full flex justify-center items-center'>
        <FaAngleRight onClick={() => { scroll(300); }} className='cursor-pointer' />
        </div>
       
      </div>
    </div>
  )
}

export default Section6
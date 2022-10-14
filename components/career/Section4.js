import Image from 'next/image';
import React from 'react'

function Section4() {
  return (
      <div className='mt-12'>
       
          <div className="flex  justify-center md:mb-2">
              <div className="font-bold header" dangerouslySetInnerHTML={{ __html: "Work With Us"}}>
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
          
          <div className='mt-5 text-center text-xl' dangerouslySetInnerHTML={{ __html: "Looking to build a career and not just land “gigs”? Built on the pillar of diversity and inclusivity, qualified candidates are welcome from anywhere in the world in any represented or underrepresented group. Be a part of our in-house crew that drives the mission at Codes and Cogs and let's build innovation together – one career at a time. "}}>
              {}
          </div>

          <div className='mt-5 flex justify-center items-center'><button className='bg-pry-color text-white px-4 rounded-md hover:shadow-lg py-2'>Build a Career With Codes and Cogs</button></div>
    </div>
  )
}

export default Section4
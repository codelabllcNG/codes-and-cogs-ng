import Image from 'next/image';
import React from 'react'

function Section2() {
  return (
      <div className='mt-12'>
       
          <div className="flex  justify-center md:mb-2">
              <div className="font-bold header" dangerouslySetInnerHTML={{ __html: "Our Team"}}>
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
          
          <div className='mt-5 text-center text-xl' dangerouslySetInnerHTML={{ __html: "At Codes and Cogs, we are building a diverse team of talented professionals who are reshaping talent sourcing, remote work and helping businesses build scalable solutions. Our in-house crew are the fuel that drives our mission one innovation at a time.  We help simplify technical hiring for hundreds of companies, and create opportunities for top talents- all while maintaining a beautiful experience.  "}}>
              {}
          </div>

          <div className='mt-5 flex justify-center items-center'><button className='bg-pry-color text-white px-4 rounded-md hover:shadow-lg py-2'>Build a Career With Codes and Cogs</button></div>
    </div>
  )
}

export default Section2
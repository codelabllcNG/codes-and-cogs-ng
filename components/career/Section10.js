import Image from 'next/image';
import React from 'react'

function Section10(props) {
const {perks} = props

  return (
      <div className='mt-12'>
       
          <div className="flex  justify-center md:mb-2">
              <div className="font-bold header" dangerouslySetInnerHTML={{ __html: "PERKS"}}>
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
          
     

      <div className='mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {perks.map(perk => 
          <div key={perk.title} className=" flex justify-center relative ">
   
          <Image alt="Perks image" src={perk.imageUrl || '/images/job-opening1.png'}  width='400' height='300' className='rounded-xl' />

            <div  dangerouslySetInnerHTML={{ __html: perk.title}} className='  text-center text-sm absolute  bottom-0 bg-black py-4 lg:py-2 text-white bg-opacity-70  rounded-xl px-4'>
        
            </div>
        </div>
        )}
         </div>
    </div>
  )
}

export default Section10
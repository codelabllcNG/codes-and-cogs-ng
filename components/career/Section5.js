import Image from 'next/image';
import React from 'react'

function Section5(props) {
const { whatOurTeamEnjoyTitle,
  whatOurTeamEnjoySubtitle,
  whatOurTeamEnjoy,} = props

  return (
      <div className='mt-12'>
       
          <div className="flex  justify-center md:mb-2">
              <div className="font-bold header" dangerouslySetInnerHTML={{ __html: whatOurTeamEnjoyTitle}}>
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
          
          <div className='mt-5 text-center text-xl' dangerouslySetInnerHTML={{ __html: whatOurTeamEnjoySubtitle}}>
              {}
          </div>

      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {whatOurTeamEnjoy.map(enjoyment => 
          <div key={enjoyment.title} className='relative lg:mr-10 lg:mt-14 hover:scale-95 duration-300'>
            <div className='hidden lg:block absolute -right-10 -top-10 '>
            <Image src={enjoyment.imageUrl || "/images/peck1.png"} height='200' width='200' alt=
'Peck image'  />
            </div>  
            <div className='bg-mid-color px-5 py-5 lg:py-16 rounded-lg'>
              <div className='font-semibold text-2xl lg:mt-12 '>{enjoyment.title}</div>
              <div className='text-lg mt-5' dangerouslySetInnerHTML={{ __html: enjoyment.content}}>
                {}
              </div>
            </div>
          </div>
          )}
         </div>
    </div>
  )
}

export default Section5
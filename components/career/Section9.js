import Image from 'next/image';
import React from 'react'

function Section9(props) {
const {  whatYouNeedTitle,
  whatYouNeeSubtitle,
  whatYouNeed,} = props


  return (
      <div className='mt-12'>
       
          <div className="flex  justify-center md:mb-2">
              <div className="font-bold header" dangerouslySetInnerHTML={{ __html: whatYouNeedTitle}}>
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
          
          <div className='mt-5 text-center text-xl' dangerouslySetInnerHTML={{ __html: whatYouNeeSubtitle}}>
              {}
          </div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {whatYouNeed.map(content => 
          <div dangerouslySetInnerHTML={{ __html: content.body || "Facilitators who have experience in PHP, JavaScript, JavaScript frameworks (React, React.js, React native, Vue, Angular), Java, Drupal, WordPress, and many more. "}} key={content} className='px-3 py-4 rounded-lg bg-mid-color text-lg'>
{}
          </div>
        )}
         </div>
    </div>
  )
}

export default Section9
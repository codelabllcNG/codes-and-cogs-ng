import React from 'react'

function Section3(props) {
  const {  missionBgImage,
    missionTitle,
    missionDescription,} = props
  return (
      <div className="mt-16  bg-center bg-cover bg-no-repeat  text-xs 320:text-lg    text-white px-5 md:px-10 lg:px-16 -mx-5 md:-mx-10  lg:-mx-16 py-14 lg:py-20 flex items-center"
  //  bg-[url('/images/career-second-bg.png')]
          style={{ backgroundImage: `url(${missionBgImage || '/images/career-second-bg.png'})` }}
    >
      <div className=""> 
      <div className='text-2xl md:text-3xl lg:text-4xl font-semibold' dangerouslySetInnerHTML={{ __html: missionTitle}}>
        {}
      </div>
      <div className='mt-4 lg:text-xl lg:leading-10 md:w-[70%]' dangerouslySetInnerHTML={{ __html: missionDescription}}>
        {}
      </div>
   </div>
          
    </div>
  )
}

export default Section3
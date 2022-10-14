import React from 'react'

function Section3() {
  return (
      <div className="mt-16 bg-[url('/images/career-second-bg.png')] bg-center bg-cover bg-no-repeat  text-xs 320:text-lg    text-white px-5 md:px-10 lg:px-16 -mx-5 md:-mx-10  lg:-mx-16 py-14 lg:py-20 flex items-center"
   
          // style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className=""> 
      <div className='text-2xl md:text-3xl lg:text-4xl font-semibold' dangerouslySetInnerHTML={{ __html: "MISSION"}}>
        {}
      </div>
      <div className='mt-4 lg:text-xl lg:leading-10' dangerouslySetInnerHTML={{ __html: "As the world moves digital and data-driven, our mission is to help organizations use cutting-edge technology to stay ahead, continuously improve and make the greatest impact faster and better. We believe digital transformation is more than just technology. It's about the people and how we can solve their needs. "}}>
        {}
      </div>
   </div>
          
    </div>
  )
}

export default Section3
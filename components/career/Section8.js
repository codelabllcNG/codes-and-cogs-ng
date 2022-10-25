import React from 'react'

function Section8(props) {
const {facilitators} = props

  return (
    <div>
            <div className="mt-16  bg-center bg-cover bg-no-repeat  text-xs 320:text-lg    text-white px-5 md:px-10 lg:px-16 -mx-5 md:-mx-10  lg:-mx-16 py-20 lg:py-32 flex items-center"
   
        // bg-[url('/images/facilitator-bg.png')]
          style={{ backgroundImage: `url(${facilitators.imageUrl || '/images/facilitator-bg.png'})` }}
    >
      <div className=""> 
      <div className='text-2xl md:text-3xl lg:text-4xl font-semibold' dangerouslySetInnerHTML={{ __html: facilitators.title}}>
        {}
      </div>
      <div className='mt-4 lg:text-xl lg:leading-10 md:w-[70%]' dangerouslySetInnerHTML={{ __html: facilitators.description}}>
        {}
      </div>
   </div>
      </div>

      <div className='mt-5 flex justify-center items-center'><button onClick={()=>{alert("Coming Soon!")}} className='bg-pry-color text-white px-4 rounded-md hover:shadow-lg py-2'>Become a Facilitator</button></div>
    </div>

  )
}

export default Section8
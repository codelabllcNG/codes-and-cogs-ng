import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Section1(props) {
const {subtitle, bgImage, title} = props
 
  return (
    <div className="flex   "
    //md:bg-[url('/images/what-we-do-bg.png')]
      
    // style={{ backgroundImage: `url(${bgImage})` }}
    >
    {/* <div className="flex text-center justify-center ">
      <h2 className="font-bold header">What We Do</h2>
    </div>
    <div className="flex justify-center mb-5 md:mb-10 ">
    <div className=" w-[75px] md:w-[150px]">
        <Image alt="Image alt text"
          src="/images/logos-and-icons/red-underline.png"
          width={150}
          height={20}
        />
      </div>
    </div> */}
          <div className='890:w-[65%]'>
          <div className="   ">
        <div className='  lg:text-4xl  font-semibold 890:mt-5 font-larken  md:leading-[3.5rem] md:text-5xl xl:text-[4rem] lg:text-[3rem] lg:leading-[3.5rem] xl:leading-[5rem] text-2xl sm:text-5xl sm:leading-[3.5rem] 340:text-[1.7rem] 340:leading-[2.2rem] '  dangerouslySetInnerHTML={{__html: subtitle}}>
          {}
        </div>
      </div>

      <div className=" flex space-x-5 mt-5 md:mt-16 text-xl sm:text-2xl md:text-3xl  items-center mb-5 md:mb-16">
        
        <div className=' w-[43px] shadow px-2 rounded-md py-1 hover:shadow-lg cursor-pointer'>
        <Image onClick={()=>{router.push('#enterprise-services')}} alt="Image alt text"
          src="/images/logos-and-icons/enterprise.png"
          width="64"
          height="64"

        />
       </div>
        <Link passHref href={`#enterprise-services`}>
          <button className="font-semibold text-pry-color hover:text-blue-600">
            Enterprise Services 
          </button>
        </Link>{" "}
      </div>

      <div className=" flex space-x-5 text-xl sm:text-2xl md:text-3xl items-center mb-4">
     
        <div className=' w-[43px] shadow px-2 rounded-md py-1 hover:shadow-lg cursor-pointer'>
<Image onClick={()=>{router.push('#solution-as-a-service')}} alt="Image alt text"
          src="/images/logos-and-icons/solutions.png"
          width="64"
          height="64"
        />  </div>
    
        <Link passHref href={`#solution-as-a-service`}>
          <button className="font-semibold text-pry-color hover:text-blue-600">
            Solution As A Service
          </button>
        </Link>{" "}
      </div>
          </div>
          
               <div className="w-1/2 z-[-1] -mt-10 hidden 890:block absolute right-0 ">
        <Image   alt='Hero image' width={1996} height={1600} src={bgImage}/>
      </div>

    </div>
  )
}

export default Section1
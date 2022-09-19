import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'


function Section2(props) {
    const { enterpriseServices } = props
    const router = useRouter();


  return (
      <div>
           <div id="enterprise-services" className="scroll-mt-10  mt-20">
        <div className="flex  justify-center mb-2">
          <h2 className="font-bold header">Enterprise Packages</h2>
        </div>
        <div className="flex justify-center mb-3 ">
        <div className=" w-[75px] md:w-[150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
        </div>
      </div>

      {enterpriseServices.map((enterpriseService, i) => (
        <div key={enterpriseService.id} className="mb-20" id={`${enterpriseService.id}`}>
          <div className="flex  justify-center mb-2">
            <div dangerouslySetInnerHTML={{__html: enterpriseService.name}} className="font-bold text-2xl">
              {}
            </div>
          </div>
      

          <div className="mb-5">
            <div dangerouslySetInnerHTML={{ __html: enterpriseService.excerpt }} className="text-center">
              {}
            </div>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`prose max-w-none sm:w-[55%] text-justify  mb-5 sm:mb-0   `}
            >
              <div className="sm:leading-8   sm:text-lg " dangerouslySetInnerHTML={{ __html: enterpriseService.content.length > 400 ? enterpriseService.summary.substring(0, 400) + '...' : enterpriseService.summary }}>
                {}
              </div>

              <div onClick={()=>{router.push(`/what-we-do/${enterpriseService.id}`)}} className='mt-5 text-pry-color text-sm font-semibold'><button>Read More</button></div>
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <Image alt="Image alt text" width={400} height={300} className="rounded-lg" src={enterpriseService.imageUrl}  />
            </div>
          </div>
          
     
        </div>
        
      ))}

    </div>
  )
}

export default Section2
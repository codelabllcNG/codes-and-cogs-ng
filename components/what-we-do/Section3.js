import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

function Section3(props) {
const {solutionAsServices} = props
const router = useRouter();
  return (
    <div>
       <div id="solution-as-a-service" className="scroll-mt-10 mt-20 ">
        <div className="flex  justify-center mb-2">
          <h2 className="font-bold header">Solution As A Service</h2>
        </div>
        <div className="flex justify-center mb-3 ">
          <div className=" [150px]">
            <img alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {solutionAsServices.map((solution, i) => (
        <div key={solution.id} className="mb-20" id={`${solution.id}`}>
          <div className="flex  justify-center mb-2">
            <div dangerouslySetInnerHTML={{ __html: solution.name }} className="font-bold text-2xl">
              {}
            </div>
          </div>
          {/* <div className="flex md:justify-center mb-3 ">
          <div className=" [150px]">
            <img alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            /> 
          </div>
    </div> */}

          <div className="mb-5">
            <div dangerouslySetInnerHTML={{ __html: solution.excerpt }} className="text-center">
              {}
            </div>
          </div>

          <div
            className={`sm:flex ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } justify-between items-center `}
          >
            <div
              className={`prose max-w-none sm:w-[55%] text-justify  mb-5 sm:mb-0  `}
            >
              <div onClick={()=>{router.push(`/coming-soon`)}} dangerouslySetInnerHTML={{__html: solution.summary || "Coming Soon"}} className="sm:leading-7 lg:leading-10 text-center cursor-pointer text-xl underline  ">
                {}
              </div>

              {/* /what-we-do/${solution.id} */}
              {/* <div onClick={()=>{router.push(`/coming-soon`)}} className='mt-5 text-pry-color text-sm font-semibold'><button>Read More</button></div> */}
            </div>

            <div className="sm:w-[40%] items-center flex justify-center mb-5 sm:mb-0">
              <Image alt="Image alt text" height={300} width={400} className="rounded-lg" src={solution.imageUrl} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Section3
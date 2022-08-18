import React from 'react'
import { selectedFeasibility, FEASIBILITY } from "../../a-store/content-store/FEASIBILITY"
import Image from "next/image";

function FeasibilityID(props) {
const {selectedFeasibility} = props


  return (
      <div className='px-5 md:px-10'>
               <div className="flex  md:justify-center mb-2">
        <h2 className="font-bold text-3xl">
        {selectedFeasibility.title}
        </h2>
      </div>
      <div className="flex md:justify-center mb-10 ">
        <div className=" [150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
          </div>
          

          <div className='900:flex justify-between items-center '>
          <div className='900:w-[40%] items-center flex justify-center mb-5 900:mb-0'> <video
            // width="400"
            height="305"
            controls
            // autoPlay
            loop
            // muted
            className="rounded-lg mb-2 "
          >
            <source src={selectedFeasibility.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video></div>

          <div className='900:w-[55%] text-justify lg:leading-8 mb-5 900:mb-0 text-pry-color'><p>{selectedFeasibility.content} 
              </p></div>
            
          </div>
    </div>
  )
}

export async function getStaticProps(context) {
try {
  const feasibilityID = context.params.feasibilityID;
  const response = await fetch(
    "http://dev.codesandcogs.com/server/api/codesandcogs/v1/homepage"
  );
  const data = await response.json();
  const feasibilityArray = data.feasibilities;

  function feasibilityFinder() {
    return feasibilityArray.find((feasibility) => feasibility.id === feasibilityID);
  }
  const selectedFeasibility = feasibilityFinder(feasibilityID);

  return {
    props: {
      feasibilityID,
      feasibilityArray,
      selectedFeasibility,
    },
    revalidate: 600,
  };
} catch (error) {

  console.log(error);

}
  }
  
  export async function getStaticPaths() {
try {
  const response = await fetch(
    "http://dev.codesandcogs.com/server/api/codesandcogs/v1/homepage"
  );
  const data = await response.json();

  const feasibilityArray = data.feasibilities;

  const feasibilityPaths = feasibilityArray.map((feasibility) => feasibility.id);

  return {
    paths: feasibilityPaths.map((feasibilityID) => ({
      params: { feasibilityID: feasibilityID },
    })),
    fallback: false,
  };
} catch (error) {
  console.log(error);
}
  }

export default FeasibilityID
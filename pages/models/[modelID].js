import React from 'react'
// import { selectedModel, OUR_MODELS } from "../../a-store/content-store/OUR-MODELS"
import Image from "next/image";

function ModelID(props) {
const {selectedModel} = props


  return (
      <div className='px-5 md:px-10'>
               <div className="flex  md:justify-center mb-2">
        <h2 className="font-bold text-3xl">
        {selectedModel.title}
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


          <div className='flex justify-center items-center text-justify 900:text-center mb-1 900:mb-8 text-pry-color '><p>{ selectedModel.excerpt}</p></div>

          <div className='900:flex justify-between items-center '>
          <div className='900:w-[55%] text-justify lg:leading-8 mb-5 900:mb-0 text-pry-color '><p className='900:leading-10'>{selectedModel.content} 
              </p></div>
            
              
              <div className='900:w-[40%] items-center flex justify-center mb-5 900:mb-0'>
              
                  <img src={selectedModel.imageUrl} alt="" />
              
              </div>
          </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const modelID = context.params.modelID;
  const response = await fetch(
    "http://dev.codesandcogs.com/server/api/codesandcogs/v1/homepage"
  );
  const data = await response.json();


  const modelsArray = data.models;

  function modelFinder() {
    return modelsArray.find((model) => model.id === modelID);
  }

  const selectedModel = modelFinder(modelID);

  return {
    props: {
      modelID,
      modelsArray,
      selectedModel,
    },
    revalidate: 600,
  };
  }
  
  export async function getStaticPaths() {
    const response = await fetch(
      "http://dev.codesandcogs.com/server/api/codesandcogs/v1/homepage"
    );
    const data = await response.json();
  
    const modelsArray = data.models;
  
    const modelPaths = modelsArray.map((model) => model.id);
  
    return {
      paths: modelPaths.map((modelID) => ({
        params: { modelID: modelID },
      })),
      fallback: false,
    };
  }

export default ModelID
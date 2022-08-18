// import React from 'react'
// import { selectedModel, OUR_MODELS } from "../../a-store/content-store/OUR-MODELS"
// import Image from "next/image";

// function ModelID(props) {
// const {theSelectedModel} = props


//   return (
//       <div className='px-5 md:px-10'>
//                <div className="flex  md:justify-center mb-2">
//         <h2 className="font-bold text-3xl">
//         {theSelectedModel.title}
//         </h2>
//       </div>
//       <div className="flex md:justify-center mb-10 ">
//         <div className=" [150px]">
//           <Image
//             src="/images/logos-and-icons/red-underline.png"
//             width={150}
//             height={20}
//           />
//         </div>
//           </div>


//           <div className='flex justify-center items-center text-justify 900:text-center mb-1 900:mb-8 text-pry-color '><p>{ theSelectedModel.body}</p></div>

//           <div className='900:flex justify-between items-center '>
//           <div className='900:w-[55%] text-justify lg:leading-8 mb-5 900:mb-0 text-pry-color '><p className='900:leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tellus, egestas massa gravida dictum bibendum congue scelerisque. Sit feugiat diam condimentum vitae lacus in risus, facilisis. Bibendum at leo, vitae ridiculus tellus turpis est mattis ultricies. Elementum ut amet, varius nisl volutpat amet dolor ornare mi. Aliquet diam potenti lectus habitant. Mattis quam arcu pulvinar est aliquet elit a mauris.
// Elementum varius pellentesque diam ut semper nibh. 
//               </p></div>
            
              
//               <div className='900:w-[40%] items-center flex justify-center mb-5 900:mb-0'>
              
//                   <img src={theSelectedModel.imageUrl} alt="" />
              
//               </div>
//           </div>
//     </div>
//   )
// }

// export async function getStaticProps(context) {
//     const modelID = context.params.modelID;
//     const theSelectedModel = selectedModel(modelID);

  
//     return {
//       props: {
//         modelID: modelID,
//         theSelectedModel: theSelectedModel,

//       },
//     };
//   }
  
//   export async function getStaticPaths() {
//     const modelPaths = OUR_MODELS.map((model) => model.id);
  
//     return {
//       paths: modelPaths.map((modelID) => ({
//         params: { modelID: modelID },
//       })),
//       fallback: false,
//     };
//   }

// export default ModelID
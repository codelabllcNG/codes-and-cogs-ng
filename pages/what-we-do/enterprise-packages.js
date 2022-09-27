import React, { useEffect } from 'react'
import { useState } from 'react';
import HeaderBanner from '../../components/HeaderBanner';

function EnterprisePackages(props) { 
const {    whatWeDoID,
    selectedWhatWeDo, contentArray, selectedContent} = props

    const [currentContent, setCurrentContent] = useState(selectedContent);

    function findCurrentContent(contentTitle) {
        setCurrentContent(contentArray.find((content) => content.name === contentTitle));
    }

    
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/v2.js?pre=1";
        document.body.appendChild(script);
    
        script.addEventListener("load", () => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "22606943",
              formId: "28241b1b-34b7-449d-9b15-85a2367d0a76",
              target: "#wwd-form",
            });
          }
        });
    
        return () => {
          script.removeEventListener('load', () => {
            if (window.hbspt) {
              window.hbspt.forms.create({
                region: "na1",
                portalId: "22606943",
                formId: "28241b1b-34b7-449d-9b15-85a2367d0a76",
                target: "#wwd-form",
              });
            }
          })
       };
      }, []);

  return (
    <div className="px-5 md:px-10 lg:px-16">
  <HeaderBanner title={selectedWhatWeDo.name}/>

    <div
      dangerouslySetInnerHTML={{
        __html: selectedWhatWeDo.summary
      }}
      className="dangerous-html text-center mt-5 "
    >
      {}
    </div>

    <div className="flex mt-10  h-[500px]">
      <div  className='mr-5  w-[35%]  overflow-y-scroll'>
        {contentArray.map((content) => (
          <div key={content.name} onClick={()=>{findCurrentContent(content.name)}}
            dangerouslySetInnerHTML={{ __html: content.name }}
            className={`hover:text-pry-color mb-4 cursor-pointer  font-semibold sm:text-lg ${content.name === currentContent.name ? 'text-red-600' : ''}`}
          >
            {}
          </div>
        ))}
      </div>

      <div className='w-[60%] overflow-y-auto h-[500px]'>
      <div className='dangerous-html  ' dangerouslySetInnerHTML={{ __html: currentContent.body}}>
        {}
        </div>
        <p className='mt-5 font-semibold text-pry-color cursor-pointer'>REGISTER FOR {currentContent.name.toUpperCase() }</p>
      </div>
          </div>
          

          <div className=' mt-5 lg:mt-10 '>
        <div className=' flex justify-center '>
         <p className='md:w-[70%] text-pry-color font-semibold 400:text-2xl '> Reach out to us below! </p>
        </div>
      <div className='flex justify-center mt-5  '>
        
        <div id="wwd-form" className='scroll-mt-10 w-full md:w-[70%]'>
      
      </div> 
        </div>
    </div>

  </div>
  )
}

export async function getStaticProps(context) {
    // const whatWeDoID = context.params.whatWeDoID;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/whatwedo`
    );
    const data = await response.json();
    const enterpriseService = data.enterprize_services

//fetch in javascript?


  
    // function enterpriseService() {
    //   return enterprisePackage.find((whatWeDo) => whatWeDo.id === "enterprise-packages");
    // }
    function findSelectedWhatWeDo() {
        return enterpriseService.find((whatWeDo) => whatWeDo.id === "enterprise-packages");
    };

    const selectedWhatWeDo = findSelectedWhatWeDo()
  
    if (!selectedWhatWeDo) {
      return {
        notFound: true,
      };
    }

    const contentArray = selectedWhatWeDo.content 
    
    function selectedContentFinder() {
        return contentArray.find((content, i) => i === 0);
      }
      const selectedContent = selectedContentFinder();
  
    return {
      props: {
        // whatWeDoID,
            selectedWhatWeDo,
            contentArray,
            selectedContent
      },
      revalidate: 300,
    };
  }

export default EnterprisePackages 
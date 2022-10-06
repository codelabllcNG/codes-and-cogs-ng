import Image from 'next/image';
import React from 'react'
import HeaderBanner from '../components/HeaderBanner';

function FaqPage(props) {
const {faqs} = props;


  return (
      <div className='px-5 md:px-10 lg:px-16'>
          <HeaderBanner title='FAQ'/>

          <div dangerouslySetInnerHTML={{ __html: "Questions People Ask"}} className="flex  justify-center md:mb-2 font-bold text-xs 320:text-base 350:text-2xl sm:text-2xl md:text-4xl  text-center text-red-800 mt-10">
    {}
      </div>

          <div className='  grid grid-cols-1 md:grid-cols-2 gap-5' >
              {faqs.map(faq => <div className=''>
                  <div key={faq.title} className="text-pry-color text-2xl mt-5 font-semibold " dangerouslySetInnerHTML={{ __html: faq.title}}>
                      {}
                  </div>

                  <div className=" text-lg  mt-3" dangerouslySetInnerHTML={{ __html: faq.body}}>
                      {}
                  </div>
              </div> )}
          </div>

          
          <div className='mt-10 py-10 text-2xl  font-semibold text-center bg-[#B6B7D9]' dangerouslySetInnerHTML={{ __html: "HAVE MORE QUESTIONS? Reach out to us at support@codesandcogs.com"}}>
              {}
          </div>

    </div>
  )
} 


export async function getStaticProps() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/faqs`
    );
    const data = await response.json();
  
    const faqs = data.faqs;
  
  
    return {
      props: {
    faqs
      },
      revalidate: 300,
    };
  }

export default FaqPage
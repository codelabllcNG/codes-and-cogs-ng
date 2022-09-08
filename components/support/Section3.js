import React, { useRef } from "react";
import Image from "next/image";
import BotIcon from "../BotIcon";
import { useRouter } from "next/router";


function Section3(props) {
  const {

    ticketStatusTitle,
    ticketStatusSubtitle,
  } = props;

let router = useRouter() 


  const emailRef = useRef();
  const ticketReferenceRef = useRef();


  function submitRequirement(e) {
    e.preventDefault();


    const emailInput = emailRef.current.value;
    const ticketReferenceInput = ticketReferenceRef.current.value;


    console.log(emailInput, ticketReferenceInput);

    router.push('/support/ticket')
  }

  return (
    <div id='ticket-status' className="px-5 pt-16 md:px-14 md:bg-[url('/images/sections-watermark.png')] bg-contain bg-right-bottom  bg-no-repeat">
      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold header">
       {ticketStatusTitle}
        </h2>
      </div>
      <div className="flex justify-center mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className="flex justify-center text-lg font-semibold mb-">
        <div dangerouslySetInnerHTML={{ __html: ticketStatusSubtitle }} >
          {}
        </div>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={submitRequirement}
          className="py-5 bg-mid-color rounded-3xl px-4 sm:px-8 md:w-[80%] w-full mb-10"
        >
 

          <div className="mb-5">
            <div className='flex space-x-2 items-center text-center'>
              <p className="text-xs md:text-sm font-semibold text-gray-500">
                Email
              </p>    <p className='text-red-500'>
                          &#9733;
                          </p>
            </div>
            <div>
              <input
                ref={emailRef}
                className="w-full h-[2rem] text-sm focus:outline outline-1 outline-blue-900 rounded-lg px-3"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="mb-5">
            <div className='flex space-x-2 items-center text-center'>
              <p className="text-xs md:text-sm font-semibold text-gray-500">
               Ticket Reference
              </p>    <p className='text-red-500'>
                          &#9733;
                          </p>
            </div>
            <div>
              <input
                ref={ticketReferenceRef}
                className="w-full h-[2rem] text-sm   focus:outline outline-1 outline-blue-900 rounded-lg px-3"
                type="text"
                name=""
                id=""
              />
                        
        
            </div>
          </div>

  

          <div className=" text-center font-bold">
            <button 
              type="submit"
              className="bg-pry-color text-white h-[2.5rem] w-full rounded-lg sm:text-lg hover:bg-opacity-80"
            >
              Submit
            </button>
          </div>
              </form>
              
          
          </div>
          <BotIcon/>
    </div>
  );
}

export default Section3;

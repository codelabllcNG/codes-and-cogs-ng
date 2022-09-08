import React, { useEffect, useRef } from "react";
import Image from "next/image";
import BotIcon from "../BotIcon";

function Section2(props) {
  const {
    newTicketTitle,
    newTicketSubtitle,
    ticketStatusTitle,
    ticketStatusSubtitle,
  } = props;


  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  function submitRequirement(e) {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    const subjectInput = subjectRef.current.value;
    const messageInput = messageRef.current.value;

    console.log(nameInput, emailInput, subjectInput, messageInput);
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
          formId: "c7613910-f4bb-407a-b6e0-3cfd1b84b602",
          target: "#support-form",
        });
      }
    });

    return () => {
      script.removeEventListener('load', () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "22606943",
            formId: "c7613910-f4bb-407a-b6e0-3cfd1b84b602",
            target: "#support-form",
          });
        }
      })
   };
  }, []);

  return (
    <div id='create-ticket' className="px-5 pt-16 md:px-14 md:bg-[url('/images/sections-watermark.png')] bg-contain bg-right-bottom  bg-no-repeat">
      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold header">
      {newTicketTitle}
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

      <div  className="flex justify-center font-semibold mb-5">
        <div dangerouslySetInnerHTML={{ __html: newTicketSubtitle }}>
          {}
        </div>
      </div>

      <div className='flex justify-center mt-5  '>
        
        <div id="support-form" className='w-full md:w-[70%]'>
      
      </div> 
        </div>

      {/* <div className="flex justify-center">
        <form
          onSubmit={submitRequirement}
          className="py-5 bg-mid-color rounded-3xl px-4 sm:px-8 md:w-[80%] w-full mb-10"
        >
          <div className="mb-5">
            <div className='flex space-x-2 items-center text-center'>
              <p className="text-xs md:text-sm font-semibold text-gray-500">
                Name
                          </p> 
                          <p className='text-red-500'>
                          &#9733;
                          </p>
            </div>
            <div>
              <input
                ref={nameRef}
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
               Subject
              </p>    <p className='text-red-500'>
                          &#9733;
                          </p>
            </div>
            <div>
              <input
                ref={subjectRef}
                className="w-full h-[2rem] text-sm   focus:outline outline-1 outline-blue-900 rounded-lg px-3"
                type="text"
                name=""
                id=""
              />
          
          
            </div>
          </div>

          <div className="mb-5">
            <div className='flex space-x-2 items-center text-center'>
              <p className="text-xs md:text-sm font-semibold text-gray-500">
                Message
              </p>    <p className='text-red-500'>
                          &#9733;
                          </p>
            </div>
            <div>
              <textarea
                ref={messageRef}
                //   required
                rows={5}
                className="w-full resize-none invalid:outline-red-600  focus:outline outline-1 outline-blue-900 rounded-lg px-3"
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
              
          
          </div> */}
          <BotIcon/>
    </div>
  );
}

export default Section2;

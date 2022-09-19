import React, { useState } from "react";
import {
  selectedModel,
  CONVERSATIONS,
} from "../../a-store/content-store/CONVERSATIONS";
import Image from "next/image";

function Ticket() {
  const [wordCount, setWordCount] = useState(0)
  const [message, setMessage] = useState('')
  





  return (
    <div className="px-5 md:px-10 lg:px-16  ">
      <div className="500:flex text-sm px-2 justify-evenly items-center bg-pry-color rounded-md py-4 text-white mb-2">
        <div className="space-y-1 500:space-y-3 mb-5 500:mb-0">
          <p className='font-semibold'>Basic Ticket Information</p>
          <p>Ticket Status: Open</p>
          <p>Date Created: 03/07/2022</p>
        </div>

        <div className="space-y-1 500:space-y-3">
          <p className='font-semibold'>User Information</p>
          <p>Name: John Doe</p>
          <p>Email: johndoe@gmail.com</p>
        </div>
      </div> 
      <div className='h-[30rem] overflow-auto shadow-sm'>

      {CONVERSATIONS.map(conversation => 
     <div key={conversation.id} className={`flex ${!conversation.isAdmin ? 'flex flex-row-reverse ' : ''} items-start `}>
       <div> <Image alt="Image alt text" src='/images/logos-and-icons/conversation-icon.png' width={ 40} height={40} />  </div> 
       <div className=' shadow-md rounded-md bg-white w-[90%]  sm:w-[60%] mb-2 '>
         <div className='bg-semi-sec-color p-2 text-sm rounded-t-md '> <p>{conversation.timeStamp}</p> </div> 
         <div className='p-2 text-sm'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure culpa qui officia deserunt .</p> </div>
       </div>
       </div>
        )}

           
</div>
<div className='flex mt-10 items-center '><textarea placeholder='Message' onChange={(e)=>{setMessage(e.target.value)}} className='scroll-mt-10 z-[111] focus:outline focus:bg-white pl-2 w-full mr-2 resize-none py-1 sm:py-2 md:py-3 lg:py-4 rounded-md bg-gray-100' name="" id=""  rows={message.length > 60 ? '4' : '1'}/> <Image alt="Image alt text" className='cursor-pointer' src='/images/logos-and-icons/send.png' width='30' height='25'/></div>

 
    </div>
  ); 
}

export default Ticket;

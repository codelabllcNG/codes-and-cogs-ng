import React, { useState } from 'react'
import Image from "next/image";
import {PRICING} from '../a-store/content-store/PRICING'
import Head from 'next/head';

function Pricing() {
const [currentHover, setCurrentHover] = useState('')


  
  
  return (
    <div className='px-5 md:px-10'>
      
      <Head>
        <title>Codes and Cogs Pricing</title>
        <meta name="description" content='Our services and pricing at Codes and Cogs.' />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>


                 <div className="flex  md:justify-center mb-2">
        <h2 className="font-bold text-3xl">
        Our Standard Pricing
        </h2>
      </div>
      <div className="flex md:justify-center mb-10 ">
        <div className=" [150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
          </div>

          <div className='flex justify-center text-center mb-5'><p>Get access to our pool of developers, designers and engineers at any time. Work directly with any of them at any time of the year.  </p></div>

          <div className="sm:flex  grid justify-center md:justify-between scroll-smooth  snap-x md:overflow-x-scroll hover:overscroll-x-none   snap-mandatory duration-500 scrollbar-hide  ">
        {PRICING.map((item) => ( 
          <div
            key={item.id}
            className={`    py-8 px-4 700:w-[32%] w-[15rem] shrink-0 snap-center `}
          >
            <div onMouseOver={()=> {setCurrentHover(item.id)}} onMouseLeave={()=> {setCurrentHover('')}}
              className={`relative   rounded-3xl hover:bg-pry-color hover:text-white text-pry-color hover:scale-110 duration-200 py-8  shadow-lg`}
            >
                    <div className={`flex justify-center font-semibold mb-4`}><p>{ item.name}</p></div>

                    <div className='pt-[0.18rem] mb-4  bg-gray-300  '></div>
                    
                    <div className=' text-sm flex justify-center mb-2'><p>Starting from</p></div>
                    <div className=' mb-8 text-sm flex justify-center text-center'><p>{item.price}</p></div>

                    <div className='font-semibold flex justify-center mb-3'><p>Access to</p></div>

                    {item.accessTo.map(access => <div key={access} className=' flex  justify-center text-xs mb-2'>  <div className='mr-2 text-right'>&#10003;</div> <p className='text-center'>{access}</p></div>)}
                    <div className='mb-20'></div>
                    
                    <div className='flex justify-center  -bottom-1  left-[50%] -translate-x-1/2
                      absolute'><button className={`${currentHover === item.id ? 'bg-white text-pry-color' : 'bg-pry-color text-white'} font-semibold  shadow-md px-3 text-sm py-1 rounded-md`}>Get Plan</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
import React from "react";

function ComingSoon() {
  return (
    <div className="lg:bg-[url('/images/coming-soon.png')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[600px] ">
      <div className="px-5 md:px-10 900:px-16 lg:px-[5rem]">
        <div>
          <button className="bg-pry-color mt-8 cursor-default text-white px-5 py-2 rounded-full 400:text-xl md:text-2xl lg:text-4xl">
            With the best choice of
          </button>
          <div className="font-bold mt-8 text-xl 400:text-5xl md:text-6xl lg:text-7xl ">
            Developers &amp;
                  </div>
                  <div className="font-bold  sm:mt-2 text-xl 400:text-5xl md:text-7xl lg:text-7xl ">
             Designers
          </div>

          <div className="mt-10 text-pry-color font-extrabold text-3xl 400:text-6xl md:text-7xl lg:text-8xl">
            Coming Soon!
                  </div>
                  
                  <div className='mt-16 md:w-[60%] bg-mid-color flex justify-between px-2 400:px-5 py-1 400:py-3 rounded-full shadow-inner '>
                      <input placeholder='Input email to stay updated' type="text" className='bg-transparent w-full text-xs 400:text-sm '/> <button className='bg-pry-color shadow-md hover:bg-white hover:text-pry-color rounded-full text-white px-3 400:px-6 py-1 400:py-2 '>Subscribe</button>
                  </div>
                  

        </div>
      </div>
    </div>
  );
}

export default ComingSoon;

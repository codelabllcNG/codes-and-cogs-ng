import Image from "next/image";
import React from "react";

function OurTeam() {
  return (
    <div className="mt-20">
      <p className="font-bold text-gray-600 text-[26px] md:text-[30px] 890:text-[40px] 890:leading-[2.8rem] leading-8">
        Our <br />
        <span className="text-pry-color ">Core Team</span> 
      </p>

          <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 1, 1, 1].map((member) => (
        <div key={member} className="mt-8 ">
          <div className="flex justify-center">
            <Image
              className=""
              alt="Team DP"
              src="/images/out-team-dp.png"
              width={200}
              height={200}
            />
                  </div>
                  
                  <div className="hover:bg-pry-color shadow-md  hover:text-white rounded-xl p-5 -mt-20 duration-300 hover ">
                <div dangerouslySetInnerHTML={{__html: "Moses Alhassan"}} className='text-center 890:text-[24px] 890:font-semibold mt-20'>
                  {}
                </div>
                <div dangerouslySetInnerHTML={{__html: "Managing Director"}} className='text-center 890:text-[18px] '>
                  {}
                </div>
                
                <div dangerouslySetInnerHTML={{__html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}} className='text-center font-light   890:text-[16px] '>
                  {}
                      </div>
                  </div>
        </div>
      ))}
   </div>
    </div>
  );
}

export default OurTeam;

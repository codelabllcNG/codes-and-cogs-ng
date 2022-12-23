import Image from "next/image";
import React from "react";

function PopularSkills() {
  return (
    <div className="mt-20">
      <div
        dangerouslySetInnerHTML={{
          __html: "POPULAR  SKILLS ON DEMAND",
        }}
        className="text-[24px] 890:text-[30px] font-bold leading-9 "
      >
        {}
      </div>

      <div className="  flex  mt-5">
        <div
          // ref={scrollRef}
          className="flex scroll-smooth mt-3  overflow-x-scroll justify-between items-center scrollbar-hide "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1,1,1,1,1].map((skill, i) => (
            <div key={skill} className="flex flex-col items-center mr-8">
              <div
                className={`  cursor-pointer relative justify-between px-2 py-1 rounded-xl min-w-fit   `}
              >
                <Image
                  className=""
                  alt="Trustee Logo"
                  src={`/images/python.svg`}
                  width={52}
                  height={54}
                />
                  </div>
                  
                  <div dangerouslySetInnerHTML={{__html: "Python"}} className='text-[17px] font-medium'>
                      {}
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularSkills;

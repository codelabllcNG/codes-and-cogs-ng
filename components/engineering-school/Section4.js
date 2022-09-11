import Image from "next/image";
import React from "react";
import { useState } from "react";

function Section4(props) {
  const { courseArray, selectedCourse } = props;
  const [currentCourse, setCurrentCourse] = useState(selectedCourse);

  function findCurrentCourse(courseID) {
     setCurrentCourse(courseArray.find((course) => course.id === courseID))
  }

  return (
    <div className="px-5 md:px-10 lg:px-16 mt-16">
      <div>
        <div className="flex  justify-center md:mb-2">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "Join Our Bootcamp Today and Work for Top Global Tech Companies",
            }}
            className="font-bold header text-center"
          >
            {}
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html:
            "Our bootcamp boasts of one the finest curriculums in the industry. We take you through an intensive training where you gain in-demand technical skills and teach you to build software that solve problems. As a company founded by tech gurus and enthusiasts, we pride our ourselves on developing world-class talents capable of creating innovative projects and getting hired by top global tech companies.",
        }}
        className="dangerous-html text-center "
      >
        {}
      </div>

      <div className="flex mt-10  h-[500px]">
        <div  className='mr-5  w-[25%]  overflow-y-scroll'>
          {courseArray.map((course) => (
            <div key={course.id} onClick={()=>{findCurrentCourse(course.id)}}
              dangerouslySetInnerHTML={{ __html: course.name }}
              className={`mb-2 cursor-pointer  font-semibold sm:text-lg ${course.id === currentCourse.id ? 'text-red-600' : ''}`}
            >
              {}
            </div>
          ))}
        </div>

        <div className='w-[70%]'>
        <div className='dangerous-html ' dangerouslySetInnerHTML={{ __html: currentCourse.content}}>
          {}
          </div>
          <p className='mt-5 text-pry-color cursor-pointer'>BUY {currentCourse.name.toUpperCase() } COURSE</p>
        </div>
      </div>
    </div>
  );
}



export default Section4;

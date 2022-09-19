import Image from "next/image";
import React from "react";
import { useState } from "react";

function Section4(props) {
  const { courseArray, selectedCourse, ourCourseSubtitle, ourCourseTitle } = props;
  const [currentCourse, setCurrentCourse] = useState(selectedCourse);

  function findCurrentCourse(courseName) {
     setCurrentCourse(courseArray.find((course) => course.courseName === courseName))
  }

  return (
    <div className="px-5 md:px-10 lg:px-16 mt-16">
      <div>
        <div className="flex  justify-center md:mb-2">
          <div
            dangerouslySetInnerHTML={{
              __html: ourCourseTitle
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
          __html: ourCourseSubtitle
        }}
        className="dangerous-html text-center "
      >
        {}
      </div>

      <div className="flex mt-10  h-[500px]">
        <div  className='mr-5  w-[25%]  overflow-y-scroll'>
          {courseArray.map((course) => (
            <div key={course.courseName} onClick={()=>{findCurrentCourse(course.courseName)}}
              dangerouslySetInnerHTML={{ __html: course.courseName }}
              className={`mb-2 cursor-pointer  font-semibold sm:text-lg ${course.courseName === currentCourse.courseName ? 'text-red-600' : ''}`}
            >
              {}
            </div>
          ))}
        </div>

        <div className='w-[70%]'>
        <div className='dangerous-html overflow-y-auto ' dangerouslySetInnerHTML={{ __html: currentCourse.courseOutline}}>
          {}
          </div>
          <p className='mt-5 text-pry-color cursor-pointer'>BUY {currentCourse.courseName.toUpperCase() } COURSE</p>
        </div>
      </div>
    </div>
  );
}



export default Section4;

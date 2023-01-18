import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AllCtx from "../../util-functions/allCtx";

function ScrollableContent() {
  const { setHeaderTop, setHeaderBottom, headerTop, headerBottom } = AllCtx();
  const divRef = useRef();
  const [scroll, setScroll] = useState(0);

  function headerChanger() {
    const scrollY = window.scrollY;
    // if (window.scrollY > 0) {
    //    console.log(window.scrollY)
    //   }
    const scrollTop = document.getElementById("test").scrollTop;

    setScroll(scrollTop);

    console.log(scrollTop);

    if (scrollTop >= 0 && scrollTop < 500) {
      setHeaderTop("About")
      setHeaderBottom("Codes and Cogs")
    }

    if (scrollTop > 500 && scrollTop < 830) {
      setHeaderTop("Our")
      setHeaderBottom("Mission")
    }

    if (scrollTop > 830) {
      setHeaderTop("Our")
      setHeaderBottom("Vision")
    }
  }

  // useEffect(() => {
  //     window.addEventListener("scroll", headerChanger)
  //     console.log(divRef.current.clientHeight);
  //   })

  return (
    <div
      id="test"
      onScroll={headerChanger}
      ref={divRef}
      className="overflow-y-scroll  scrollbar-hide 890:h-[500px] 890:w-[70%]"
    >
      {/* ABOUT */}
      <div>
      <p className="890:hidden font-bold text-gray-600 text-[26px] md:text-[30px] 890:text-[40px] 890:leading-[2.8rem] leading-8 mb-5 ">
        About <br />
        <span className="text-pry-color ">Codes and Cogs</span>
      </p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "We are a global remote company headquartered in Lanham, Maryland that provides a freelancing platform, remote tech space, and remote workstations, connecting companies with software engineers, designers, web developers, cloud and cyber experts, and so forth. Our platform enables companies to source, hire, and manage remote tech teams. We take the hassle out of tech hiring and make remote development easy with solutions for managing payroll, HR compliance, and remote locations.",
          }}
        >
          {}
        </div>

        <div className="grid gap-x-5 gap-y-5 890:gap-y-0 grid-cols-1 890:grid-cols-3 mt-10">
          {[1, 2, 3].map((card) => (
            <div key={card} className=" pb-10 rounded-md rounded-tr-3xl group shadow-md duration-300 hover:bg-pry-color hover:text-white bg-white p-4 ">
              <div className="flex items-center px-1 bg-[#e4e4f1] group-hover:bg-white duration-300 max-w-fit rounded-md rounded-tr-3xl">
                <div className="px-1 pt-2">
                  <Image
                    className=""
                    alt="Card icon"
                    src="/images/about-card-icon.svg"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <div className="mt-2 text-[18px] leading-6" dangerouslySetInnerHTML={{__html: "Our Remote location infrastructure are world class to avoid downtime."}}>
                {}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
        <Image
              className=""
              alt="Underline"
              src="/images/about-us-underline.svg"
              width={945}
              height={32}
                  /> 
</div>

      </div>

      {/* MISSION */}
      <div className="mt-10 890:mt-20">
      <p className="890:hidden font-bold text-gray-600 text-[26px] md:text-[30px] 890:text-[40px] 890:leading-[2.8rem] leading-8 mb-5 ">
        Our <br />
        <span className="text-pry-color ">Mission</span>
      </p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "As tech professionals, we understand the fear that comes with remote hiring. Protecting your data while integrating remote talents into your team can be a concern for many. We tackle this through our workstation as a service, Talents are thoroughly vetted, undergo background checks, and can only access your data through our remote workstation. Our mission is to help you build complex, innovative, and successful solutions on time with the right tech team you can trust.",
          }}
        >
          {}
        </div>

      

        <div className="mt-5">
        <Image
              className=""
              alt="Underline"
              src="/images/about-us-underline.svg"
              width={945}
              height={32}
                  /> 
</div>

      </div>

      {/* VISION */}
      <div className="mt-10 890:mt-20 890:mb-96">
      <p className="890:hidden font-bold text-gray-600 text-[26px] md:text-[30px] 890:text-[40px] 890:leading-[2.8rem] leading-8 mb-5 ">
        Our <br />
        <span className="text-pry-color ">Vision</span>
      </p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "We envision a future where companies can hire a network of talented people hassle-free, save resources, and engineer meaningful solutions feeling rest assured that their project is in safe hands.",
          }}
        >
          {}
        </div>

      

        <div className="mt-5">
        <Image
              className=""
              alt="Underline"
              src="/images/about-us-underline.svg"
              width={945}
              height={32}
                  /> 
</div>

      </div>
    </div>
  );
}

export default ScrollableContent;

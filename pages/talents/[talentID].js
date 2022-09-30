import React from "react";
import Image from "next/image";
import Loading from "../../components/Loading";
import AllCtx from "../../util-functions/allCtx";
import { useRouter } from "next/router";
import { MdFavorite, MdOutlineSkateboarding } from "react-icons/md";
import { FaBookReader, FaHiking } from "react-icons/fa";
import { IoFootballOutline, IoGameControllerSharp } from "react-icons/io5";
import { GiLoveSong } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";
import HeaderBanner from "../../components/HeaderBanner";
function TalentID(props) {
  const router = useRouter();

  const { talentToHire, setTalentToHire, setIdOfTalentToHire } = AllCtx();

  if (router.isFallback) {
    return <Loading />;
  }

  var oneRating = [true, false, false, false, false];
  var twoRating = [true, true, false, false, false];
  var threeRating = [true, true, true, false, false];
  var fourRating = [true, true, true, true, false];
  var fiveRating = [true, true, true, true, true]; 

  const { talentID, selectedTalent } = props;

  // console.log(talentID);

  return (
    <div className="px-5 md:px-10 lg:px-16">
      {/* <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold header">
          Talent Profile
        </h2>
      </div>
      <div className="flex justify-center mb-3 ">
        <div className=" w-[75px] md:w-[150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div> */}

      <HeaderBanner title={"Talent Profile"}/>



      <div className=" 900:space-x-4 mt-10 900:flex">
        <div className=" 900:w-[40%]">
          <div className="flex items-center px-4 text-pry-color bg-semi-sec-color py-4  rounded-l-3xl rounded-r-full mb-4">
            <div className="w-[75%]">
              <p className="font-semibold 400:text-lg mb-1">
                {selectedTalent.name}
              </p>
              <p className="text-[#9f143e] text-xl  font-extrabold mb-3">
                {selectedTalent.title}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: selectedTalent.overview }}
                className="prose text-xs 400:text-sm "
              >
                {}
              </div>{" "}
              <div
                onClick={() => {
                  window.fbq('trackCustom', 'Talent Profile Hire Button Clicked', {
                    talentToHire: `${selectedTalent.name}`,
                  
                  })
                  setTalentToHire(selectedTalent.name);
                  setIdOfTalentToHire(selectedTalent.id);
                  router.push("/post-a-job");
                }}
                className="flex justify-end"
              >
                <button className="px-1 mt-1 text-sm font-semibold ring-pry-color hover:ring-[1px]">
                  Hire Talent
                </button>
              </div>
            </div>{" "}
            <div className=" float-right">
              <Image alt="Image alt text"
                height={80}
                width={70}
                className=""
                src={selectedTalent.icon || "/images/default-dp.png"}
            
              />
            </div>
          </div>

{/* LOCATION */}

<div className="rounded-xl bg-semi-sec-color py-4 mb-4 ">
              <div className="pl-4">
                <p className="font-bold text-pry-color mb-2">Location</p>
               
                  <div  className="flex items-center">
                <p className="w-[70px] font-semibold">{selectedTalent.country}</p> <p>({selectedTalent.state})</p>
                   
                  </div>
               
              </div>
            </div>


          {/* LANGUAGES  */}
          {selectedTalent.languages && (
            <div className="rounded-xl bg-semi-sec-color py-4 mb-4 ">
              <div className="pl-4">
                <p className="font-bold text-pry-color mb-2">Languages</p>
                {selectedTalent.languages.map((language) => (
                  <div key={language.name} className="flex items-center">
                    <p className="w-[70px] font-semibold">{language.name}</p>{" "}
                    <div className="flex space-x-2">
                      {" "}
                      {language.rating == 1 &&
                        oneRating.map((value, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full flex ${value ? 'bg-gray-600' : 'bg-gray-300'}`}
                          ></div>
                        ))}
                      {language.rating == 2 &&
                        twoRating.map((value) => (
                          <div
                            key={value}
                             className={`w-3 h-3 rounded-full flex ${value ? 'bg-gray-600' : 'bg-gray-300'}`}
                          ></div>
                        ))}
                      {language.rating == 3 &&
                        threeRating.map((value) => (
                          <div
                            key={value}
                             className={`w-3 h-3 rounded-full flex ${value ? 'bg-gray-600' : 'bg-gray-300'}`}
                          ></div>
                        ))}
                      {language.rating == 4 &&
                        fourRating.map((value) => (
                          <div
                            key={value}
                             className={`w-3 h-3 rounded-full flex ${value ? 'bg-gray-600' : 'bg-gray-300'}`}
                          ></div>
                        ))}
                      {language.rating == 5 &&
                        fiveRating.map((value) => (
                          <div
                            key={value}
                             className={`w-3 h-3 rounded-full flex ${value ? 'bg-gray-600' : 'bg-gray-300'}`}
                          ></div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HOBBIES */}
          {selectedTalent.hobbies && (
            <div className="rounded-xl bg-semi-sec-color mb-4 py-4 ">
              <div className="pl-4">
                <p className="font-bold text-pry-color mb-2">Hobbies</p>

                <div className="flex  space-x-4  pr-5">
                  {selectedTalent.hobbies.map((hobby) => (
                    <div key={hobby}>
                      <div className="flex justify-center items-center  mb-1 ">
                        {/* <Image alt="Image alt text"
                        height={20}
                        width={20}
                        className="h-5 w-5"
                        src="/images/logos-and-icons/soccer-hobby.png"
                      
                      /> */}
                        {hobby.name?.trim() === "Reading" ? (
                          <FaBookReader className="w-[20px] h-[20px] text-pry-color " />
                        ) : hobby.name?.trim() === "Football" ? (
                          <IoFootballOutline className="w-[20px] h-[20px] text-pry-color " />
                        ) : hobby.name?.trim() === "Singing" ? (
                          <GiLoveSong className="w-[20px] h-[20px] text-pry-color " />
                        ) : hobby.name?.trim() === "Traveling" ? (
                          <SiYourtraveldottv className="w-[20px] h-[20px] text-pry-color " />
                        ) : hobby.name?.trim() === "Gaming" ? (
                          <IoGameControllerSharp className="w-[20px] h-[20px] text-pry-color " />
                        ) : hobby.name?.trim() === "Skating" ? (
                          <MdOutlineSkateboarding className="w-[20px] h-[20px] text-pry-color " />
                        ) : hobby.name?.trim() === "Hiking" ? (
                          <FaHiking className="w-[20px] h-[20px] text-pry-color " />
                        ) : hobby.name?.trim() === "Soccer" ? (
                          <IoFootballOutline className="w-[20px] h-[20px] text-pry-color " />
                        ) : (
                          <MdFavorite className="w-[20px] h-[20px] text-pry-color " />
                        )}
                      </div>
                      <div className="flex justify-center items-center text-xs ">
                        {" "}
                        <p>{hobby.name}</p>{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS  */}
          <div className="rounded-xl bg-semi-sec-color py-4 ">
            <div className="pl-4">
              <p className="font-bold text-pry-color mb-2">Projects</p>

              <div className="flex justify-between pr-5">
                {selectedTalent.projects.map((project, i) => (
                  <div key={i}>
                    <div className="flex justify-center items-center">
                      {" "}
                      <div className="flex justify-center items-center bg-white  h-10 w-10 rounded-full border-pry-color border-2 font-semibold">
                        {" "}
                        {project.value.includes("http") ? (
                          (
                            <Image alt="Image alt text" src={project.value} height="20" width="20" />
                          ) || "Nil"
                        ) : (
                          <p>{project.value || 0}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center items-center text-xs text-pry-color font-semibold ">
                      {" "}
                      <p>{project.status || 0}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="900:w-[55%] bg-semi-sec-color mt-5 900:mt-0 pl-6 py-5 pr-3 text-pry-color rounded-r-3xl">
          <div>
            <div className="flex items-center mb-4">
              {" "}
              <div
                className="h-[1rem] w-[60%] 400:h-[1.5rem] 
400:w-[40%] rounded-md flex justify-center items-center bg-pry-color text-white text-xs   pt-[0.6rem] pb-[0.6rem]"
              >
                {" "}
                <p className="text-[0.6rem] 400:text-xs">SKILLS</p>{" "}
              </div>{" "}
              <div className="h-[0.1rem] w-[70%] bg-pry-color "></div>{" "}
            </div>
            {/* SKILLS */}
            <div className=" grid grid-cols-5 gap-y-3  mt-3 ">
              {selectedTalent.skills.map((skill) => (
                <div key={skill.id} className="">
                  <div  className="flex justify-center cursor-pointer ">
                  {/* onClick={()=>{router.push(`/skills/${skill.id}`)}} */}
                    <div className="400:flex border-pry-color border-2 justify-center items-center bg-white h-8 w-8 hidden 400:h-12 400:w-12 rounded-full">
                      {" "}
                      <Image alt="Image alt text"
                        height={30}
                        width={30}
                        className="w-4 h-4  400:h-auto 400:w-auto"
                        src={skill.icon || "/images/default-skill.png"}
                   
                      />{" "}
                    </div>
                    <div className="flex border-pry-color border-2 justify-center items-center bg-white h-8 w-8 400:hidden 400:h-12 400:w-12 rounded-full">
                      {" "}
                      <Image alt="Image alt text"
                        height={20}
                        width={20}
                        className="w-4 h-4  400:h-auto 400:w-auto"
                        src={skill.icon || "/images/default-skill.png"}
                       
                      />{" "}
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-center text-[0.5rem] font-semibold 400:font-normal 400:text-xs">
                    <p>{skill.name}</p>
                  </div>
                  <div className="flex justify-center">
                    {skill.rating == 1 &&
                      oneRating.map((star, i) => (
                        <div key={i}>
                          <Image alt="Image alt text"
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 2 &&
                      twoRating.map((star, i) => (
                        <div key={i}>
                          <Image alt="Image alt text"
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 3 &&
                      threeRating.map((star, i) => (
                        <div key={i}>
                          <Image alt="Image alt text"
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 4 &&
                      fourRating.map((star, i) => (
                        <div key={i}>
                          <Image alt="Image alt text"
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 5 &&
                      fiveRating.map((star, i) => (
                        <div key={i}>
                          <Image alt="Image alt text"
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OTHER SKILLS */}
          {selectedTalent.otherSkills && (
            <div className="mt-8">
              <div className="flex items-center mb-4">
                {" "}
                <div
                  className="h-[1rem] w-[60%] 400:h-[1.5rem] 
400:w-[40%] rounded-md flex justify-center items-center bg-pry-color text-white text-xs   pt-[0.6rem] pb-[0.6rem]"
                >
                  {" "}
                  <p className="text-[0.6rem] 400:text-xs">OTHER SKILLS</p>{" "}
                </div>{" "}
                <div className="h-[0.1rem] w-[70%] bg-pry-color "></div>{" "}
              </div>

              <div className="grid grid-cols-5 gap-y-3  mt-3 ">
                {selectedTalent.otherSkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-center ">
                      {" "}
                      <div className="400:flex hidden border-pry-color border-2 justify-center items-center bg-white h-8 w-8 400:h-12 400:w-12 rounded-full">
                        {" "}
                        <Image alt="Image alt text"
                          height={30}
                          width={30}
                          className="w-4 h-4  400:h-auto 400:w-auto"
                          src={skill.icon || "/images/default-skill.png"}
                         
                        />{" "}
                      </div>
                      <div className="flex 400:hidden border-pry-color border-2 justify-center items-center bg-white h-8 w-8 400:h-12 400:w-12 rounded-full">
                        {" "}
                        <Image alt="Image alt text"
                          height={20}
                          width={20}
                          className="w-4 h-4  400:h-auto 400:w-auto"
                          src={skill.icon || "/images/default-skill.png"}
                        
                        />{" "}
                      </div>
                    </div>
                    <div className="flex justify-center items-center text-center text-[0.5rem] font-semibold 400:font-normal 400:text-xs">
                      <p>{skill.name}</p>
                    </div>

                    <div className="flex justify-center">
                      {skill.rating == 1 &&
                        oneRating.map((star, i) => (
                          <div key={i}>
                            <Image alt="Image alt text"
                              src="/images/logos-and-icons/star.png"
                              height="10"
                              width="10"
                            />
                          </div>
                        ))}

                      {skill.rating == 2 &&
                        twoRating.map((star, i) => (
                          <div key={i}>
                            <Image alt="Image alt text"
                              src="/images/logos-and-icons/star.png"
                              height="10"
                              width="10"
                            />
                          </div>
                        ))}

                      {skill.rating == 3 &&
                        threeRating.map((star, i) => (
                          <div key={i}>
                            <Image alt="Image alt text"
                              src="/images/logos-and-icons/star.png"
                              height="10"
                              width="10"
                            />
                          </div>
                        ))}

                      {skill.rating == 4 &&
                        fourRating.map((star, i) => (
                          <div key={i}>
                            <Image alt="Image alt text"
                              src="/images/logos-and-icons/star.png"
                              height="10"
                              width="10"
                            />
                          </div>
                        ))}

                      {skill.rating == 5 &&
                        fiveRating.map((star, i) => (
                          <div key={i}>
                            <Image alt="Image alt text"
                              src="/images/logos-and-icons/star.png"
                              height="10"
                              width="10"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FEATURED PROJECTS */}
          {selectedTalent.featuredProjects && (
            <div className="mt-8">
              <div className="flex items-center mb-4">
                {" "}
                <div className="h-[1rem] 400:h-[1.5rem]  w-[60%] 400:w-[40%]  rounded-md flex justify-center items-center bg-pry-color text-white text-xs   pt-[0.6rem] pb-[0.6rem]">
                  {" "}
                  <p className="text-[0.6rem] 400:text-[0.65rem]  ">
                    FEATURED PROJECTS
                  </p>{" "}
                </div>{" "}
                <div className="h-[0.1rem] w-[70%] bg-pry-color "></div>{" "}
              </div>

              <div>
                {selectedTalent.featuredProjects.map((featuredProject) => (
                  <div key={featuredProject.projectUrl} className="mb-5">
                    <div>
                      <p className="font-semibold text-gray-700">
                        - {featuredProject.title}
                      </p>
                    </div>
                    <div>
                      <a href={featuredProject.projectUrl}>Link</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" mt-5 flex justify-center  ">
        <div className=" rounded-md w-[80%] md:w-[50%] flex justify-center bg-pry-color py-3 text-white 400:text-lg 400:font-semibold hover:shadow-lg cursor-pointer">
          <button
            onClick={() => {
              window.fbq('trackCustom', 'Talent Profile Hire Button Clicked', {
                talentToHire: `${selectedTalent.name}`,
              
              })
              setTalentToHire(selectedTalent.name);
              setIdOfTalentToHire(selectedTalent.id);

              router.push("/post-a-job");
            }}
          >
            Hire Talent
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const talentID = context.params.talentID;

  const response = await fetch( 
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/aboutpage`
  );
  const data = await response.json();
  const designerArray = data.designers;
  const engineerArray = data.engineers;
  const developerArray = data.developers;

  const talentArray = [...designerArray, ...engineerArray, ...developerArray];

  function talentFinder() {
    return talentArray.find((talent) => talent.id === talentID);
  }
  const selectedTalent = talentFinder(talentID);



  if (!selectedTalent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      talentID,
      selectedTalent,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/aboutpage`
  );
  const data = await response.json();

  const designerArray = data.designers;
  const engineerArray = data.engineers;
  const developerArray = data.developers;

  const talentArray = [...designerArray, ...engineerArray, ...developerArray];

  const talentPaths = talentArray.map((talent) => talent.id);

  return {
    paths: talentPaths.map((talentID) => ({
      params: { talentID },
    })),
    fallback: true,
  };
}

export default TalentID;

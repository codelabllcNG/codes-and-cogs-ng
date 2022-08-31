import React from "react";
import Image from "next/image";
import Loading from "../../components/Loading";
import AllCtx from "../../util-functions/allCtx";
import { useRouter } from "next/router";

function TalentID(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  var oneRating = [1];
  var twoRating = [1, 2];
  var threeRating = [1, 2, 3];
  var fourRating = [1, 2, 3, 4];
  var fiveRating = [1, 2, 3, 4, 5];

  const { talentID, selectedTalent } = props;

  console.log(talentID);

  return (
    <div className="px-5 md:px-10">
      <div className="flex  md:justify-center md:mb-2">
        <h2 className="font-bold text-xs 400:text-xl  md:text-3xl">
          Talent Profile
        </h2>
      </div>
      <div className="flex md:justify-center mb-3 ">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className=" 900:space-x-4 900:flex">
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
              </div>
            </div>{" "}
            <div className=" float-right">
              <Image
                height={80}
                width={70}
                className=""
                src={selectedTalent.icon}
                alt=""
              />
            </div>
          </div>

          {/* LANGUAGES  */}
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
                          className={`w-3 h-3 rounded-full flex bg-gray-500`}
                        ></div>
                      ))}
                    {language.rating == 2 &&
                      twoRating.map((value) => (
                        <div
                          key={value}
                          className={`w-3 h-3 rounded-full flex bg-gray-500`}
                        ></div>
                      ))}
                    {language.rating == 3 &&
                      threeRating.map((value) => (
                        <div
                          key={value}
                          className={`w-3 h-3 rounded-full flex bg-gray-500`}
                        ></div>
                      ))}
                    {language.rating == 4 &&
                      fourRating.map((value) => (
                        <div
                          key={value}
                          className={`w-3 h-3 rounded-full flex bg-gray-500`}
                        ></div>
                      ))}
                    {language.rating == 5 &&
                      fiveRating.map((value) => (
                        <div
                          key={value}
                          className={`w-3 h-3 rounded-full flex bg-gray-500`}
                        ></div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HOBBIES */}
          <div className="rounded-xl bg-semi-sec-color mb-4 py-4 ">
            <div className="pl-4">
              <p className="font-bold text-pry-color mb-2">Hobbies</p>

              <div className="flex  space-x-4  pr-5">
                {selectedTalent.hobbies.map((hobby) => (
                  <div key={hobby}>
                    <div className="flex justify-center items-center  mb-2 ">
                      <Image
                        height={20}
                        width={20}
                        className="h-5 w-5"
                        src="/images/logos-and-icons/soccer-hobby.png"
                        alt=""
                      />
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
                          <Image src={project.value} height="20" width="20" />
                        ) : (
                          <p>{project.value}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center items-center text-xs text-pry-color font-semibold ">
                      {" "}
                      <p>{project.status}</p>
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
                  <div className="flex justify-center ">
                    {" "}
                    <div className="400:flex border-pry-color border-2 justify-center items-center bg-white h-8 w-8 hidden 400:h-12 400:w-12 rounded-full">
                      {" "}
                      <Image
                        height={30}
                        width={30}
                        className="w-4 h-4  400:h-auto 400:w-auto"
                        src={skill.icon}
                        alt=""
                      />{" "}
                    </div>
                    <div className="flex border-pry-color border-2 justify-center items-center bg-white h-8 w-8 400:hidden 400:h-12 400:w-12 rounded-full">
                      {" "}
                      <Image
                        height={20}
                        width={20}
                        className="w-4 h-4  400:h-auto 400:w-auto"
                        src={skill.icon}
                        alt=""
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
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 2 &&
                      twoRating.map((star, i) => (
                        <div key={i}>
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 3 &&
                      threeRating.map((star, i) => (
                        <div key={i}>
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 4 &&
                      fourRating.map((star, i) => (
                        <div key={i}>
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 5 &&
                      fiveRating.map((star, i) => (
                        <div key={i}>
                          <Image
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
                      <Image
                        height={30}
                        width={30}
                        className="w-4 h-4  400:h-auto 400:w-auto"
                        src={skill.icon}
                        alt=""
                      />{" "}
                    </div>
                    <div className="flex 400:hidden border-pry-color border-2 justify-center items-center bg-white h-8 w-8 400:h-12 400:w-12 rounded-full">
                      {" "}
                      <Image
                        height={20}
                        width={20}
                        className="w-4 h-4  400:h-auto 400:w-auto"
                        src={skill.icon}
                        alt=""
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
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 2 &&
                      twoRating.map((star, i) => (
                        <div key={i}>
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 3 &&
                      threeRating.map((star, i) => (
                        <div key={i}>
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 4 &&
                      fourRating.map((star, i) => (
                        <div key={i}>
                          <Image
                            src="/images/logos-and-icons/star.png"
                            height="10"
                            width="10"
                          />
                        </div>
                      ))}

                    {skill.rating == 5 &&
                      fiveRating.map((star, i) => (
                        <div key={i}>
                          <Image
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

          {/* FEATURED PROJECTS */}
          <div className="mt-8">
            <div className="flex items-center mb-4">
              {" "}
              <div className="h-[1rem] 400:h-[1.5rem]  w-[60%] 400:w-[40%]  rounded-md flex justify-center items-center bg-pry-color text-white text-xs   pt-[0.6rem] pb-[0.6rem]">
                {" "}
                <p className="text-[0.6rem] 400:text-xs  ">
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
        </div>
      </div>

      <div className=" mt-5 flex justify-center  ">
        <div className=" rounded-md w-[80%] md:w-[50%] flex justify-center bg-pry-color py-3 text-white 400:text-lg 400:font-semibold hover:shadow-lg cursor-pointer">
          <button>Hire Talent</button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const talentID = context.params.talentID;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/aboutpage`
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
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/aboutpage`
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

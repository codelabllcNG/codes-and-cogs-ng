import React, { useState } from "react";
import AllCtx from "../../util-functions/allCtx";

function ApplicationForm(props) {
  const { showApplicationForm, setShowApplicationForm } = AllCtx();
  const { selectedVacancy } = props;

  // document.body.style.overflow = "hidden"

  const [fileResponse, setFileResponse] = useState("");
  const [response, setResponse] = useState("");

  const [resumeUpload, setResumeUpload] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedInURL, setLinkedInURL] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [dribbleURL, setDribbleURL] = useState("");
  const [additionalQuestion, setAdditionalQuestion] = useState("");
  const [referrer, setReferrer] = useState("");


  async function handleSubmit() {
    if (!resumeUpload) {
      setResponse("You have to upload your Resume/CV.");
      return;
    }

    if (
      resumeUpload.type !== "application/pdf" &&
      resumeUpload.type !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
      resumeUpload.type !== "application/msword"
    ) {
      setResponse("Only pdf, doc, and docx formats are allowed.");
      return;
    }

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    const base64File = await toBase64(resumeUpload);


    if (
      !fullName ||
      fullName.trim() === "" ||
      !email ||
      email.trim() === "" ||
      !phone ||
      phone.trim() === "" ||
      !linkedInURL ||
      linkedInURL.trim() === "" ||
      !gitHubURL ||
      gitHubURL.trim() === "" ||
      !additionalQuestion ||
      additionalQuestion.trim() === ""
    ) {
      setResponse(
        "Fill all important (red-starred) fields."
      );
      return;
    }

    try {
      setResponse("Submitting...");
      // setSubmitting(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/submitapplicantform`,
        {
          method: "POST",
          body: JSON.stringify({
            resume: base64File,
            name: fullName,
            email: email,
            phone_number: phone,
            linkedin_url: linkedInURL,
            github_url: gitHubURL,
            portfolio_url: portfolio,
            dribble_url: dribbleURL,
            question_answer: additionalQuestion,
            referrer: referrer,
            role: selectedVacancy.title
           
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      // console.log(data);
      // return

      if (!response.ok) {
        setResponse("Something went wrong, retry!");
        // console.log(data);
        setSubmitting(false);
        return;
      }

      // window.fbq("trackCustom", "Invitation Test Submissions", {
      //   participantEmail: `${testData.participants_info.email}`,
      // });

      setResponse("Submitted successfully!");
      console.log("Submitted successfully!");


      // setSubmitting(false);
    } catch (error) {
      console.log(error);
      setResponse("Something went wrong, please try again.");
      // setSubmitting(false);
    }
  }

  return (
    showApplicationForm && (
      <div className="  flex justify-center items-center h-auto pb-32 w-full bg-black bg-opacity-50  -ml-5 md:-ml-10 lg:-ml-16 z-[10]  absolute -mt-32 pt-32">
        <div className=" w-[90%] md:w-[75%] h-auto  bg-white z-[11]  rounded-xl shadow-lg p-5 md:p-8 relative ">
          <div
            className=" font-bold text-black md:text-2xl text-lg"
            dangerouslySetInnerHTML={{
              __html: `Apply for ${selectedVacancy.title} Role`,
            }}
          >
            {}
          </div>

          <div className="font-semibold text-sm md:text-base mt-2">
            <span className="text-pry-color ">
              {selectedVacancy.state}, {selectedVacancy.country}
            </span>{" "}
            / <span>{selectedVacancy.type}</span>
          </div>

          <hr className="-mx-2 md:-mx-5 my-4 border" />

          <div className=" ">
            {/* PERSONAL DETAILS SECTION */}
            <div>
              <div className="font-semibold text-lg">PERSONAL DETAILS</div>
              <div className="mt-4 space-y-5 ml-5">
                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    Resume/CV <span className="text-red-600">*</span>
                  </div>
                  <div className="mt-1 md:mt-0 ">
                    <input
                      onChange={(e) => {
                        setResumeUpload(e.target.files[0]);
                        if (
                          e.target.files[0].type !== "application/pdf" &&
                          e.target.files[0].type !==
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
                          e.target.files[0].type !== "application/msword"
                        ) {
                          setFileResponse("Only pdf, doc, and docx formats are allowed.");
                          return;
                        } else {setFileResponse("")}
                      }}
                      type="file"
                      className="cursor-pointer file:cursor-pointer file:rounded-lg file:px-4 file:border-none file:text-sm file:py-2 text-sm"
                    />
                  
                  </div>
                </div>
                
{fileResponse && <div className='md:ml-[21%] text-sm text-red-600'>{ fileResponse}</div>}
                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    Full Name <span className="text-red-600">*</span>
                  </div>
                  <div className="w-[90%] md:w-[75%] mt-1 md:mt-0">
                    <input
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      type="text"
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full"
                    />
                  </div> 
                </div>

                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    Email <span className="text-red-600">*</span>
                  </div>
                  <div className="w-[90%] md:w-[75%] mt-1 md:mt-0">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full"
                    />
                  </div>
                </div>

                {/* <div className='md:flex items-center md:space-x-5'>
              <div className='text-sm md:w-[18%] mt-1 md:mt-0'>Confirm Email <span className='text-red-600'>*</span></div>
              <div className='w-[90%] md:w-[75%]'><input type="text" className='outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full'/></div>
            </div> */}

                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    Phone <span className="text-red-600">*</span>
                  </div>
                  <div className="w-[90%] md:w-[75%] mt-1 md:mt-0">
                    <input placeholder="Include your country code"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="tel"
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* LINKS SECTION */}
            <div className="mt-10">
              <div className="font-semibold text-lg">LINKS</div>
              <div className="mt-4 space-y-5 ml-5">
                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    LinkedIn URL <span className="text-red-600">*</span>
                  </div>
                  <div className="w-[90%] md:w-[75%]">
                    <input
                      onChange={(e) => {
                        setLinkedInURL(e.target.value);
                      }}
                      type="text"
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full"
                    />
                  </div>
                </div>

                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    GitHub URL <span className="text-red-600"></span>
                  </div>
                  <div className="w-[90%] md:w-[75%]">
                    <input
                      onChange={(e) => {
                        setGitHubURL(e.target.value);
                      }}
                      type="text"
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full"
                    />
                  </div>
                </div>

                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    Portfolio <span className="text-red-600"></span>
                  </div>
                  <div className="w-[90%] md:w-[75%]">
                    <input
                      onChange={(e) => {
                        setPortfolio(e.target.value);
                      }}
                      type="text"
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full"
                    />
                  </div>
                </div>

                <div className="md:flex items-center md:space-x-5">
                  <div className="text-sm md:w-[18%]">
                    Dribble URL <span className="text-red-600"></span>
                  </div>
                  <div className="w-[90%] md:w-[75%]">
                    <input
                      onChange={(e) => {
                        setDribbleURL(e.target.value);
                      }}
                      type="text"
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ADDITIONAL QUESTIONS SECTIONS */}
            <div className="mt-10">
              <div className="font-semibold text-lg">ADDITIONAL QUESTIONS</div>
              <div className="mt-4 space-y-5 ml-5">
                <div className=" items-center ">
                  <div className="text-sm ">
                    What makes you a good fit for Codes and Cogs
                    <span className="text-red-600">*</span>
                  </div>
                  <div className="mt-2 w-[92%]">
                    <textarea
                      onChange={(e) => {
                        setAdditionalQuestion(e.target.value);
                      }}
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full "
                    />
                  </div>
                </div>

                <div className=" items-center  ">
                  <div className="text-sm ">
                    If you were referred by one of our employees, tell us who.
                    <span className="text-red-600"></span>
                  </div>
                  <div className="mt-2 w-[92%] ">
                    <input
                      onChange={(e) => {
                        setReferrer(e.target.value);
                      }}
                      className="outline outline-1 px-2 text-sm py-2 outline-gray-400 rounded-xl w-full  "
                    />
                  </div>
                </div>

                <div
                  className={`h-5 mb-3 flex justify-center mt-3 py-2 text-lg`}
                >
                  <div className={`${response.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{response}</div>
                </div>

                <div className="flex justify-center mt-10 ">
                  <button
                    onClick={() => {
                      handleSubmit();
                    }}
                    className="mb-20 mt-10 md:mt-3 text-lg px-5 md:px-8 py-2 bg-pry-color text-white rounded-2xl hover:text-pry-color hover:bg-white hover:shadow-lg duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setShowApplicationForm(false);
            }}
            className="absolute  bottom-5 right-5 px-2 py-1 shadow-md md:px-x text-xs rounded-lg bg-pry-color text-white "
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default ApplicationForm;

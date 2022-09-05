import React, { useEffect, useState } from "react";
// import { QUESTIONS } from "../a-store/content-store/QUESTIONS";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AllCtx from "../util-functions/allCtx";
import { useRouter } from "next/router";
import Image from "next/image";

function TakeATest() {
  const router = useRouter();

  const {
    testData,
    setTestData,
    countDownTimer,
    setCountDownTimer,
    expiryTime,
  } = AllCtx();

  const [questionArray, setQuestionArray] = useState([]);
  const [answersArray, setAnswersArray] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [timeUp, setTimeUp] = useState(false);
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  useEffect(() => {
    if (!testData) {
      router.push("/join-us");
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setQuestionArray(testData?.questions);
    setLoading(false);
  }, [testData?.questions, questionArray, qIndex]);

  useEffect(() => {
    showConfirmBox
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showConfirmBox]);

  useEffect(() => {
   
    var countDownTime = setInterval(() => {
      console.log("still running", submitted);
      if (submitted) {
        console.log("INTENTIONALLY SUBMITTED! ", submitted);
        clearInterval(countDownTime);
        return
      }

      var now = new Date().getTime();

      var timeDifference = expiryTime - now;

      // var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountDownTimer(`${hours}:${minutes}:${seconds}`);

      if (timeDifference < 0) {
        clearInterval(countDownTime);
        setTimeUp(true);
        setCountDownTimer("TIME OUT");
        console.log("TIME OUT SUBMITTED! ", submitted);
        // setShowConfirmBox(true);
      //  if(!submitted) { handleSubmit()}
        return
      }
    }, 1000);
    return ()=> clearInterval(countDownTime)
  }, [submitted]);

  function navigateQuestions(value) {
    setQIndex(value);
  }

  function handleAnswerSelect(questionID, selectedAnswer) {
    let newQuestionArray = [...questionArray];
    let questionToAnswer = newQuestionArray.find(
      (question) => question.id === questionID
    );

    questionToAnswer.selectedAnswer = selectedAnswer;

    setQuestionArray(newQuestionArray);

    setAnswersArray(
      newQuestionArray.map((answer) => ({
        id: answer.id,
        selectedAnswer: answer.selectedAnswer,
      }))
    );

    for (let i = 0; i < newQuestionArray.length; i++) {
      if (!newQuestionArray[i].selectedAnswer) {
        setDone(false);
        return;
      } else {
        setDone(true);
      }
    }
  }

  async function handleSubmit() {
    if (!testData) {
      setResponse(
        "You are not authorized to submit. Go back to apply for a test."
      );
      console.log(
        "You are not authorized to submit. Go back to apply for a test."
      );
      return;
    }

    try {
      setResponse("Submitting...");
      setSubmitting(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/submitquestion`,
        {
          method: "POST",
          body: JSON.stringify({
            participants_info: {
              id: testData.participants_info.id,
              email: testData.participants_info.email,
            },
            answers: answersArray,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const data = await response.json();

      if (!response.ok) {
        setResponse("Something went wrong, retry!");
        // console.log(data);
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      setCountDownTimer("__:__:__");
      setResponse(
        "Test submitted successfully. Your result has been sent to your email address!"
      );
      console.log(
        "Test submitted successfully. Your result has been sent to your email address!"
      );
      // console.log(data);

      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setResponse("Error, failed to submit. Retry.");
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* CONFIRM BOX */}

      {showConfirmBox && (
        <div className="flex justify-center items-center -my-40 h-screen w-full overflow-hidden bg-black bg-opacity-30 fixed z-30 ">
          <div
            className="w-[70%] bg-white h-1/3 rounded-md shadow-md shadow-pry-color p-5
        "
          >
            <div>
              <p
                className={`text-pry-color 400:text-xl font-semibold text-center`}
              >
                {timeUp
                  ? "Your time is up! Don't worry, we will submit for you."
                  : "Are you sure you want to submit?"}
              </p>
            </div>

            <div className="mt-12">
              <div className="flex justify-center text-center mb-2 text-lg font-semibold">
                <p
                  className={`   ${
                    response.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {`${response}`}
                </p>
              </div>
              {timeUp ? (
                <div className="flex justify-center space-x-5">
                  <button
                    onClick={() => {
                      setShowConfirmBox(false);
                      setTestData();
                      router.push("/take-a-test");
                    }}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                    OK
                  </button>
                </div>
              ) : submitted ? (
                <div className="flex justify-center space-x-5">
                  <button
                    onClick={() => {
                      setShowConfirmBox(false);
                      setTestData();
                      router.push("/take-a-test");
                    }}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                    OK
                  </button>
                </div>
              ) : (
                <div className="flex justify-center space-x-5">
                  <button
                    onClick={handleSubmit}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                    YES
                  </button>{" "}
                  <button
                    onClick={() => {
                      setShowConfirmBox(false);
                    }}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                    NO
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {testData ? (
        <div className="px-5 md:px-14">
          {loading ? (
            <p>Loading...</p>
          ) : (
            questionArray
              .map((question) => (
                <div key={question.id}>
                  <div>
                  <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold text-xs 400:text-xl  md:text-3xl">
         Codes and Cogs   DEMO TEST
        </h2>
      </div>
      <div className="flex justify-center mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>
                  </div>
                  <div className="flex  justify-between  mb-10">
                    <div className=' text-pry-color font-semibold 400: text-xl sm:text-2xl md:text-3xl'>{testData.participants_info.name}</div>
                    <div  className=' text-pry-color font-semibold 400: text-xl sm:text-2xl md:text-3xl'>{countDownTimer}</div>
                  </div>
                  <div className="flex space-x-3 text-xl">
                    <div>
                      <p className="font-bold">{`Q${qIndex + 1}`}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{question.question}</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    {question?.options.map((option, i) => (
                      <div key={i} className="flex space-x-4 mb-2">
                        {" "}
                        <input
                          checked={option.option === question.selectedAnswer}
                          htmlFor=""
                          id={question.id}
                          name={question.id}
                          type="radio"
                          value={option.option}
                          onChange={(e) => {
                            handleAnswerSelect(question.id, option.option);
                          }}
                        />{" "}
                        <p>{option.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
              .filter((a, i) => i === qIndex)
          )}
          <div className="flex  flex-wrap  mt-10">
            {questionArray.map((question, i) => (
              <div
                key={question.id}
                onClick={() => {
                  setQIndex(i);
                }}
                className={`w-8 h-8 mr-3 mb-3  cursor-pointer hover:ring-pry-color hover:ring-2 ${
                  question.selectedAnswer
                    ? "bg-pry-color text-white"
                    : "bg-mid-color text-pry-color"
                } ${
                  qIndex === i ? "ring-2" : ""
                } flex justify-center items-center text-center`}
              >
                {" "}
                <p>{i + 1}</p>{" "}
              </div>
            ))}
          </div>

          <div className="flex justify-center  mt-8">
            <div
              onClick={() => {
                if (qIndex > 0) {
                  navigateQuestions(qIndex - 1);
                }
              }}
              className={`${
                qIndex <= 0
                  ? "bg-gray-400  pointer-events-none"
                  : "cursor-pointer"
              } bg-pry-color w-[8rem] text-white pr-3 pl-1 py-1 rounded-md mr-5 hover:bg-violet-800 flex justify-evenly items-center`}
            >
              <div className="flex items-center justify-center text-center">
                {" "}
                <FaAngleLeft className="text-white text-xl" />{" "}
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <p className=""> Previous</p>
              </div>
            </div>

            <div
              onClick={() => {
                if (qIndex < questionArray.length - 1) {
                  navigateQuestions(qIndex + 1);
                }
              }}
              className={`${
                qIndex >= questionArray.length - 1
                  ? "bg-gray-400 pointer-events-none"
                  : "cursor-pointer"
              } bg-pry-color w-[8rem] text-white pl-3 pr-1 py-1 rounded-md mr-5 hover:bg-violet-800 flex justify-evenly items-center`}
            >
              <div className="flex justify-center items-center">
                {" "}
                <p className="">Next</p>
              </div>
              <div className="flex items-center justify-center text-center">
                {" "}
                <FaAngleRight className="text-white text-xl" />{" "}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => {
                // console.log(answersArray);
                setShowConfirmBox(true);
              }}
              className={`${
                done ? "bg-pry-color" : "bg-gray-400 pointer-events-none"
              }  text-white px-4 py-1 rounded-md hover:via-violet-800`}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="text-xl text-center px-5 md:px-10">
          <p>
            You must submit your details before taking a test. Click{" "}
            <span
              className="text-blue-700 underline cursor-pointer"
              onClick={() => {
                router.push("/join-us");
              }}
            >
              here
            </span>{" "}
            to continue.
          </p>
        </div>
      )}
    </div>
  );
}

export default TakeATest;

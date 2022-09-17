import React, { useEffect, useState } from "react";
// import { QUESTIONS } from "../a-store/content-store/QUESTIONS";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AllCtx from "../util-functions/allCtx";
import { useRouter } from "next/router";
import Image from "next/image";

function TakeATest(props) {
  const router = useRouter();

  const { testData } = props;

  const [expiryTime, setExpiryTime] = useState(
    new Date(`${testData.expireTime}`)
  );
  const [countDownTimer, setCountDownTimer] = useState("__ : __ : __");
  const [demoTestData, setDemoTestData] = useState(testData);
  const [questionArray, setQuestionArray] = useState([]);
  const [answersArray, setAnswersArray] = useState(testData.questions);
  const [qIndex, setQIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [timeUp, setTimeUp] = useState(false);
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  const [score, setScore] = useState(0);

  useEffect(() => {
    setLoading(true);
    setQuestionArray(demoTestData?.questions);
    setLoading(false);
  }, [demoTestData?.questions, questionArray, qIndex]);

  useEffect(() => {
    showConfirmBox
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showConfirmBox]);

  useEffect(() => {
    var countDownTime = setInterval(() => {
      if (submitted) {
        console.log("INTENTIONALLY SUBMITTED! ", submitted);
        clearInterval(countDownTime);
        return;
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
        setShowConfirmBox(true);
        if (!submitted) {
          handleSubmit();
        }
        return;
      }
    }, 1000);
    return () => clearInterval(countDownTime);
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
        correctAnswer: answer.correctAnswer,
        selectedAnswer: answer.selectedAnswer,
      }))
    );

    // calculateScore();
   

    for (let i = 0; i < newQuestionArray.length; i++) {
      if (!newQuestionArray[i].selectedAnswer) {
        setDone(false);
        return;
      } else {
        setDone(true);
      }
    }

  }

  // function calculateScore() {
  //   const s = answersArray.filter(
  //     (answer) => answer.selectedAnswer === answer.correctAnswer
  //   );

  //   setScore(s.length);
  //   console.log(s.length);
 
  // }

  async function handleSubmit() {
  
    const s = answersArray.filter(
      (answer) => answer.selectedAnswer === answer.correctAnswer
    );

    console.log(answersArray); 
    setResponse("Submitting...");
    setSubmitting(true);

    {
      const timer = setTimeout(() => {
        setSubmitted(true);
        setCountDownTimer("__:__:__");
     if(s.length >= (questionArray.length/2))   {setResponse(
       `Great! You scored ${s.length}/${questionArray.length}. Click a button below to continue`
       
     );
     console.log(
      `You scored ${s.length}/${questionArray.length}. Click a button below to continue`
    );
     } else {
      setResponse(
        `You scored ${s.length}/${questionArray.length}. Click a button below to continue`
        
      );
      console.log(
        `Great! You scored ${s.length}/${questionArray.length}. Click a button below to continue`
      );
     }
      
        setSubmitting(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }

  return (
    <div>
      {/* CONFIRM BOX */}

      {showConfirmBox && (
        <div className="flex justify-center items-center -my-40 h-screen w-full overflow-hidden bg-black bg-opacity-30 fixed z-30 ">
          <div
            className="mx-2 sm:w-[80%] md:w-[70%] bg-white  rounded-md shadow-sm shadow-pry-color p-5
        "
          >
            <div>
              <p
                className={`text-pry-color 400:text-xl font-semibold text-center`}
              >
                {timeUp
                  ? !submitted ? "Your time is up! Don't worry, we will submit for you." : 'Test submitted!'
                  : !submitted ?  "Are you sure you want to submit?" : 'Test submitted!'}
              </p>
            </div>

            <div className="mt-12">
              <div className="flex justify-center text-center mb-2 text-lg font-semibold">
                <p
                  className={`   ${
                    response.includes("Great")
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
                     router.push('/demo-test', 'test')
                    // location.reload()
                    }}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                    RETAKE DEMO
                  </button>   <button
                    onClick={() => {
                      setShowConfirmBox(false);
                  
                      // router.push("/join-us/#take-a-test");

                       location.reload()
                    }}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                    TAKE REAL TEST
                  </button>
                </div>
              ) : submitted ? (
                <div className="flex justify-center space-x-5">
                  <button
                    onClick={() => {
                      setShowConfirmBox(false);
                      // router.push('/demo-test', 'test')
                      location.reload()
                    }}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                     RETAKE DEMO
                  </button>    <button
                    onClick={() => {
                      setShowConfirmBox(false);
                      // setDemoTestData();
                      router.push("/join-us/#take-a-test");
                    }}
                    className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color hover:bg-white hover:shadow-md duration-100"
                  >
                    TAKE REAL TEST
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

      <div className="px-5 md:px-14">
        {loading ? (
          <p>Loading...</p>
        ) : (
          testData.questions
            .map((question) => (
              <div key={question.id}>
                <div>
                  <div className="flex  justify-center md:mb-2">
                    <h2 className="font-bold header">
                      Codes and Cogs DEMO TEST
                    </h2>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className=" w-[75px] md:w-[150px]">
                      <Image alt="Image alt text"
                        src="/images/logos-and-icons/red-underline.png"
                        width={150}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  justify-between  mb-10">
                  <div className=" text-pry-color font-semibold 400: text-xl sm:text-2xl md:text-3xl">
                    {testData.participants_info.name}
                  </div>
                  <div className=" text-pry-color font-semibold 400: text-xl sm:text-2xl md:text-3xl">
                    {countDownTimer}
                  </div>
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
          {testData.questions.map((question, i) => (
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
              qIndex >= testData.questions.length - 1
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
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/getdemoquestions`
  );

  const data = await response.json();

  const testData = data;

  // Pass data to the page via props
  return { props: { testData } };
}

export default TakeATest;

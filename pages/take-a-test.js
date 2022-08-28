import React, { useEffect, useState } from "react";
// import { QUESTIONS } from "../a-store/content-store/QUESTIONS";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AllCtx from "../util-functions/allCtx";
import { useRouter } from "next/router";

function TakeATest() {
  const router = useRouter();

  const { testData } = AllCtx();

  const [questionArray, setQuestionArray] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState("");

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
   
    alert('Work in progress!')
    return

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
      setSending(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/submitquestion`,
        {
          method: "POST",
          body: JSON.stringify({
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            category: categoryInput,
            role: roleInput,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setResponse("Something went wrong, retry!");
        console.log(data);
        setSending(false);
        return;
      }

      // if (data.status === "error") {
      //   setResponse(data.message);
      //   console.log(data.message);
      //   setSending(false);
      //   return;
      // }

      setTestData(data);
      setResponse("Test submitted successfully. Your result has been sent to your email address!");
      console.log("Test submitted successfully. Your result has been sent to your email address!");
      console.log(data);
   
      setSending(false);
      router.push("/take-a-test");
    } catch (error) {
      console.log(error);
      setResponse("Error, failed to submit.");
      setSending(false);
    }
  }

  return (
    <div>
      {testData ? (
        <div className="px-5 md:px-14">
          {loading ? (
            <p>Loading...</p>
          ) : (
            questionArray
              .map((question) => (
                <div key={question.id}>
                  <div className='flex  justify-between -mt-5 mb-10'>
                    <div>{testData.participants_info.name}</div>
                    <div>testData.time</div>
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
              
              
                console.log(questionArray);
                  handleSubmit()
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

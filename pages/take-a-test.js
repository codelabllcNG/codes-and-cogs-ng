import React, { useEffect, useState } from "react";
import { QUESTIONS } from "../a-store/content-store/QUESTIONS";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function TakeATest() {
  const [questionArray, setQuestionArray] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [qIndex, setQIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  // const j = () => {
  //     for (let i = 0; i < questionArray.length; i++) {
  //         return i
  //     }
  // }

  useEffect(() => {
    setLoading(true);
    setQuestionArray(QUESTIONS);
    setLoading(false);
  }, [QUESTIONS, questionArray, qIndex]);

  function navigate(value) {
    setQIndex(value);
  }

  function handleAnswerSelect(questionID, selectedAnswer) {
    let newQuestionArray = [...questionArray];
    let questionToAnswer = newQuestionArray.find(
      (question) => question.id === questionID
    );

    questionToAnswer.selectedAnswer = selectedAnswer;

    setQuestionArray(newQuestionArray);
    // setAdultTitle(adultInputToChange.title);
    // return adultInputToChange.title;

    for (let i = 0; i < newQuestionArray.length; i++) {
      if (!newQuestionArray[i].selectedAnswer) {
        setDone(false);
        // console.log(newQuestionArray[i].id);
        return;
      } else {
        setDone(true);
      }
    }
  }

  return (
    <div className="px-5 md:px-14">
      {loading ? (
        <p>Loading...</p>
      ) : (
        questionArray
          .map((question) => (
            <div key={question.id}>
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
                      checked={option === question.selectedAnswer}
                      htmlFor=""
                      id={question.id}
                      name={question.id}
                      type="radio"
                      value={option}
                      onChange={(e) => {
                        handleAnswerSelect(question.id, option);
                      }}
                    />{" "}
                    <p>{option}</p> 
                  </div>
                ))}
              </div>
            </div>
          ))
          .filter((a, i) => i === qIndex)
      )}
      <div className="flex  flex-wrap  mt-10">
        {questionArray.map((question, i) => (
          <div key={question.id}
            onClick={() => {
              setQIndex(i);
            }}
            className={`w-8 h-8 mr-3 mb-3  cursor-pointer hover:ring-pry-color hover:ring-2 ${
              question.selectedAnswer
                ? "bg-pry-color text-white"
                : "bg-mid-color text-pry-color"
            } ${qIndex === i ? 'ring-2' : ''} flex justify-center items-center text-center`}
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
              navigate(qIndex - 1);
            }
          }}
          className={`${
            qIndex <= 0 ? "bg-gray-400  pointer-events-none" : "cursor-pointer"
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
              navigate(qIndex + 1);
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
        <button onClick={()=>{console.log(questionArray)}}
          className={`${
            done ? "bg-pry-color" : "bg-gray-400 pointer-events-none"
          }  text-white px-4 py-1 rounded-md hover:via-violet-800`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default TakeATest;

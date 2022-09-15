import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { useState } from 'react';
import AllCtx from '../util-functions/allCtx';

function InvitationTestLogin() {
const router = useRouter();
    const { testData, setTestData, setCountDownTimer, setExpiryTime } = AllCtx(); 

    const [response, setResponse] = useState('') 
    const [fetchingQuestions, setFetchingQuestions] = useState(false) 

    const emailRef = useRef(); 


  async  function takeTest(e) {
        e.preventDefault();

        const emailInput = emailRef.current.value;
    
        
    
        if (
          !emailInput ||
          emailInput.trim() === "" || !emailInput.includes('@')
        ) {
          setResponse("Enter a valid email address!");
          return;
        }

        try {
          
            // setConfirmBox(false);
            setResponse("Please wait...");
            setFetchingQuestions(true);
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/job_fair_test_questions?email=${emailInput}`
            );
      
            const data = await response.json();
      
            if (data.status === "error" ) {
              setResponse(data.message);
              console.log(data.message);
              setFetchingQuestions(false);
      
              return;
            }

            if (data.status === "fail") {
                setResponse(data.message);
                console.log(data.message);
                setFetchingQuestions(false);
        
                return;
              }
      
            if (!response.ok) {
              setResponse(data.message);
              console.log("Something went wrong, retry!");
              setFetchingQuestions(false);
      
              return;
            }
      
            setTestData(data);
            setExpiryTime(
              new Date(`${data.expireTime}`).setMinutes(
                new Date(`${data.expireTime}`).getMinutes() - 1
              )
            );
            setResponse("Test questions fetched successfully!");
            console.log("Test questions fetched successfully!");
            // console.log(data);
            // nameRef.current.value = "";
            // emailRef.current.value = "";
            // phoneRef.current.value = "";
            // categoryRef.current.value = "";
            // roleRef.current.value = "";
      
            setFetchingQuestions(false);
      
            router.push("/take-invitation-test", 'test'  );
          } catch (error) {
            console.log(error);
            setResponse("Error, failed to apply for test.");
            setFetchingQuestions(false);
          }
        
 }

  return (
    <div>
      
      <Head>
        <title>Codes and Cogs' Test Invitation</title>
        <meta
          name="description"
          content="You are invited to take a test at Codes and Cogs."
        />

<meta
          property="og:url"
          content={`https://www.codesandcogs.com/invitation-test-login`}
        />

        <meta property="og:title" content="Codes and Cogs' Test Invitation" />
        <meta
          property="og:description"
          content="You are invited to take a test at Codes and Cogs."
        />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
          
          <div className="flex justify-center items-center -my-40 h-screen w-full overflow-hidden bg-black bg-opacity-30 fixed z-30 ">
          <div
            className="w-[70%] bg-white h-1/3 rounded-md shadow-md shadow-pry-color p-5
        "
          >
            <div>
              <p className="text-pry-color 400:text-xl font-semibold">
                Hello Participant, input your email address below to start your test.{" "}
              </p>
                  </div>
                  
                  <div className='flex justify-center mt-2'>
                  <input  ref={emailRef} className='px-3 w-full bg-gray-50 mt-3 sm:w-[90%] md:w-[80%] lg:w-[70%] rounded-full py-1 ring-1  focus:outline outline-pry-color ' type="text" />
                </div>

                <div className="flex h-8 mt-5 justify-center text-center mb-2 text-lg font-semibold">
                <p>{response}</p>
              </div>

          
            
              <div className="flex justify-center mt-7">
                <button
                  onClick={takeTest}
                  className="bg-pry-color text-white px-5 py-1 rounded-md hover:text-pry-color  hover:bg-white hover:shadow-md duration-100 hover:outline "
                >
                  START TEST
                </button>{" "}
            
              </div>
           
          </div>
        </div>

    </div>
  )
}

export default InvitationTestLogin 
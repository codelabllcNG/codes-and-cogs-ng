import React from "react";
import BotIcon from "../BotIcon";
import { useRouter } from "next/router";

function Section1(props) {

  const {
    supportTitle,
    supportSubtitle,
    supportBgImage,
    customerCareNumber,
  } = props;

  let router = useRouter();

  return (
    <div className="px-5 md:pb-24  md:px-14 md:bg-[url('/images/support-bg.png')]  bg-cover bg-bottom bg-no-repeat">
      <div className="pt-10 mb-5">
        <p className="font-bold text-base 400:text-xl font-larken  md:text-3xl lg:text-4xl">
       {supportTitle}
        </p>
      </div>

      <div className="md:w-[60%] mb-5">
        <p className="text-pry-color text-lg md:leading-7 lg:text-xl">
       {supportSubtitle}
        </p>
      </div>

      <div className="mb-10 flex space-x-2 500:space-x-5">
        <button
          onClick={() => {
            router.push("#create-ticket");
          }}
          className="bg-pry-color text-white px-3 500:px-5 py-2 500:py-2 rounded-lg text-[0.6rem] 400:text-sm font-semibold" 
        >
          Open a New Ticket
        </button>{" "}
        <button
          onClick={() => {
            router.push("#ticket-status");
          }}
          className="bg-pry-color text-white px-3 500:px-5 py-2 500:py-2 rounded-lg text-[0.6rem] 400:text-sm font-semibold"
        >
          Check Ticket Status
        </button>
      </div>

      <div className="md:mb-32">
        <p className="font-semibold">Customer Care</p>
        <p>{customerCareNumber}</p>
      </div>

      <BotIcon />
    </div>
  );
}

export default Section1;

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AllCtx from "../util-functions/allCtx";

function PrivacyPolicy(props) {
  const { content } = props;

  const router = useRouter();
  return (
    <div className="px-5 py-5 md:px-14 leading-7 md:leading-10">
      <div>
        <div className="flex  justify-center md:mb-2">
          <h2 className="font-bold header">Privacy Policy</h2>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image
              alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      <div
        className="dangerous-html"
        dangerouslySetInnerHTML={{ __html: content }}
      >
        {}
      </div>
    </div>
  ); 
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/legal_privacy`
  );
  const data = await response.json();

  const content = data.legal; 

  // console.log(content);

  return {
    props: { 
      content,
    },
    revalidate: 300,
  }; 
}

export default PrivacyPolicy;

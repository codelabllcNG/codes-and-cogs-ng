import React from "react";
import {
  selectedFeasibility,
  FEASIBILITY,
} from "../../a-store/content-store/FEASIBILITY";
import Image from "next/image";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import Head from "next/head";

function FeasibilityID(props) {
  const router = useRouter();

  const { selectedFeasibility } = props;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className="px-5 md:px-10">
      <Head>
        <title>{selectedFeasibility.title}</title>
        <meta name="description" content={selectedFeasibility.title} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/feasibility/${selectedFeasibility.id}`}
        />
      </Head>

      <div className="flex  justify-center mb-2">
        <h2 className="font-bold text-3xl">{selectedFeasibility.title}</h2>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className=" [150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className="900:flex justify-between items-center ">
        <div className="900:w-[40%] items-center flex justify-center mb-5 900:mb-0">
          {" "}
          <video
            // width="400"
            height="305"
            controls
            // autoPlay
            loop
            // muted
            className="rounded-lg mb-2 "
          >
            <source src={selectedFeasibility.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: selectedFeasibility.content }}
          className="prose max-w-none 900:w-[55%] text-justify lg:leading-8 mb-5 900:mb-0 text-pry-color"
        >
          {}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const feasibilityID = context.params.feasibilityID;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/homepage`
    );
    const data = await response.json();
    const feasibilityArray = data.feasibilities;

    function feasibilityFinder() {
      return feasibilityArray.find(
        (feasibility) => feasibility.id === feasibilityID
      );
    }
    const selectedFeasibility = feasibilityFinder(feasibilityID);

    if (!selectedFeasibility) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        feasibilityID,
        feasibilityArray,
        selectedFeasibility,
      },
      revalidate: 300,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/homepage`
  );
  const data = await response.json();

  const feasibilityArray = data.feasibilities;

  const feasibilityPaths = feasibilityArray.map(
    (feasibility) => feasibility.id
  );

  return {
    paths: feasibilityPaths.map((feasibilityID) => ({
      params: { feasibilityID: feasibilityID },
    })),
    fallback: true,
  };
}

export default FeasibilityID;

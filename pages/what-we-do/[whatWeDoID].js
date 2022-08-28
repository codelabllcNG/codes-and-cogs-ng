import React from "react";
import Image from "next/image";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import Head from "next/head";

function WhatWeDoID(props) {
  const router = useRouter();
  const { selectedWhatWeDo } = props;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className="px-5 md:px-10 ">

<Head>
        <title>{selectedWhatWeDo.name}</title>
        <meta name="description" content={selectedWhatWeDo.name} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_devUrl}/what-we-do/${selectedWhatWeDo.id}`}
        />
      </Head>


      <div className="flex  justify-center md:text-center md:mb-2">
        <h2 className="font-bold text-xs 400:text-xl  md:text-5xl">
          {selectedWhatWeDo.name}
        </h2>
      </div>
      <div className="flex justify-center mb-8">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className="  justify-between md: ">
        <div className="w-[40%]  md:mr-8 float-left h-full hidden md:flex">
          <Image className='rounded-lg' src={selectedWhatWeDo.imageUrl} width={500} height={400} />{" "}
        </div>
        <div className="w-[100%] mb-5 flex justify-center md:hidden">
          <Image src={selectedWhatWeDo.imageUrl} width={400} height={300} />{" "}
        </div>
        <div className=' w-full   '>
          <p
            className="prose-h1:text-3xl prose-h1:font-bold max-w-none text-justify md:text-lg md:leading-10 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: selectedWhatWeDo.content }}
          >
            {} 
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const whatWeDoID = context.params.whatWeDoID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/whatwedo`
  );
  const data = await response.json();
  const whatWeDoArray = [...data.enterprize_services, ...data.solution_as_services]

  function whatWiDoFinder() {
    return whatWeDoArray.find((whatWeDo) => whatWeDo.id === whatWeDoID);
  }
  const selectedWhatWeDo = whatWiDoFinder(whatWeDoID);

  if (!selectedWhatWeDo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      whatWeDoID,
      whatWeDoArray,
      selectedWhatWeDo,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/server/api/codesandcogs/v1/whatwedo`
  );
  const data = await response.json();

  const whatWeDoArray = [...data.enterprize_services, ...data.solution_as_services]

  const whatWeDoPaths = whatWeDoArray.map((whatWeDo) => whatWeDo.id);

  return {
    paths: whatWeDoPaths.map((whatWeDoID) => ({
      params: { whatWeDoID: whatWeDoID },
    })),
    fallback: false,
  };
}

export default WhatWeDoID;

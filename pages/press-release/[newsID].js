import React from "react";
import Image from "next/image";
import { selectedNews, TOP_NEWS } from "../../a-store/content-store/TOP_NEWS";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import Head from "next/head";

function NewsID(props) {
  const router = useRouter();
  const { selectedNews } = props;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className="px-5 md:px-10 lg:px-16">

<Head>
        <title>{selectedNews.title}</title>
        <meta name="description" content={selectedNews.title} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/press-release/${selectedNews.id}`}
        />
      </Head>


      
      <div className="flex  justify-center md:text-center md:mb-2">
        <h2 className="font-bold header">
          {selectedNews.title}
        </h2>
      </div>
      <div className="flex justify-center mb-8">
        <div className=" w-[75px] md:w-[150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      
      <div className='flex' >
      <div className="  justify-between md: ">
        <div className="w-[40%]  lg:mr-8 float-left h-full hidden lg:flex">
          <Image alt="Image alt text" className='rounded-lg' src={selectedNews.imageUrl} width={500} height={700} />{" "}
        </div>
        <div className="w-[100%] mb-5 flex justify-center lg:hidden">
          <Image alt="Image alt text" src={selectedNews.imageUrl} width={500} height={300} />{" "}
        </div>
        <div className=' w-full   '>
          <div
            className="prose-h1:text-3xl prose-h1:font-bold max-w-none text-justify md:text-lg md:leading-10 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: selectedNews.content }}
          >
            {} 
          </div>
        </div>
      </div>
   </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const newsID = context.params.newsID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/getpressrelease`
  );
  const data = await response.json();
  const newsArray = data.posts;

  function newsFinder() {
    return newsArray.find((news) => news.id === newsID);
  }
  const selectedNews = newsFinder(newsID);

  if (!selectedNews) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      newsID,
      newsArray,
      selectedNews,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/getpressrelease` 
  );
  const data = await response.json();

  const newsArray = data.posts;

  const newsPaths = newsArray.map((news) => news.id);

  return {
    paths: newsPaths.map((newsID) => ({
      params: { newsID: newsID },
    })),
    fallback: false,
  };
}

export default NewsID;

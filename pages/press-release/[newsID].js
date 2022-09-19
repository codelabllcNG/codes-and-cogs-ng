import React from "react";
import Image from "next/image";
import { selectedNews, TOP_NEWS } from "../../a-store/content-store/TOP_NEWS";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import Head from "next/head";
import HeaderBanner from "../../components/HeaderBanner";

function NewsID(props) {
  const router = useRouter();
  const { selectedNews, newsID } = props;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className="px-5 md:px-10 lg:px-16">

<Head>
        <title>{selectedNews.title}</title>
        <meta name="description" content={selectedNews.title} />

        <meta
          property="og:url"
          content={`https://www.codesandcogs.com/press-release/${newsID}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={selectedNews.title} />
        <meta
          property="og:description"
          content={selectedNews.title}
        />
        <meta property="og:image" content={selectedNews.imageUrl} />

        
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/press-release/${newsID}`}
        />
      </Head>


      
      {/* <div className="flex  justify-center md:text-center md:mb-2">
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
      </div> */}


      <HeaderBanner title={"Press Release"}/>

      
      <div className="flex items-center justify-center  py-3 px-5 mb-8 -mx-5 md:-mx-10 lg:-mx-16 bg-gray-50 ">
        <div>
          <div className="text-pry-color 400:text-xl text-lg font-bold md:text-2xl text-center">
            <div dangerouslySetInnerHTML={{__html: selectedNews.title}}>
              {}
            </div>
          </div>

          {/* <div className="text-xs text-gray-400 font-semibold">
            <p>{`${ordinal(day)} ${month}., ${year}`}</p>
          </div> */}
        </div>

        <div className="hidden md:flex justify-center px-5 md:px-10">
          <Image alt="Image alt text"
            className="rounded-lg"
            src={selectedNews.imageUrl}
            width={400}
            height={250}
          />
        </div>
      </div>

      <div className="flex md:hidden justify-center px-5 md:px-10 mb-8">
        <Image alt="Image alt text"
          className="rounded-lg"
          src={selectedNews.imageUrl}
          width={400}
          height={250}
        />
      </div>

      <div className="">
        {/* {theSelectedBlogPost.body.map((content) => (
          <div key={selectedNews.id} className="mb-8">
            <div className="text-pry-color font-bold md:text-lg  ">
              <p>{content.heading}</p>
            </div>

            <div className="leading-7 text-justify">
              <p>{content.paragraph}</p>
            </div>
          </div>
        ))} */}

        <div dangerouslySetInnerHTML={{__html: selectedNews.content}}
          className="prose prose-h1:text-3xl prose-h1:font-bold max-w-none text-justify md:text-lg md:leading-10 leading-relaxed"
         
      
        >
          {}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const newsID = context.params.newsID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/getpressrelease`
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
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/getpressrelease` 
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

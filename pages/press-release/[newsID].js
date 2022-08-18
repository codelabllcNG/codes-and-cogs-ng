import React from "react";
import Image from "next/image";
import { selectedNews, TOP_NEWS } from "../../a-store/content-store/TOP_NEWS";

function NewsID(props) {
  const { theSelectedNews } = props;

  return (
    <div className="px-5 md:px-10">
      <div className="flex  md:justify-center md:text-center md:mb-2">
        <h2 className="font-bold text-xs 450:text-sm  md:text-3xl">
          {theSelectedNews.title}
        </h2>
      </div>
      <div className="flex md:justify-center mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const newsID = context.params.newsID;
  const theSelectedNews = selectedNews(newsID);

  return {
    props: {
      newsID: newsID,
      theSelectedNews: theSelectedNews,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const newsPaths = TOP_NEWS.map((news) => news.id);

  return {
    paths: newsPaths.map((newsID) => ({
      params: { newsID: newsID },
    })),
    fallback: false,
  };
}

export default NewsID;

import React, { useState } from "react";
import Image from "next/image";
import { TOP_NEWS } from "../../a-store/content-store/TOP_NEWS";
import { RECENT_NEWS } from "../../a-store/content-store/RECENT_NEWS";
import { useRouter } from "next/router";
import Head from "next/head";

function PressRelease(props) {
  const { recentNews, topNews } = props;

  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState("top-news");

  const relativeTimePeriods = [
    [31536000, "year"],
    [2419200, "month"],
    [604800, "week"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  function relativeTime(date, isUtc = true) {
    if (!(date instanceof Date)) date = new Date(date * 1000);
    const seconds = (new Date() - date) / 1000;
    for (let [secondsPer, name] of relativeTimePeriods) {
      if (seconds >= secondsPer) {
        const amount = Math.floor(seconds / secondsPer);
        return `${amount} ${name}${amount > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  }

  return (
    <div className="">

<Head>
        <title>{`Codes and Cogs - Press Release`}</title>
        <meta name="description" content={`Top and recent press-release/news from Codes and Cogs`} />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      
      <div className="px-5 md:px-10">
        <div className="flex  justify-center md:mb-2">
          <h2 className="font-bold text-xs 400:text-xl  md:text-5xl">
            Press Release
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN  */}
      <div className="md:hidden">
        <div className="flex mx-2">
          <div
            onClick={() => {
              setSelectedTab("top-news");
            }}
            className={`${
              selectedTab === "top-news" ? "bg-pry-color text-white" : ""
            } w-1/2 rounded-l-md text-center shadow-sm py-2 text-pry-color cursor-pointer select-none hover:shadow-md`}
          >
            TOP NEWS
          </div>
          <div
            onClick={() => {
              setSelectedTab("recent-news");
            }}
            className={`${
              selectedTab === "recent-news" ? "bg-pry-color text-white" : ""
            } w-1/2 rounded-r-md text-center shadow-sm py-2 text-pry-color cursor-pointer select-none hover:shadow-md`}
          >
            RECENT NEWS
          </div>
        </div>

        {recentNews
          .filter((p) => p.featured)
          .map((featuredNews) => (
            //  (),
            <div key={featuredNews.id} onClick={() => {
              router.push(`/press-release/${featuredNews.id}`);
            }}  className="px-5 bg-mid-color cursor-pointer">
              <div className="flex justify-center mt-5">
                <Image src={featuredNews.imageUrl} width="400" height="250" />
              </div>
              <div className="bg-mid-color py-5 text-center">
                <div className="px-3">
                  <p className="text-lg font-bold">{featuredNews.title}</p>
                </div>

                <div className="mt-3 px-3">
                  <p className="text-xs text-pry-color">
                    {relativeTime(new Date(`${featuredNews.date}`))}
                  </p>
                </div>
              </div>
            </div>
          ))
          .filter((n, i) => i < 1)}

        {selectedTab === "top-news" && (
          <div className="px-5 mt-7 h-[500px] overflow-y-auto scrollbar-hide">
            <div className="flex items-center justify-center ">
              <div className="h-5 w-5 bg-pry-color mr-3"></div>{" "}
              <p className="mr-2 w-[25%] 400:w-[15%]  text-xs sm:text-sm ">
                Top News
              </p>{" "}
              <div></div>
              <p className="h-[0.1rem] bg-sec-color w-[70%] 500:w-full"></p>
            </div>
            {topNews.length > 0 ? (
              topNews
                .map((news, i) => (
                  <div
                    onClick={() => {
                      router.push(`/press-release/${news.id}`);
                    }}
                    key={i}
                    className="cursor-pointer hover:text-pry-color"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{news.title}</p>{" "}
                      <div>
                        <Image src={news.imageUrl} width="60" height="60" />{" "}
                      </div>
                    </div>
                    <div className="h-[0.1rem] bg-sec-color my-2"></div>
                  </div>
                ))
                .filter((n, i) => i < 10)
            ) : (
              <div className="flex justify-center pt-10">
                <p>No Top News</p>
              </div>
            )}
          </div>
        )}

        {selectedTab === "recent-news" && (
          <div className="px-5 mt-7 h-[500px] overflow-y-auto scrollbar-hide">
            <div className="flex items-center justify-center ">
              <div className="h-5 w-5 bg-pry-color mr-3"></div>{" "}
              <p className="mr-2 w-[35%] 400:w-[25%]  text-xs sm:text-sm ">
                Recent News
              </p>{" "}
              <div></div>
              <p className="h-[0.1rem] bg-sec-color w-[70%] 500:w-full"></p>
            </div>
            {recentNews.length > 0 ? (
              recentNews
                .map((news, i) => (
                  <div
                    onClick={() => {
                      router.push(`/press-release/${news.id}`);
                    }}
                    key={i}
                    className="cursor-pointer hover:text-pry-color "
                  >
                    <div className="flex items-center justify-between">
                      <div className="">
                        <p className="font-semibold">{news.title}</p>
                        <p className="mt-2 text-xs  text-pry-color">
                          {relativeTime(new Date(`${news.date}`))}
                        </p>
                      </div>
                      <div>
                        <Image src={news.imageUrl} width="60" height="60" />{" "}
                      </div>
                    </div>
                    <div className="h-[0.1rem] bg-sec-color my-2"></div>
                  </div>
                ))
                .filter((n, i) => i < 10)
            ) : (
              <div className="flex justify-center pt-10">
                <p>No Recent News</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* LARGE SCREEN  */}
      <div className="md:flex justify-center hidden px-3">
        <div className="px-2 w-[30%] text-sm h-[500px] overflow-y-auto scrollbar-hide">
          <div className="flex items-center justify-center mb-2">
            <div className="h-5 w-5 bg-pry-color mr-1"></div>{" "}
            <p className=" w-[35%]  text-xs font-semibold ">Top News</p>{" "}
            <div></div>
            <p className="h-[0.1rem] bg-sec-color w-[70%] "></p>
          </div>
          {topNews.length > 0 ? (
            topNews
              .map((news, i) => (
                <div
                  onClick={() => {
                    router.push(`/press-release/${news.id}`);
                  }}
                  key={i}
                  className="cursor-pointer hover:text-pry-color"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{news.title}</p>{" "}
                    <div>
                      <Image src={news.imageUrl} width="60" height="60" />{" "}
                    </div>
                  </div>
                  <div className="h-[0.1rem] bg-sec-color my-2"></div>
                </div>
              ))
              .filter((n, i) => i < 10)
          ) : (
            <div className="flex justify-center pt-10">
              <p>No Top News</p>
            </div>
          )}
        </div>

        {recentNews
          .filter((p) => p.featured)
          .map((featuredNews) => (
            <div key={featuredNews.id} className=" hover:scale-95 duration-300 h-full">
              <div
               
                onClick={() => {
                  router.push(`/press-release/${featuredNews.id}`);
                }}
                className="flex justify-center mt-5 w-full cursor-pointer "
              >
                <Image
                  className="w-full"
                  src={featuredNews.imageUrl}
                  width="400"
                  height="250"
                  layout="intrinsic"
                />
              </div>

              <div
                onClick={() => {
                  router.push(`/press-release/${featuredNews.id}`);
                }}
                className="bg-mid-color py-5 cursor-pointer"
              >
                <div className="px-3">
                  <p className="text-lg text-center font-bold">
                    {featuredNews.title}
                  </p>
                </div>

                <div className="mt-3 px-3">
                  <p className="text-xs text-center text-pry-color">
                    {relativeTime(new Date(`${featuredNews.date}`))}
                  </p>
                </div>
              </div>
            </div>
          ))
          .filter((n, i) => i < 1)}

        <div className="px-2 w-[30%] text-sm h-[500px] overflow-y-auto scrollbar-hide">
          <div className="flex items-center justify-center mb-2">
            <div className="h-5 w-5 bg-pry-color mr-1"></div>{" "}
            <p className=" w-[42%]   text-xs font-semibold">Recent News</p>{" "}
            <div></div>
            <div className="h-[0.1rem] bg-sec-color w-[60%] "></div>
          </div>
          {recentNews.length > 0 ? (
            recentNews
              .map((news, i) => (
                <div
                  onClick={() => {
                    router.push(`/press-release/${news.id}`);
                  }}
                  key={i}
                  className="cursor-pointer hover:text-pry-color"
                >
                  <div className="flex  items-center justify-between">
                    <div className="">
                      <p className="font-semibold">{news.title}</p>
                      <p className="mt-2 text-xs  text-pry-color">
                        {relativeTime(new Date(`${news.date}`))}
                      </p>
                    </div>
                    <div>
                      <Image src={news.imageUrl} width="60" height="60" />{" "}
                    </div>
                  </div>
                  <div className="h-[0.1rem] bg-sec-color my-2"></div>
                </div>
              ))
              .filter((n, i) => i < 10)
          ) : (
            <div className="flex justify-center pt-10">
              <p>No Recent News</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_devUrl}/getpressrelease`
  );
  const data = await response.json();

  const recentNew = data.posts;
  const recentNews = [...recentNew, ...recentNew, ...recentNew, ...recentNew];

  const topNew = data.posts.filter((n) => n.topNews);
  const topNews = [...topNew, ...topNew, ...topNew, ...topNew];

  return {
    props: {
      recentNews,
      topNews,
    },
    revalidate: 300,
  };
}

export default PressRelease;

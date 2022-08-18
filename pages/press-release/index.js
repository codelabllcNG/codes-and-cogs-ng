import React, { useState } from "react";
import Image from "next/image";
import { TOP_NEWS } from "../../a-store/content-store/TOP_NEWS";
import { RECENT_NEWS } from "../../a-store/content-store/RECENT_NEWS";
import { useRouter } from "next/router";



function PressRelease() {
const router = useRouter()


  const [selectedTab, setSelectedTab] = useState("top-news");

  return (
    <div className="">
      <div className="px-5 md:px-10">
        <div className="flex  md:justify-center md:mb-2">
          <h2 className="font-bold text-xs 450:text-sm  md:text-3xl">
            Press Release
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

        <div className="px-5 bg-mid-color">
          <div className="flex justify-center mt-5">
            <Image src="/images/news-of-the-day.png" width="400" height="250" />
          </div>

          <div className="bg-mid-color py-5 text-center">
            <div className="px-3">
              <p className="text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>

            <div className="mt-3 px-3">
              <p className="text-xs text-pry-color">time</p>
            </div>
          </div>
        </div>

        {selectedTab === "top-news" && (
          <div className="px-5 mt-7">
            <div className="flex items-center justify-center ">
              <div className="h-5 w-5 bg-pry-color mr-3"></div>{" "}
              <p className="mr-2 w-[25%] 400:w-[15%]  text-xs sm:text-sm ">
                Top News
              </p>{" "}
              <div></div>
              <p className="h-[0.1rem] bg-sec-color w-[70%] 500:w-full"></p>
            </div>
            {TOP_NEWS.map((news) => (
              <div
                onClick={() => {router.push(`/press-release/${news.id}`)}}
                key={news.id}
                className="cursor-pointer hover:text-pry-color"
              >
                <div className="flex items-center justify-between">
                  <p>{news.title}</p>{" "}
                  <div>
                    <Image src={news.imageUrl} width="60" height="60" />{" "}
                  </div>
                </div>
                <div className="h-[0.1rem] bg-sec-color my-2"></div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "recent-news" && (
          <div className="px-5 mt-7">
            <div className="flex items-center justify-center ">
              <div className="h-5 w-5 bg-pry-color mr-3"></div>{" "}
              <p className="mr-2 w-[35%] 400:w-[25%]  text-xs sm:text-sm ">
                Recent News
              </p>{" "}
              <div></div>
              <p className="h-[0.1rem] bg-sec-color w-[70%] 500:w-full"></p>
            </div>
            {RECENT_NEWS.map((news) => (
              <div
              onClick={() => {router.push(`/press-release/${news.id}`)}}
                key={news.id}
                className="cursor-pointer hover:text-pry-color"
              >
                <div className="flex items-center justify-between">
                  <div className="">
                    <p>{news.title}</p>
                    <p className="mt-2 text-xs font-semibold text-pry-color">
                      {news.elapsedTime}
                    </p>
                  </div>
                  <div>
                    <Image src={news.imageUrl} width="60" height="60" />{" "}
                  </div>
                </div>
                <div className="h-[0.1rem] bg-sec-color my-2"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LARGE SCREEN  */}
      <div className="md:flex justify-center hidden px-3">
        <div className="px-2 w-[30%] text-sm">
          <div className="flex items-center justify-center mb-2">
            <div className="h-5 w-5 bg-pry-color mr-1"></div>{" "}
            <p className=" w-[35%]  text-xs font-semibold ">Top News</p>{" "}
            <div></div>
            <p className="h-[0.1rem] bg-sec-color w-[70%] "></p>
          </div>
          {TOP_NEWS.map((news) => (
            <div onClick={() => {router.push(`/press-release/${news.id}`)}} key={news.id} className="cursor-pointer hover:text-pry-color">
              <div className="flex items-center justify-between">
                <p>{news.title}</p>{" "}
                <div>
                  <Image src={news.imageUrl} width="60" height="60" />{" "}
                </div>
              </div>
              <div className="h-[0.1rem] bg-sec-color my-2"></div>
            </div>
          ))}
        </div>

        <div className=" bg-mid-coor ">
          <div className="flex justify-center mt-5 w-full  ">
            <Image
              className="w-full"
              src="/images/news-of-the-day.png"
              width="400"
              height="250"
              layout="intrinsic"
            />
          </div>

          <div className="bg-mid-color py-5">
            <div className="px-3">
              <p className="text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>

            <div className="mt-3 px-3">
              <p className="text-xs text-pry-color">time</p>
            </div>
          </div>
        </div>

        <div className="px-2 w-[30%] text-sm">
          <div className="flex items-center justify-center mb-2">
            <div className="h-5 w-5 bg-pry-color mr-1"></div>{" "}
            <p className=" w-[42%]   text-xs font-semibold">Recent News</p>{" "}
            <div></div>
            <div className="h-[0.1rem] bg-sec-color w-[60%] "></div>
          </div>
          {RECENT_NEWS.map((news) => (
            <div onClick={() => {router.push(`/press-release/${news.id}`)}} key={news.id} className="cursor-pointer hover:text-pry-color">
              <div className="flex items-center justify-between">
                <div className="">
                  <p>{news.title}</p>
                  <p className="mt-2 text-xs font-semibold text-pry-color">
                    {news.elapsedTime}
                  </p>
                </div>
                <div>
                  <Image src={news.imageUrl} width="60" height="60" />{" "}
                </div>
              </div>
              <div className="h-[0.1rem] bg-sec-color my-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PressRelease;

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";


function Index(props) {
  const range = 6;
  const [pageNum, setPageNum] = useState(1);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(range);

  const router = useRouter();
  const { blogPostArray } = props;
  // console.log(blogPostArray);

  let date;
  let day;
  let month;
  let year;

  function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  const blogPostLength = blogPostArray.length;

  return (
    <div className="px-5 md:px-14">
   <Head>
        <title>Codes and Cogs - Blog</title>
        <meta
          name="description"
          content="Codes and Cogs' official blog for both freelancers and entrepreneurs, where strategies, tips, and ideas are disseminated."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold header">
          Blog
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

      <div className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
        {blogPostArray
          .map(
            (article) => (
              (date = new Date(article.date)),
              (day = date.toLocaleDateString("en-US", { day: "numeric" })),
              (month = date.toLocaleDateString("en-US", { month: "short" })),
              (year = date.toLocaleDateString("en-US", { year: "numeric" })),
              (
                <div
                  onClick={() => {
                    router.push(`/blog/${article.id}`);
                  }}
                  key={article.title}
                  className="bg-gray-100 text-sm pb-2 cursor-pointer hover:scale-95 duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    <Image
                      className="rounded-t-lg "
                      width={400}
                      height={250}
                      // src={blogPost.imageUrl}
                      src={article.imageUrl}
                    />
                  </div>

                  <div className="px-2 400:text-lg font-semibold text-pry-color mb-1 text-center">
                    <div dangerouslySetInnerHTML={{ __html: article.title }} >
                      { }
                    </div>
                  </div>

                  <div className="px-2 text-xs mb-4 text-gray-500 text-center">
                    <p>{`${ordinal(day)} ${month}., ${year}`}</p>
                  </div>

                  <div className="px-2 text-justify mb-2 ">
                    <div dangerouslySetInnerHTML={{ __html: article.excerpt }}>{}
                    </div>
                  </div>

                  <div className="px-2 text-pry-color text-xs font-semibold">
                    <button
                      onClick={() => {
                        router.push(`/blog/${article.id}`);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              )
            )
          )
          .filter((a, i) => i >= prev && i < next)}
      </div>

      {/* PAGINATION BUTTONS  */}

      <div className="flex justify-center space-x-5 py-4 mt-3">
        {/* Go to first  */}

        <button
          disabled={prev <= 0}
          className={`text-4xl ${
            prev <= 0 ? "text-gray-400" : "text-pry-color"
          } font-bold`}
          onClick={() => {
            setPageNum(1);
            setPrev(0);
            setNext(range);
          }}
        >
          <p className="-mt-2"> &lsaquo;&lsaquo;</p>
        </button>

        {/* Go to previous */}
        <div className="flex justify-center items-center">
          {" "}
          <button
            disabled={prev <= 0}
            className={` ${
              prev <= 0 ? " bg-gray-400 text-white" : "text-white bg-pry-color "
            } py-1 px-3 rounded-md `}
            onClick={() => {
              setPageNum(pageNum - 1);
              if (next === blogPostLength) {
                setNext(prev);
                setPrev(prev - range);
              } else {
                setPrev(prev - range);
                setNext(next - range);
              }

              // setNext(next <= blogPostLength ? next + range : "");

              // setPrev(next <= blogPostLength ? prev + range : prev);
            }}
          >
            {/* &lsaquo; */} Prev
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p>{pageNum}</p>
        </div>
        {/* Go to next   */}
        <div className="flex items-center justify-center">
          <button
            disabled={next >= blogPostLength}
            className={` ${
              next >= blogPostLength
                ? "bg-gray-400  text-white"
                : "text-white   bg-pry-color"
            } py-1 px-3 rounded-md`}
            onClick={() => {
              setNext(next <= blogPostLength ? next + range : "");

              setPrev(next <= blogPostLength ? prev + range : prev);

              setPageNum(pageNum + 1);

              // setNext(next <= blogPostLength ? blogPostLength : "");
            }}
          >
            Next
          </button>
        </div>
        {/* Go to last   */}
        <button
          disabled={next >= blogPostLength}
          className={`text-4xl ${
            next >= blogPostLength ? "text-gray-400" : "text-pry-color"
          } font-bold`}
          onClick={() => {
            setPrev(
              next <= blogPostLength
                ? blogPostLength % range === 0
                  ? blogPostLength - range
                  : blogPostLength - (blogPostLength % range)
                : prev
            );
            setNext(next <= blogPostLength ? blogPostLength : "");

            setPageNum(
              blogPostLength % range === 0
                ? blogPostLength / range
                : Math.floor(blogPostLength / range) + 1
            );
          }}
        >
          <p className="-mt-2"> &rsaquo;&rsaquo;</p>
        </button>
      </div>
    </div>
  );
}

export default Index;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/getblog`
  );
  const data = await response.json();

  const blogPostArray = data.posts;

  return {
    props: {
      blogPostArray,
    },
    revalidate: 300,
  };
}

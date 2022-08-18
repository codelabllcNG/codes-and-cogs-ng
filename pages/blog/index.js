import React, { useState } from "react";
import {arrayOfArticleObject} from '../../util-functions/blog-utils'
import { BLOG_POSTS } from "../../a-store/content-store/BLOG_POSTS";
import Image from "next/image";
import { useRouter } from "next/router";



function Index(props) {
  const range = 3;
  const [pageNum, setPageNum] = useState(1);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(range);

  const router = useRouter();
  const { articlesArray, blogPosts } = props;
  // console.log(articlesArray);

  let date;
  let day;
  let month;
  let year;

  const blogPostLength = articlesArray.length;

  return (
    <div className="px-5 md:px-14">
      <div className="mb-10 md:leading-10 flex justify-center items-center">
        <p className="font-semibold text-2xl lg:text-3xl md:font-bold text-pry-color">
          Blog
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
        {articlesArray
          .map(
            (article) => (
              (date = new Date(article.date)),
              (day = date.toLocaleDateString("en-US", { day: "numeric" })),
              (month = date.toLocaleDateString("en-US", { month: "short" })),
              (year = date.toLocaleDateString("en-US", { year: "numeric" })),
              (
                <div key={article.slug} className="bg-gray-100 text-sm pb-2">
                  <div className="mb-4">
                    <Image
                      className="rounded-t-lg "
                      width={400}
                      height={250}
                      // src={blogPost.imageUrl}
                      src={`/images/blog/headers/${article.image}`}
                    />
                  </div>

                  <div className="px-2 font-semibold text-pry-color mb-1">
                    <p>{article.title}</p>
                  </div>

                  <div className="px-2 text-xs mb-4 text-gray-500">
                    <p>{`${day}${
                      day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th"
                    } ${month}., ${year}`}</p>
                  </div>

                  <div className="px-2 text-justify mb-2 ">
                    <p>{article.excerpt}</p>
                  </div>

                  <div className="px-2 text-pry-color text-xs font-semibold">
                    <button
                      onClick={() => {
                        router.push(`/blog/${article.slug}`);
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

export function getStaticProps() {
  const blogPosts = BLOG_POSTS;
  const articlesArray = arrayOfArticleObject()

  return {
    props: {
      articlesArray,
      blogPosts: blogPosts,
    },
    revalidate: 100,
  };
}

import React from "react";
import ReactMarkdown  from "react-markdown";

import {
  selectedBlogPost,
  BLOG_POSTS,
} from "../../a-store/content-store/BLOG_POSTS";
import {
  arrayOfArticleObject,
  arrayOfArticles,
  readArticleContent,
} from "../../util-functions/blog-utils";
import Image from "next/image";

function BlogPostID(props) {
  const { theSelectedBlogPost, slug, articleDetails } = props;

  const date = new Date(articleDetails.date);
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });

 const customComponents = {
    img(img) {
      return (
        <Image
          src={`/images/blog/in-article/${img.src}`}
          alt={img.alt}
          width={600}
          height={300}
        />
      );
    },
  }

  return (
    <div className="px-5 md:px-10">




      <div className="mb-10 md:leading-10 flex justify-center items-center">
        <p className="font-semibold text-2xl lg:text-3xl md:font-bold text-pry-color">
          Blog
        </p>
      </div>

      <div className="flex items-center justify-center  py-3 px-5 mb-8 -mx-5 md:-mx-10 bg-semi-sec-color">
        <div>
          <div className="text-pry-color text-lg font-bold md:text-2xl">
            <p>{articleDetails.title}</p>
          </div>

          <div className="text-xs text-gray-400 font-semibold">
            <p>{`${day}${
              day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th"
            } ${month}., ${year}`}</p>
          </div>
        </div>

        <div className="hidden md:flex justify-center px-5 md:px-10">
          <Image
            className="rounded-lg"
            src={`/images/blog/headers/${articleDetails.image}`}
            width={400}
            height={250}
          />
        </div>
      </div>

      <div className="flex md:hidden justify-center px-5 md:px-10 mb-8">
        <Image
          className="rounded-lg"
          src={`/images/blog/headers/${articleDetails.image}`}
          width={400}
          height={250}
        />
      </div>

      <div className="">
        {/* {theSelectedBlogPost.body.map((content) => (
          <div key={articleDetails.id} className="mb-8">
            <div className="text-pry-color font-bold md:text-lg  ">
              <p>{content.heading}</p>
            </div>

            <div className="leading-7 text-justify">
              <p>{content.paragraph}</p>
            </div>
          </div>
        ))} */}

        <ReactMarkdown  className="prose prose-h1:text-3xl prose-h1:font-bold max-w-none text-justify md:text-lg md:leading-10 leading-relaxed" skipHtml={true} components={customComponents}>
          {articleDetails.content}
        </ReactMarkdown>

      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const articleDetails = readArticleContent(slug);
  // const theSelectedBlogPost = selectedBlogPost(slug);

  return {
    props: {
      slug,
      articleDetails,
      // theSelectedBlogPost,
    },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const blogPostPaths = BLOG_POSTS.map((blogPost) => blogPost.slug);

  const articleFileNames = arrayOfArticles();

  const slugs = articleFileNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
}

export default BlogPostID;

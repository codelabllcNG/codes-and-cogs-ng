import React from "react";

import Image from "next/image";
import Loading from "../../components/Loading"

import { useRouter } from "next/router";
import Head from "next/head";


function BlogPostID(props) {
const router = useRouter();

if (router.isFallback) {
  return <Loading/>  
}
  
  const {   slug,
    blogPostArray,
    selectedBlogPost, } = props;

  const date = new Date(selectedBlogPost.date);
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });

  function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n%100;
    return n + (s[(v-20)%10] || s[v] || s[0]);
  }
  

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
  };



  return (
    <div className="px-5 md:px-10">
   <Head>
        <title>{selectedBlogPost.title}</title>
        <meta
          name="description"
          content={selectedBlogPost.title}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://www.codesandcogs.com/blog/${slug}`} />
      </Head>


      <div className="flex  justify-center md:mb-2">
          <h2 className="font-bold header font-larken ">
           Blog
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <div className=" w-[75px] md:w-[150px]">
            <Image alt="Image alt text"
              src="/images/logos-and-icons/red-underline.png"
              width={150}
              height={20}
            />
          </div>
        </div>

      <div className="flex items-center justify-center  py-3 px-5 mb-8 -mx-5 md:-mx-10 bg-semi-sec-color">
        <div>
          <div className="text-pry-color 400:text-xl text-lg font-bold md:text-2xl">
            <p>{selectedBlogPost.title}</p>
          </div>

          <div className="text-xs text-gray-400 font-semibold">
            <p>{`${ordinal(day)} ${month}., ${year}`}</p>
          </div>
        </div>

        <div className="hidden md:flex justify-center px-5 md:px-10">
          <Image alt="Image alt text"
            className="rounded-lg"
            src={selectedBlogPost.imageUrl}
            width={400}
            height={250}
          />
        </div>
      </div>

      <div className="flex md:hidden justify-center px-5 md:px-10 mb-8">
        <Image alt="Image alt text"
          className="rounded-lg"
          src={selectedBlogPost.imageUrl}
          width={400}
          height={250}
        />
      </div>

      <div className="">
        {/* {theSelectedBlogPost.body.map((content) => (
          <div key={selectedBlogPost.id} className="mb-8">
            <div className="text-pry-color font-bold md:text-lg  ">
              <p>{content.heading}</p>
            </div>

            <div className="leading-7 text-justify">
              <p>{content.paragraph}</p>
            </div>
          </div>
        ))} */}

        <div dangerouslySetInnerHTML={{__html: selectedBlogPost.content}}
          className="prose prose-h1:text-3xl prose-h1:font-bold max-w-none text-justify md:text-lg md:leading-10 leading-relaxed"
         
      
        >
          {}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/getblog`
  );
  const data = await response.json();
  const blogPostArray = data.posts;

  function blogPostFinder() {
    return blogPostArray.find((blogPost) => blogPost.id === slug);
  }
  const selectedBlogPost = blogPostFinder(slug);

  if (!selectedBlogPost) {
    return {
      notFound: true
  }
  }

  return {
    props: {
      slug,
      blogPostArray,
      selectedBlogPost,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/getblog`
  );
  const data = await response.json();

  const blogPostArray = data.posts;

  const blogPostPaths = blogPostArray.map((blogPost) => blogPost.id);

  return {
    paths: blogPostPaths.map((slug) => ({
      params: { slug: slug },
    })),
    fallback: true,
  };
}

export default BlogPostID;

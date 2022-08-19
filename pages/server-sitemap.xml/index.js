// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from "next-sitemap";
import { BLOG_POSTS } from "../../a-store/content-store/BLOG_POSTS";

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  // const data = await response.json()

  const fields = BLOG_POSTS.map((blog) => ({
    loc: `https://codesandcogs.com/blog/${blog.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 1,
  }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}

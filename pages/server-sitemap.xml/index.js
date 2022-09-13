// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from "next-sitemap";
import { BLOG_POSTS } from "../../a-store/content-store/BLOG_POSTS";

export const getServerSideProps = async (ctx) => {
  const blogRes = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/getblog`
  );
  const blogData = await blogRes.json();

  const blogPostArray = blogData.posts;

  const blogSM = blogPostArray.map((blog) => ({
    loc: `https://codesandcogs.com/blog/${blog.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 1, 
  }));

  const homepageRes = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/homepage`
  );
  const homepageData = await homepageRes.json();

  const feasibilityArray = homepageData.feasibilities;
  const skillsArray = homepageData.skills;
  const modelsArray = homepageData.models;

  const feasibilitySM = feasibilityArray.map((feasibility) => ({
    loc: `https://codesandcogs.com/feasibility/${feasibility.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7, 
  }));

  const skillsSM = skillsArray.map((skill) => ({
    loc: `https://codesandcogs.com/skills/${skill.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7, 
  }));

  const modelsSM = modelsArray.map((model) => ({
    loc: `https://codesandcogs.com/models/${model.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7, 
  }));

  const pressReleaseRes = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/getpressrelease`
  );
  const pressReleaseData = await pressReleaseRes.json();

  const pressReleaseArray = pressReleaseData.posts;

  const pressReleaseSM = pressReleaseArray.map((pressRelease) => ({
    loc: `https://codesandcogs.com/press-release/${pressRelease.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 1, 
  }));


  const locationRes = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/remotelocations`
  );
  const locationData = await locationRes.json();

  const locationArray = locationData.posts;

  const locationSM = locationArray.map((location) => ({
    loc: `https://codesandcogs.com/remote-locations/${location.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 1, 
  }));

const fields = [...blogSM, ...feasibilitySM, ...skillsSM, ...modelsSM, ...pressReleaseSM, ...locationSM]

  return await getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
 
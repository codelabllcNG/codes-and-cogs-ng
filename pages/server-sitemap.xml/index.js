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
    loc: `https://www.codesandcogs.com/blog/${blog.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 1,
  }));

  const talentsRes = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/aboutpage`
  );
  const talentsData = await talentsRes.json();

  const talentsArray = [
    ...talentsData.designers,
    ...talentsData.developers,
    ...talentsData.engineers,
  ];

  const homepageRes = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/homepage`
  );
  const homepageData = await homepageRes.json();

  const feasibilityArray = homepageData.feasibilities;
  const skillsArray = homepageData.skills;
  const modelsArray = homepageData.models;

  const talentsSM = talentsArray.map((talents) => ({
    loc: `https://www.codesandcogs.com/talents/${talents.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  const feasibilitySM = feasibilityArray.map((feasibility) => ({
    loc: `https://www.codesandcogs.com/feasibility/${feasibility.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  const skillsSM = skillsArray.map((skill) => ({
    loc: `https://www.codesandcogs.com/skills/${skill.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  const modelsSM = modelsArray.map((model) => ({
    loc: `https://www.codesandcogs.com/models/${model.id}`,
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
    loc: `https://www.codesandcogs.com/press-release/${pressRelease.id}`,
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
    loc: `https://www.codesandcogs.com/remote-locations/${location.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  const fields = [
    ...blogSM,
    ...feasibilitySM,
    ...skillsSM,
    ...modelsSM,
    ...pressReleaseSM,
    ...locationSM,
    ...talentsSM,
  ];

  return await getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}

import fs from "fs";
import path from "path";


import matter from "gray-matter";

const articleFolder = path.join(process.cwd(), "blog-posts"); // Irrespective of where this file is saved,this navigates to the given directory.

//Goal here is to take the article file given as argument (the markdown file), read through it with the fs, and use the third-party package (matter) to extract the text in it, and return the data (the header part) and the content. I only added the noExtensionArticleFileName so I can use it as slug
export function arrayOfArticles() {
  return fs.readdirSync(articleFolder);
}

export function readArticleContent(articleFileName) {
  const noExtensionArticleFileName = articleFileName.replace(/\.md$/, "");

  const oneArticleFile = path.join(
    articleFolder,
    `${noExtensionArticleFileName}.md`
  );
  const readThroughArticle = fs.readFileSync(oneArticleFile, "utf-8");
  const { data, content } = matter(readThroughArticle);

  const articleData = {
    slug: noExtensionArticleFileName,
    ...data,
    content,
  };

  return articleData;
}

export function arrayOfArticleObject() {
  const arrayOfArticles = fs.readdirSync(articleFolder);

  const allArticleObjects = arrayOfArticles.map((eachArticle) => {
    return readArticleContent(eachArticle);
  });

  const sortedArticleObjects = allArticleObjects.sort((articleA, articleB) =>
    articleA.id > articleB.id ? -1 : 1
  );

  return sortedArticleObjects;
}

export function arrayOfFeaturedArticleObjects() {
  const allArticleObjects = arrayOfArticleObject();

  const featuredArticles = allArticleObjects.filter(
    (article) => article.isFeatured
  );

  return featuredArticles;
}

export function arrayOfTechArticleObjects() {
  const allArticleObjects = arrayOfArticleObject();

  const techArticles = allArticleObjects.filter(
    (article) => article.category === "tech"
  );

  return techArticles;
}

export function arrayOfGeneralArticleObjects() {
  const allArticleObjects = arrayOfArticleObject();

  const generalArticles = allArticleObjects.filter(
    (article) => article.category === "general"
  );

  return generalArticles;
}

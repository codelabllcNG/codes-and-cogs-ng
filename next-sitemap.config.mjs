/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.codesandcogs.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
  generateIndexSitemap: false,
  autoLastmod: true,
  exclude: ['/support/*', '/demo-test', '/coming-soon', '/privacy-policy', '/take-a-test', ],
   

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },

      {
        userAgent: '*',
        disallow: ['/support/*', '/demo-test', '/take-a-test'],
      },
    ],
    additionalSitemaps: [
      `https://www.codesandcogs.com/server-sitemap.xml`,
    //   'https://example.com/my-custom-sitemap-1.xml',
    //   'https://example.com/my-custom-sitemap-2.xml',
    //   'https://example.com/my-custom-sitemap-3.xml',
    ],
  },
}; 

// module.exports = { config };

export default config

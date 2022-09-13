/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://codesandcogs.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
  generateIndexSitemap: false,
  autoLastmod: true,
  exclude: ['/support/*', '/support', '/demo-test', '/coming-soon', '/privacy-policy', '/take-a-test', '/talents/*', ],
   

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },

      {
        userAgent: '*',
        disallow: ['/support/*', '/support', '/demo-test', '/take-a-test', '/talents/*'],
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

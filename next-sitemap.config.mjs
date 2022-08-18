/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://codes-and-cogs.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
  // generateIndexSitemap: false,
  autoLastmod: true,
  exclude: ['/support/*', '/support', '/take-a-test', '/talents/*', ],
  

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },

      {
        userAgent: '*',
        disallow: ['/support/*', '/support', '/take-a-test', '/talents/*'],
      },
    ],
    additionalSitemaps: [
      `https://www.codes-and-cogs.com/server-sitemap.xml`,
    //   'https://example.com/my-custom-sitemap-1.xml',
    //   'https://example.com/my-custom-sitemap-2.xml',
    //   'https://example.com/my-custom-sitemap-3.xml',
    ],
  },
};

// module.exports = { config };

export default config

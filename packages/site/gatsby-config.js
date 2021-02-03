const site = require('./config');

const pathPrefix = site.pathPrefix === '/' ? '' : site.pathPrefix;

module.exports = {
  pathPrefix,
  siteMetadata: {
    siteUrl: site.url,
    siteName: site.title,
    titleTemplate: `%s – ${site.title}`,
    description: site.description,
    image: site.image,
    author: site.author,
    email: site.email,
    twitter: site.twitter,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: site.googleAnalyticsId,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Abhaya Libre'],
        display: 'swap',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: site.title,
        short_name: site.shortName,
        start_url: site.pathPrefix,
        background_color: site.backgroundColor,
        theme_color: site.themeColor,
        display: 'minimal-ui',
        icon: site.favicon,
        cache_busting_mode: 'none',
      },
    },
    // Last-priority plugins
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*icon*'],
        },
      },
    },
  ],
};

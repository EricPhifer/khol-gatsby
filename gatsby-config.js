/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kinnas House of Love`,
    siteUrl: `https://kinnashouseoflove.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'wzk0i0ir',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'wzk0i0ir',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        trackPageViews: true,
        events: true,
        eventsGlobal: 'sa_event',
        // ignorePages: ["pathname"],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kinnashouseoflove.com',
        sitemap: 'https://kinnashouseoflove.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
  ],
}

module.exports = {
  siteMetadata: {
    title: `#pragma once`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@_pragmaonce`,
  },
  plugins: [
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/static`,
        name: "static",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7akyn8y0njsj`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: "Da1q77giGzC83l1x0pDI9n9PVv6yOmIbxg8FDV8Jm7Y",
        downloadLocal: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

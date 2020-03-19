module.exports = {
  siteMetadata: {
    title: `Duee Brasil`,
    description: `Branding, Live MKT, Promoções, Digital e Desenvolvimento. A Gente Faz.`,
    author: `letgodoy.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Duee Brasil`,
        short_name: `Duee Brasil`,
        start_url: `/`,
        description: "Branding, Live MKT, Promoções, Digital e Desenvolvimento. A Gente Faz.",
        background_color: `#ffffff`,
        theme_color: `#424242`,
        display: `standalone`,
        icon: `src/images/Logo_Claro-leao.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "UA-157627202-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-157627202-1", // Google Analytics / GA
          "AW-145-254-4497", // Google Ads / Adwords / AW
        ], 
          // Puts tracking script in the head instead of the body
          head: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NGHBBP8",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      }
    }
  ]
}

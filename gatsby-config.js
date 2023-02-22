module.exports = {
  siteMetadata: {
    title: `Duee Brasil`,
    description: `Branding, Live MKT, Promoções, Digital e Desenvolvimento. A Gente Faz.`,
    author: `letgodoy.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
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
    },
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
      },
    },
  ]
}

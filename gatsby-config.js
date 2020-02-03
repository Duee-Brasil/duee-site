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
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: "",
    titleTemplate: "%s",
    description: "True North Auto Loans",
    url: "https://www.truenorthautoloans.com", // No trailing slash allowed!
    siteUrl: "https://www.truenorthautoloans.com",
    image: "/true-north-auto-loans-logo.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 10,
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/get-a-loan"],
        excludePaths: [],
        height: 12,
        prependToBody: false,
        color: `#FD0000`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
  ],
}

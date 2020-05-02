/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ruijdom`,
    siteUrl: `https://ruijadomingues.netlify.app/`,
    description: `Portfolio`,
    social: [
      {
        name: "github",
        url: "https://github.com/ruijadom",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "231130702",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cairo`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `500`, `700`],
          },
        ],
      },
    }
  ]
}
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ruijadom`,
        short_name: `Ruijadom`,
        start_url: `/`,
        background_color: `#141218`,
        theme_color: `#342065`,
        display: `standalone`,
        icon: `src/assets/icons/logo.png`
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ruijadomingues.netlify.app/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#342065`,
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
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/style.js`]
      },
    },
    `gatsby-plugin-offline`
  ]
}
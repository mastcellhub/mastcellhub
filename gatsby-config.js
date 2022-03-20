/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Mastocytosis and MCAS hub`,
    siteUrl: `https://www.mastcellhub.com`
  },
  plugins: ["gatsby-plugin-vanilla-extract", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: `/svg/`,
      },
    },
  },
]
};

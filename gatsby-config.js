module.exports = {
  siteMetadata: {
    title: "My Portfolio Blog",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify-cms-paths",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    { 
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOnError: false,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {     
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};

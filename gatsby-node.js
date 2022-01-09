const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type == `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}


async function getPageData(graphql) {
    return await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  }


  exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              caption
                title
                date
                description
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500
                      blurredOptions: {width: 100}
                      placeholder: BLURRED
                      transformOptions: {cropFocus: CENTER}
                    )
                  }
                }
            }
            internal {
                content
            }
            html
          }
        }
      }
    }
  `)
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.fields
      actions.createPage({
        path: `/blog${slug}`,
        component: path.resolve("./src/components/BlogPage.js"),
        context: { 
            slug: slug,
            post: node,
        },
      })
    })
  }
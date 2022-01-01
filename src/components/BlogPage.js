import * as React from 'react'
import { graphql } from "gatsby"

const BlogPage = ({ data, pageContext }) => {

    const { post } = pageContext
    
    return (
        <>
            <div>
                Title: { data.markdownRemark.frontmatter.title }
                Description: { data.markdownRemark.frontmatter.description }
                Content: { data.markdownRemark.internal.content } 
            </div>
            <div>
                Title: { post.frontmatter.title }
                Description: { post.frontmatter.description }
                Content: { post.internal.content }
            </div>
        </>
        
    )
}

export default BlogPage

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
        image
      }
      internal {
        content
      }
    }
  }
`
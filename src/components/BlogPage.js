import * as React from 'react'
import { graphql } from "gatsby"

import { Container, Row, Col } from 'react-bootstrap'

import Layout from './Layout'

const BlogPage = ({ data, pageContext }) => {

    const { post } = pageContext

    const  Title  = post.frontmatter.title
    const  Description  = post.frontmatter.description
    const  html  = post.html

    
    return (
        <>
          <Layout>

            <Container fluid>
              <Row variant="secondary" className=" vh-100 justify-content-center align-items-center">
                <Col>
                  <h1>{ Title }</h1>

                  <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
                </Col>
              </Row>
            </Container>

          </Layout>
            
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
        date(formatString: "MMMM DD, YYYY")
      }
      internal {
        content
      }
      html
    }
  }
`
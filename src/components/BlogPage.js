import * as React from 'react'
import { graphql } from "gatsby"

import { Container, Row, Col } from 'react-bootstrap'

import Layout from './Layout'

const BlogPage = ({ data, pageContext }) => {

    const { post } = pageContext

    const  Title  = post.frontmatter.title
    const  Description  = post.frontmatter.description
    const  html  = post.html

    const styleObj = {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '25%',
      paddingRight: '25%',
    };

    
    return (
        <>
          <Layout>

            <Container fluid>
              <Row variant="secondary" className="justify-content-center align-items-center">
                <Col>
                  <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} style={styleObj} />
                </Col>
              </Row>
            </Container>

          </Layout>
            
        </>
        
    )
}

export default BlogPage


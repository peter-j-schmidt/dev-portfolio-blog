import * as React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from './Layout'

const BlogPage = ({ pageContext }) => {

    const { post } = pageContext

    const  Title  = post.frontmatter.title
    const  Description  = post.frontmatter.description
    const Image = getImage(post.frontmatter.images)
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
                <Col className="justify-content-center">
                  <h1 className=" d-flex justify-content-center align-items-center py-3 my-3">{Title}</h1>

                  <GatsbyImage image={Image} alt="Image, taken from above, of a person sitting in front of three computer monitors." />

                  <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} style={styleObj} />
                </Col>
              </Row>
            </Container>

          </Layout>
            
        </>
        
    )
}

export default BlogPage


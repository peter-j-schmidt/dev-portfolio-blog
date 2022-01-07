import * as React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from './Layout'

const BlogPage = ({ pageContext }) => {

    const { post } = pageContext

    const  Title  = post.frontmatter.title
    const  Description  = post.frontmatter.description
    const Image = getImage(post.frontmatter.image)
    const  html  = post.html

    const styleObj = {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '25%',
      paddingRight: '25%',
    };

    const imgStyleObj = {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '25%',
      paddingRight: '25%',
    }

    
    return (
        <>
          <Layout>

            <Container fluid>
              <Row variant="secondary" className="d-flex justify-content-center align-items-center">
                <Col>
                  <h1 className=" d-flex justify-content-center align-items-center py-5 my-5">{Title}</h1>

                  <p><GatsbyImage image={Image} alt="Image" className="pb-5 my-5"/></p>

                  <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} style={styleObj} />
                </Col>
              </Row>
            </Container>

          </Layout>
            
        </>
        
    )
}

export default BlogPage


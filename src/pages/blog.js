import * as React from "react"

import Layout from '../components/Layout'

import PostLink from '../components/Layout'

import { Container, Row, Col } from 'react-bootstrap'

import { graphql, Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../style/main.scss'


// markup
const BlogIndex = ({data}) => {

  const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<div>
				{edges.map(edge => {
					const { frontmatter } = edge.node;
          const { fields } = edge.node;

					return (
            <Container fluid>
              <Row variant="secondary" className="vh-100 justify-content-center align-items-center">
                <Col className="vh-50">
                  <div key={fields.slug}>
                    <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link>
                      &nbsp;
                      <small>
                      {' '}
                      <em>published on</em> {frontmatter.date}
                      </small>
                      <p>{frontmatter.description}</p>
                      <br />
                  </div>
                </Col>
              </Row>
            </Container>
					);
				})}
			</div>
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
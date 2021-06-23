import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'

export default function Hero() {
    return (
        <section id="hero" className="jumbotron">
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        
                        <StaticImage src="../images/Peter_Golden_Gate.JPG" alt="Profile Picture" />
                        
                    </Col>
                    <Col md={6} sm={12}>
                        <div>
                            <title>Designer, Developer, Data Science</title>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'

export default function Hero() {
    return (
        <section id="hero" className="jumbotron">
            <Container fluid>
                <Row className="hero-wrapper">
                    <Col md={6} sm={12} className="image-column">
                        <div className="hero-wrapper-image" >
                            <StaticImage className="gatsbyImage" src="../images/Peter_Golden_Gate.JPG" alt="Profile Picture" layout="constrained" objectFit="contain" />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div classname="hero-wrapper-image">
                            <h1>Designer, Developer, Data Scientist</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

export default function Hero() {
    return (
        <section id="hero" className="jumbotron">
            <Container>
                <Row>
                    <Col md={6} sm={12}></Col>
                    <Col md={6} sm={12}></Col>
                </Row>
                <h1>
                    Hello, world!
                </h1>
            </Container>
        </section>
    )
}

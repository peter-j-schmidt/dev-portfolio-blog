import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'

import AboutImage from './AboutImage'

export default function About() {
    return (
        
         <div id="about">
             <Container fluid >
                 <Row className="justify-content-center align-items-center">
                     <Col md={6} >
                        
                        <AboutImage />
                        
                    </Col>

                    <Col md={6} >
                        
                        <AboutImage />
                        
                    </Col>
                </Row> 
            </Container>
        </div>
            
        
    )
}


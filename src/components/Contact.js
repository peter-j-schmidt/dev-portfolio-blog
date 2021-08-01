import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'

import AboutImage from './AboutImage'

export default function Contact() {
    return (
        
         <div id="about">
             <Container fluid >
                 <Row className="justify-content-center align-items-center">
                     <Col md={12} >
                        
                        <AboutImage />
                        
                    </Col>
                </Row> 
            </Container>
        </div>
            
        
    )
}

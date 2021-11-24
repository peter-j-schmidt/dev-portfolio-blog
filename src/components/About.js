import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'

import italy_image from '../images/Italy_Headshot.jpg'

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
                        
                        <Image src={italy_image} width="450" height="600" roundedCircle />
                        
                    </Col>
                </Row> 
            </Container>
        </div>
            
        
    )
}


import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import { StaticImage } from 'gatsby-plugin-image'

import italy_image from '../images/Italy_Headshot.jpg'

import AboutImage from './AboutImage'

export default function About() {
    return (
        
        <Container class="bg-light" fluid >
            <Row variant="secondary" className="vh-100 justify-content-center align-items-center">
                <Col md={6} >
                    
                    <AboutImage />
                    
                </Col>

                <Col md={6} >
                    
                    <div>
                        <p>Hello, world! I'm Peter, a self-taught developer who enjoys learning about computer science, artificial intelligence, and data analytics. On this website, I'll write about the things I am learning and show you the projects I'm working on. Check in regularly to see my progress in this fascinating feild!</p>
                    </div>
                    
                </Col>
            </Row> 
        </Container>
        
            
        
    )
}


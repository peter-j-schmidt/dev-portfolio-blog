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
                        
                        <form name="contact" method="POST" data-netlify="true" >

                            <div>
                                <label>
                                    First Name
                                    <input type="text" name="firstName"></input>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Last Name
                                    <input type="text" name="lastName"></input>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Email
                                    <input type="text" name="email"></input>
                                </label>
                            </div>

                            <div>
                                <label>
                                    First Name
                                    <textarea name="message"></textarea>
                                </label>
                            </div>

                            <button type="submit" >Send</button>
                            <input type="reset" value="Clear" />
                        </form>
                        
                    </Col>
                </Row> 
            </Container>
        </div>
            
        
    )
}

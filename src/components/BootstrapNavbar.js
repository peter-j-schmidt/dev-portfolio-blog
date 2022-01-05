import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'

export default function BootstrapNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Peter J. Schmidt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                        <Nav.Link href="/projects" >Projects</Nav.Link>
                        <Nav.Link href="/blog" >Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
import React, { useState } from 'react'
import styled from "styled-components"

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo>Peter J. Schmidt</Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Items isOpen={isOpen}>
                <ItemLink>About</ItemLink>
                <ItemLink>Projects</ItemLink>
                <ItemLink>Blog</ItemLink>
            </Items>
        </Nav>
    )
}

export default NavBar;

const Nav = styled.nav`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(26, 26, 124, 1) 50%, rgba(0, 212, 255, 1) 100%);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;

const Logo = styled.div`
    padding: 1rem 0;
    color: white;
`;

const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height -.3s ease-in;
        width: 100%;
        
    }
`;

const ItemLink = styled.a`
    padding: 1rem 2rem;
    color: white;
`;

const Hamburger = styled.div`
    display: none;

    flex-direction: column;

    span {
        height: 2px;
        width: 25px;
        background: white;
        margin-bottom: 4px;
        border-radius: 5px;

    }

    @media (max-width: 768px) {
        display: flex;
    }
`;
import * as React from 'react'
import styled from "styled-components"

const Wrapper = styled.header`

`

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
        </nav>
    )
}

export default NavBar;

const Navbar = styled.nav`

`
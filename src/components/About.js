import React from 'react'

import { Container } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'

export default function About() {
    return (
        
         <div>   
            <h1>About Me</h1>
            <StaticImage src="https://hookagency.com/wp-content/uploads/2018/02/funnyweird-stock-image.jpg" objectFit={"contained"} alt="Profile Picture" />  
        </div>
            
        
    )
}

import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

export default function AboutImage() {
    return (
        <div id="image-container" >
            <StaticImage src="../images/Peter_Golden_Gate.JPG" alt="profile image" layout="constrained" imgClassName="gatsby-image" />
        </div>
    )
}


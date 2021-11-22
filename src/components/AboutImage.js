import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

export default function AboutImage() {
    return (
        <div id="image-container" >
            <StaticImage src="../images/Italy_Headshot.jpg" alt="profile image" layout="constrained" imgClassName="gatsby-image" />
        </div>
    )
}


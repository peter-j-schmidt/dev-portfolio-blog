import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

const BlogImage = (props) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center pb-5">
            <GatsbyImage image={props.image} />
            <div className="justify-content-start">
                <figcaption>{props.caption}</figcaption>
            </div>
        </div>
    )
}

export default BlogImage

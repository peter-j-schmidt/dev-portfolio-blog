import React from 'react'

import { Link } from 'gatsby'

const PostLink = ({ post }) => {
    return (
        <div>
            <Link to={`/blog${post.fields.slug}`}>
                {post.frontmatter.title} ({post.frontmatter.date})
            </Link>
        </div>
    )
}

export default PostLink





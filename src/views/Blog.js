import React from 'react';

const Blog = (props) => (
    <div>
        {props.post.content.text}
    </div>
);

export default Blog;

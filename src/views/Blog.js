import React from 'react';

const Blog = (props) => (
    <div dangerouslySetInnerHTML={ {__html: props.post.content.text} } />
);

export default Blog;

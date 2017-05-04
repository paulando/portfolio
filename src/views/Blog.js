import React from 'react';

const Blog = (props) => (
    <div>
        {props.children}
        {console.log(props)}
    </div>
);

export default Blog;

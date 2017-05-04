import React from 'react';
// import Route404   from "../components/Route404";
// <Route404 />

const BlogItem = (props) => (
    <div>
        Blog item: {props.match.params.id}
        {console.log(props.match.params.id)}
    </div>
);

export default BlogItem;

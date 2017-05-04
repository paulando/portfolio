import React from 'react';
import axios from 'axios';

const getBlogposts = (url) => {
    axios.get(url)
    .then(res => {
        console.log(res);
    });
};

export default getBlogposts;

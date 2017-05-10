import axios from 'axios';

const getBlogposts = (url) => {
    return axios.get(url)
};

export default getBlogposts;

import React, { Component } from "react";
import getBlogposts from "../helpers/getBlogposts";
import Blog from "../views/Blog";
import axios from 'axios';


// {getBlogposts("http://api.andriekuspaulius.com/portfolio/blogposts.php?getposts=all")}

class BlogContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "posts": {}
        };
    }

    getInitialState() {
        return {posts: getBlogposts("http://api.andriekuspaulius.com/portfolio/blogposts.php?getposts=all")};
    }
    // lopas() {
    //     // return getBlogposts("http://api.andriekuspaulius.com/portfolio/blogposts.php?getposts=all");
    //     return axios.get("http://api.andriekuspaulius.com/portfolio/blogposts.php?getposts=all")
    //     .then(res => {
    //         res;
    //     });
    // }

    render() {
        // return <Blog posts={this.lopas}>
        return <Blog post={this.state.posts}>
            Hello, Blog
        </Blog>;
    }
}

export default BlogContainer;

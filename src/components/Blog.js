import React, { Component } from "react";
// import getBlogposts from "../helpers/getBlogposts";
import Blog from "../views/Blog";
import axios from 'axios';


class BlogContainer extends Component {

    constructor(props) {
        super(props);

        // let suka = getBlogposts("http://api.andriekuspaulius.com/portfolio/blogposts.php?getposts=all").then(res => {
        //     _this.setState({"posts":res.request.response});
        // });

        this.state = {
            "posts": []
        };

        let self = this;
        axios.get("http://api.andriekuspaulius.com/portfolio/blogposts.php?getposts=all")
            .then(function (response) {
                console.log("received", response.data);
                self.setState({posts: response.data})
            })
            .catch(function (error) {
                console.log("error",error);
            });

    }

    render() {

        console.log("nu kas ci?", this.state.posts)

        let kakalis = this.state.posts.map(post => <Blog key={post.metas.alias[1]} post={post} /> );

        return <div>{kakalis}</div>;
    }
}

export default BlogContainer;
// https://daveceddia.com/ajax-requests-in-react/

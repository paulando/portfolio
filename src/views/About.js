import React from 'react';
import Me from "../images/paulius-andriekus.jpg";
import {Helmet} from "react-helmet";

const About = (props) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <meta property="og:url"         content="http://portfolio.andriekuspaulius.com/about" />
            <meta property="og:type"        content="article" />
            <meta property="og:title"       content="A little something about me" />
            <meta property="og:description" content="My name is Paulius. I am from Telsiai, Lithuania, Northern Europe." />
            <meta property="og:image"       content="/static/media/paulius-andriekus.2d388486.jpg" />
        </Helmet>
        <div>
            About page
            <img src={Me} alt="This is me - Paulius" />
        </div>
    </div>
);

export default About;

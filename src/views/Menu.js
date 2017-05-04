import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog/blogpost-1">Blog post 1</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export default Menu;

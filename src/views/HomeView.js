import React from 'react';
import HomeStyles from '../styles/css/home.css';

const Home = (props) => (
    <div id="page_home" style={HomeStyles}>
        <div id="block_hello" className="text-block bg-white">
            <div className="inner">
                <h1 className="top-row">Hi, I'm Paulius</h1>
                <h2 className="bottom-row">your <span className="bold">web developer</span></h2>
            </div>
        </div>

        <div id="block_contact" className="text-block bg-white">
            <div className="inner">
                <h5 className="top-row">Contact me</h5>
                <div>
                    <a href="https://github.com/paulando" target="_blank" className="icon github">
                        <span>/paulando</span>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/PaulAndriekus" target="_blank" className="icon twitter">
                        <span>@PaulAndriekus</span>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/PaulAndriekus" target="_blank" className="icon linkedin">
                        <span>/andriekuspaulius</span>
                    </a>
                </div>
            </div>
        </div>
       
        <div id="block_photo" className="text-block bg-white">
            <img src="/images/Paulius-Andriekus.jpg" alt="Paulius Andriekus portrait"/>
        </div>
    </div>
);

export default Home;

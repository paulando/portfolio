import React from 'react'
import img from './images/hero.png'
import twitter from './images/twitter.svg'
import github from './images/github.svg'
import instagram from './images/instagram.svg'
import linkedin from './images/linkedin.svg'
import styles from '../../styles/modules/hero.scss'

const Hero = () => (
    <div className="hero hero-theme--orange" style={{ "height": window.innerHeight, "maxHeight": "1100px" }}>
        <div className="hero-background hero-background--orange">
            <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                margin: '0 auto',
                padding: '0 15rem',
                paddingTop: 0,
                textAlign: "right",
                top: "55%",
                transform: "translateY(-50%)"
            }}>
                <div style={{ display: "inline-block", color: "#FFF", textAlign: "left" }}>
                    <h1 style={{ color: "#FFF" }}>
                        <span className="top" style={{ display: "block" }}>Hi, I am</span>
                        <span className="middle" style={{ display: "block" }}>Paulius Andriekus.</span>
                        <span className="bottom" style={{ display: "block" }}>Front-end web developer.</span>
                    </h1>
                    <div className="btn-block">
                        <a href="#about_me" className="btn-primary" style={{ "display": "inline-block" }}>Know more</a>
                    </div>
                    <div className="social-block">
                        <span className="social-text">connect with me</span>
                        <a href="https://www.linkedin.com/in/andriekuspaulius" aria-label="go to linkedin profile" target="_blank" rel="noopener" className="social-icon icon-linkedin"></a>
                        <a href="https://www.instagram.com/paulando14" aria-label="go to instagram profile" target="_blank" rel="noopener" className="social-icon icon-instagram"></a>
                        <a href="https://twitter.com/PaulAndriekus" aria-label="go to twitter profile" target="_blank" rel="noopener" className="social-icon icon-twitter"></a>
                        <a href="https://github.com/paulando" aria-label="go to github profile" target="_blank" rel="noopener" className="social-icon icon-github"></a>
                    </div>
                </div>
            </div>
        </div>
        <img src={img} style={{ position: "absolute", bottom: 0, maxWidth: "50%", margin: 0 }} />
    </div >
)

export default Hero

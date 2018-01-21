import React from 'react'
import img from './images/hero.png'
import twitter from './images/twitter.svg'
import github from './images/github.svg'
import instagram from './images/instagram.svg'
import linkedin from './images/linkedin.svg'
import styles from '../../styles/modules/hero.scss'

class Hero extends React.Component {

    constructor(props) {
        super(props)

        this.state = { window_height: 800 }
    }

    componentDidMount() {
        setInterval(() => this.changeTheme(), 3000)
        window.addEventListener("resize", this.updateDimensions.bind(this))
        this.updateDimensions()
    }

    updateDimensions() {
        this.setState({ window_height: window.innerHeight })
    }

    changeTheme() {

        const el_class_list = document.querySelector(".hero").classList;
        const themes = [
            'hero-theme--blue',
            'hero-theme--orange',
            'hero-theme--purple',
            'hero-theme--pink'
        ]

        el_class_list.remove(...themes)
        el_class_list.add(themes[Math.floor(Math.random() * themes.length)])

    }

    render() {

        const { window_height } = this.state

        return (
            <div className="hero hero-theme--pink" style={{ height: window_height }}>
                <div className="hero-background">
                    <div className="container">
                        <div className="hero-wrap">
                            <div className="hero-content" style={{ display: "inline-block", color: "#FFF", textAlign: "left" }}>
                                <h1 style={{ color: "#FFF" }}>
                                    <span className="top" style={{ display: "block" }}>Hi, I am</span>
                                    <span className="middle" style={{ display: "inline-block" }}>Paulius Andriekus.</span>
                                    <span className="bottom" style={{ display: "block" }}>Front-end web developer.</span>
                                </h1>
                                <div className="btn-block">
                                    <a href="#about_me" className="btn-primary" style={{ "display": "inline-block" }} onClick={() => alert("Website is still work in progress...")}>Know more</a>
                                </div>
                                <div className="social-block">
                                    <span className="social-text">connect with me</span>
                                    <a href="https://www.linkedin.com/in/andriekuspaulius" target="_blank" rel="noopener" className="social-icon icon-linkedin" aria-label="go to linkedin profile"></a>
                                    <a href="https://www.instagram.com/paulando14" target="_blank" rel="noopener" className="social-icon icon-instagram" aria-label="go to instagram profile"></a>
                                    <a href="https://twitter.com/PaulAndriekus" target="_blank" rel="noopener" className="social-icon icon-twitter" aria-label="go to twitter profile"></a>
                                    <a href="https://github.com/paulando" target="_blank" rel="noopener" className="social-icon icon-github" aria-label="go to github profile"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={img} className="hero-image" />
            </div>
        )
    }
}

// const Hero = () => (
//     <div className="hero hero-theme--pink" style={{ height: () => window.innerHeight }}>
//         <div className="hero-background">
//             <div className="container">
//                 <div className="hero-wrap">
//                     <div className="hero-content" style={{ display: "inline-block", color: "#FFF", textAlign: "left" }}>
//                         <h1 style={{ color: "#FFF" }}>
//                             <span className="top" style={{ display: "block" }}>Hi, I am</span>
//                             <span className="middle" style={{ display: "block" }}>Paulius Andriekus.</span>
//                             <span className="bottom" style={{ display: "block" }}>Front-end web developer.</span>
//                         </h1>
//                         <div className="btn-block">
//                             <a href="#about_me" className="btn-primary" style={{ "display": "inline-block" }}>Know more</a>
//                         </div>
//                         <div className="social-block">
//                             <span className="social-text">connect with me</span>
//                             <a href="https://www.linkedin.com/in/andriekuspaulius" aria-label="go to linkedin profile" target="_blank" rel="noopener" className="social-icon icon-linkedin"></a>
//                             <a href="https://www.instagram.com/paulando14" aria-label="go to instagram profile" target="_blank" rel="noopener" className="social-icon icon-instagram"></a>
//                             <a href="https://twitter.com/PaulAndriekus" aria-label="go to twitter profile" target="_blank" rel="noopener" className="social-icon icon-twitter"></a>
//                             <a href="https://github.com/paulando" aria-label="go to github profile" target="_blank" rel="noopener" className="social-icon icon-github"></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img src={img} style={{ position: "absolute", bottom: 0, maxWidth: "50%", margin: 0 }} />
//     </div>
// )

export default Hero

import React from 'react'
import img from './images/hero.png'
import Socials from '../socials'
import styles from '../../styles/modules/hero.scss'

class Hero extends React.Component {

    constructor(props) {
        super(props)

        this.state = { window_height: 800 }
    }

    componentDidMount() {

        setInterval(() => this.changeTheme(), 3000)

        document.getElementById("btn_modal_close").addEventListener("click", this.closeModal.bind(this))
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

    scrollToBlock() {

        const scroll_to_block = document.getElementById("skills")

        scroll_to_block.scrollIntoView({
            behavior: 'smooth'
        });

    }

    openModal() {
        document.getElementById("modal_resume").classList.add("opened")
    }

    closeModal() {
        document.getElementById("modal_resume").classList.remove("opened")
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
                                    <button className="btn-primary" style={{ "display": "inline-block" }} onClick={() => this.openModal()}>Résumé</button>
                                </div>
                                <div className="social-block">
                                    <span className="social-text">connect with me</span>
                                    <Socials/>
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

export default Hero

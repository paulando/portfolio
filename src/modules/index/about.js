import React from 'react'
import styles from '../../styles/modules/about.scss'
import photo from './images/me-and-dog.jpg'

const About = () => (
    <main id="about">
        <div className="container">
            <div className="content">
                <div className="heading-primary--uppercase">Something</div>
                <h2 className="heading-primary"><span className="text-color--pink-primary">About</span> me</h2>
                <div className="text">
                    <div className="image-block">
                        <img src={photo} alt="Paulius with his dog" />
                    </div>
                    <div className="heading-paragraph"><b>&#123; <span className="text-color--pink-primary">degree</span> : <span className="text-color--purple-primary">1</span> &#125;</b></div>
                    <p>Graduated from <a href="http://www.kaunokolegija.lt/en" target="_blank" rel="noopener">Kaunas University of Applied Science</a>. Studied multimedia technologies (programming, graphic design, video, and animation) and received a diploma of information engineering.</p>
                    <p>During studies spent one year abroad as Erasmus exchange student in <a href="https://www.eal.dk/international" target="_blank" rel="noopener">Lillebaelt Academy</a> in Odense, Denmark.</p>
                    <div className="heading-paragraph"><b>&#123; <span className="text-color--pink-primary">hobbies</span> : <span className="text-color--purple-primary">["sports", "fun", "learn"]</span> &#125;</b></div>
                    <p>In spare time I enjoy playing basketball, football, volleyball. Other than that, I love to participate at quiz nights or spend time with my collie dog - Kornis.</p>
                    <div className="heading-paragraph"><b>&#123; <span className="text-color--pink-primary">goals</span> : <span className="text-color--purple-primary"> true</span> &#125;</b></div>
                    <p>Main objectives are: improve coding skills everyday as well as analytic thinking.</p>
                </div>
            </div>
        </div>
    </main>
)

export default About
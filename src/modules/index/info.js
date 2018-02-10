import React from 'react'
import styles from '../../styles/modules/info.scss'
import Socials from '../socials'

const Info = () => (
    <section id="info">
        <div className="container">
            <h3 className="heading-primary"><span className="first-name">Paulius </span><span className="last-name">Andriekus</span></h3>
            <Socials/>
        </div>
    </section>
)

export default Info
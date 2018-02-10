import React from 'react'
import styles from '../../styles/modules/skills.scss'

const Skills = () => (
    <section id="skills">
        <div className="container">
            <div className="content">
                <div className="heading-primary--uppercase">Developed</div>
                <h2 className="heading-primary"><span className="text-color--purple-secondary">Skills</span> & tools</h2>
                <div className="grid">
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-html">
                                <div className="path1"></div>
                                <div className="path2"></div>
                                <div className="path3"></div>
                                <div className="path4"></div>
                                <div className="path5"></div>
                            </div>
                            <div className="name">HTML</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-js">
                                <div className="path1"></div>
                                <div className="path2"></div>
                            </div>
                            <div className="name">Javascript</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-react"></div>
                            <div className="name">ReactJS</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-sass"></div>
                            <div className="name">SASS</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-php"></div>
                            <div className="name">PHP</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-terminal">
                                <div className="path1"></div>
                                <div className="path2"></div>
                                <div className="path3"></div>
                                <div className="path4"></div>
                                <div className="path5"></div>
                                <div className="path6"></div>
                                <div className="path7"></div>
                                <div className="path8"></div>
                            </div>
                            <div className="name">Terminal</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-jquery">
                                <div className="path1"></div>
                            </div>
                            <div className="name">jQuery</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-vscode"></div>
                            <div className="name">VS Code</div>
                        </div>
                    </div>
                    <div className="grid-item mq-hide">
                        <div className="skill-block">
                            <div className="icon-block icon-gulp">
                                <div className="path1"></div>
                                <div className="path2"></div>
                                <div className="path3"></div>
                            </div>
                            <div className="name">Gulp</div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skill-block">
                            <div className="icon-block icon-boostrap">
                                <div className="path1"></div>
                                <div className="path2"></div>
                                <div className="path3"></div>
                            </div>
                            <div className="name">Bootstrap</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Skills
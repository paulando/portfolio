import React from 'react'
import Link from 'gatsby-link'
import Hero from '../modules/index/hero'
import Skills from '../modules/index/skills'
import About from '../modules/index/about'
import Info from '../modules/index/info'
import Footer from '../modules/index/footer'
import ModalResume from '../modules/modalResume'

const IndexPage = () => (
  <div>
    <Hero />
    <Skills />
    <About />
    <Info />
    <Footer />
    <ModalResume />
  </div>
)

export default IndexPage

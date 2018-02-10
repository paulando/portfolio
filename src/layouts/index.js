import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'
import '../styles/_template.scss'

import favicon from '../../favicon.ico'
import og_image from '../modules/index/images/Paulius-Andriekus.jpg'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Front-end web developer | Paulius Andriekus"
      meta={[
        { name: 'description', content: 'Personal website of front-end web developer - Paulius Andriekus.' },
        { name: 'keywords', content: 'Front-end, Web, Developer, Programmer, Coder, Javascript, PHP, ReactJS' },
        { property: 'fb:app_id', content: '167713340527355' },
        { property: 'og:url', content: 'https://andriekuspaulius.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Front-end web developer | Paulius Andriekus' },
        { property: 'og:description', content: 'Personal website of front-end web developer - Paulius Andriekus.' },
        { property: 'og:image', content: `https://andriekuspaulius.com/${og_image}` },
      ]}
      link={[
        { rel: 'icon', href: favicon },
        { rel: 'author', href: 'https://plus.google.com/114846059836937592407?rel=author' }
      ]}
/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
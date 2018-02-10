import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'
import '../styles/_template.scss'

import favicon from '../../favicon.ico'
import meta_image from '../modules/index/images/Paulius-Andriekus.jpg'

const meta_url = 'https://andriekuspaulius.com'
const meta_title = 'Front-end web developer | Paulius Andriekus'
const meta_description = 'Personal website of front-end web developer - Paulius Andriekus.'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Front-end web developer | Paulius Andriekus"
      meta={[
        { name: 'description', content: meta_description },
        { name: 'keywords', content: 'Front-end, Web, Developer, Programmer, Coder, Javascript, PHP, ReactJS' },
        { property: 'fb:app_id', content: '167713340527355' },
        { property: 'og:url', content: meta_url },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: meta_title },
        { property: 'og:description', content: meta_description },
        { property: 'og:image', content: `${meta_url}/${meta_image}` },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '@PaulAndriekus' },
        { property: 'twitter:creator', content: '@PaulAndriekus' },
        { property: 'twitter:title', content: meta_title },
        { property: 'twitter:description', content: meta_description },
        { property: 'twitter:image', content: `${meta_url}/${meta_image}` }
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
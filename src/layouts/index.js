import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import '../styles/ico-fonts.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Front-end web developer | Paulius Andriekus"
      meta={[
        { name: 'description', content: 'Personal website of front-end web developer - Paulius Andriekus.' },
        { name: 'keywords', content: 'Front-end, web, developer, programmer, javascript, php, reactjs' },
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

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'
import '../styles/_template.scss'

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

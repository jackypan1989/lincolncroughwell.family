import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import "../scss/main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
        <link rel="dns-prefetch" href="https://use.typekit.net"/>
        <link rel="dns-prefetch" href="https://www.eventbriteapi.com/"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <link rel="stylesheet" href="https://use.typekit.net/ivl3jxo.css"/>
      </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

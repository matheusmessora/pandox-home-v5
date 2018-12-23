import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import "../styles/app.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="h-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-brand py-1">
            <div className="container">
                <a className="navbar-brand" href="#">
                    PANDOX <span className="text-white-50">| Tecnologia para micro <span className="d-none d-lg-inline">e pequenas </span>empresas</span>
                </a>
            </div>
        </nav>
        <div className="content h-100">
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

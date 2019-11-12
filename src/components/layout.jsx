import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import '../styles/styles.scss'
import Logo from '../../content/assets/logo.svg'
import Line from '../../content/assets/line.svg'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            <Link to="/" className="logo">
              <Logo />
            </Link>
            <Line className="line" />
            <div className="tagline">TABLETOP DIY</div>
          </div>
          <nav className="desktop">
            <Link to="/">All posts</Link>
            <Link to="/about">About</Link>
          </nav>
          <nav className="mobile">
            <div className="menu-toggle">
              <input type="checkbox" />
              <span />
              <span />
              <span />
              <div className="menu-wrapper">
                <ul>
                  <li>
                    <Link to="/">All posts</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default Layout

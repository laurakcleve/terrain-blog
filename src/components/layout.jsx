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
          <nav>
            <Link to="/about">About</Link>
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

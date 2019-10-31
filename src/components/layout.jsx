import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import '../styles/styles.scss'
import Logo from '../../content/assets/logo.svg'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="wrapper">
          <Link to="/" className="logo">
            <Logo />
          </Link>
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

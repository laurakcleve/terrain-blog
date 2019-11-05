import { Helmet } from 'react-helmet'
import React from 'react'

import styles from '../styles/commento-custom.css'

const Comments = () => {
  return (
    <>
      <div id="commento" />
      <Helmet>
        <script
          defer
          src="https://cdn.commento.io/js/commento.js"
          data-css-override={styles}
        />
      </Helmet>
    </>
  )
}

export default Comments

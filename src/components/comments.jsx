import { Helmet } from 'react-helmet'
import React from 'react'

const Comments = () => {
  return (
    <>
      <div id="commento">
        <Helmet>
          <script defer src="https://cdn.commento.io/js/commento.js" />
        </Helmet>
      </div>
    </>
  )
}

export default Comments

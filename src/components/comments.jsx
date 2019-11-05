import React, { useEffect } from 'react'

import styles from '../styles/commento-custom.css'

const insertScript = (src, id, parentElement) => {
  const script = window.document.createElement('script')
  script.async = true
  script.src = src
  script.id = id
  script['data-css-override'] = styles
  parentElement.appendChild(script)
  return script
}

const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id)
  if (script) {
    parentElement.removeChild(script)
  }
}

const Comments = ({ id }) => {
  useEffect(() => {
    if (!window) {
      return
    }

    const { document } = window

    if (document.getElementById('commento')) {
      insertScript(
        'https://cdn.commento.io/js/commento.js',
        'commento-script',
        document.body
      )
    }

    return () => removeScript('commento-script', document.body)
  }, [id])

  return (
    <>
      <div id="commento" />
    </>
  )
}

export default Comments

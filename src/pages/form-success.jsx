import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const FormSuccess = () => (
  <Layout>
    <div className="success-message">
      <i className="fas fa-check" />
      Thanks! Your message was sent successfully.
    </div>
    <div className="back">
      <Link to="/about">Back</Link>
    </div>
  </Layout>
)

export default FormSuccess

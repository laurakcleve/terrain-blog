import React from 'react'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <p>
      My name is Laura, and I&#39;m a new recruit to the world of tabletop gaming.
      Building terrain is my jam. I also love miniature painting, and plan to get
      some pictures up sometime soon.
    </p>

    <p>Shoot me a message here:</p>

    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />

      <label htmlFor="name">
        <span>Name</span>
        <input type="text" name="name" />
      </label>

      <label htmlFor="email">
        <span>Email address</span>
        <input type="text" name="email" />
      </label>

      <label htmlFor="message">
        <span>Message</span>
        <textarea name="message" />
      </label>

      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default About

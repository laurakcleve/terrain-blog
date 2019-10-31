import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h2 className="post-page-title">{post.frontmatter.title}</h2>
      <p className="post-page-date">{post.frontmatter.date}</p>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <hr />

      <ul className="prev-next">
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>

      <Link to="/" className="bottom-home">
        Home
      </Link>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
    previous: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

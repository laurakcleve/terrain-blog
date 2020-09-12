import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Minis = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.group[0].edges

  return (
    <Layout title={siteTitle}>
      <SEO title="1d3Trees" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug} className="post-item">
            <Link to={node.fields.slug}>
              <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
              <div className="post-item-text">
                <h3>{title}</h3>
                <small>{node.frontmatter.date}</small>
                <p
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

Minis.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          edges: PropTypes.arrayOf(PropTypes.shape({})),
        })
      ),
    }).isRequired,
  }).isRequired,
}

export default Minis

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___category) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 630) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

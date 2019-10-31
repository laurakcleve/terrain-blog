import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

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

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              featuredImage: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  sizes: PropTypes.shape({
                    aspectRatio: PropTypes.number.isRequired,
                    base64: PropTypes.string.isRequired,
                    sizes: PropTypes.string.isRequired,
                    src: PropTypes.string.isRequired,
                    srcSet: PropTypes.string.isRequired,
                  }),
                }),
              }),
            }),
          }),
        })
      ),
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`

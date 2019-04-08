import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <Link to="/blog">Go Back</Link>
      <hr />
      <div className="post">
        <h1>{post.frontmatter.title}</h1>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        content
        author
        date
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

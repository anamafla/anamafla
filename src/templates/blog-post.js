import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    typeof window !== `undefined` && (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.content}
        />
        <MDBContainer className="mt-5 pt-5">
          <br />
          <Link to="/blog">Go Back</Link>

          <h1>{post.frontmatter.title}</h1>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <p>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </p>
        </MDBContainer>
      </Layout>
    )
  )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        path
        title
        content
        author
        date
        image {
          childImageSharp {
            fluid(maxHeight: 250, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        langKey
        slug
      }
    }
  }
`

import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import SEO from "../components/seo"
import { pseudoRandomBytes } from "crypto"

export default function Template({ data }) {
  const post = data.markdownRemark
  const lang = data.markdownRemark.fields.langKey

  return (
    <>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.content}
          image={post.frontmatter.image.childImageSharp.fluid.src}
          lang={lang}
        />

        <main>
          <article>
            <MDBContainer className="mt-5 pt-5">
              <br />

              <h1>{post.frontmatter.title}</h1>
              <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <p>
                Posted by {post.frontmatter.author} on {post.frontmatter.date}
              </p>
            </MDBContainer>
          </article>
        </main>
      </Layout>
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
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

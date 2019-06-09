import React from "react"

import { MDBCol, MDBContainer, MDBRow } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postcard"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `front-end`, `react`]} />

    <MDBContainer className="mt-5 pt-5">
      <h2 className="gray-text text-center mt-5"> Latest Posts</h2>

      <MDBRow>
        {data.allMarkdownRemark.edges.map(post => {
          const { title, content, date, path, image } = post.node.frontmatter
          const { id } = post.node

          return (
            <MDBCol md="6" xl="6">
              <PostCard
                title={title}
                content={content}
                date={date}
                id={id}
                path={path}
                image={image}
              />
            </MDBCol>
          )
        })}
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            content
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage

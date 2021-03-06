import React from "react"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postcard"

const BlogPage = ({ data }) => (
  <Layout transparent={false}>
    <SEO
      title="Blog"
      description="Artículos sobre desarrollo web de Ana Mafla"
      keywords={[`desarrollo web`, `gatsby`, `react`, `react-hooks`]}
    />

    <MDBContainer className="mt-5 pt-5">
      <h2 className="gray-text text-center mt-5"> Ultimas Publicaciones</h2>

      <MDBRow>
        {data.allMarkdownRemark.edges.map(post => {
          const { title, content, date, path, image } = post.node.frontmatter
          const { slug } = post.node.fields
          const { id } = post.node

          return (
            <MDBCol md="6" xl="6" key={title}>
              <PostCard
                title={title}
                content={content}
                date={date}
                id={id}
                path={path}
                image={image}
                slug={slug}
              />
            </MDBCol>
          )
        })}
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export const pageQuery = graphql`
  query BlogSpanishQuery {
    allMarkdownRemark(
      filter: { fields: { langKey: { regex: "/(es|any)/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            content
            author
            date
            image {
              childImageSharp {
                fluid {
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
    }
  }
`

export default BlogPage

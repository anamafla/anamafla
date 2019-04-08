import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `front-end`, `react`]} />

    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id} className="post-card">
        <h3>{post.node.frontmatter.title}</h3>
        <p>{post.node.frontmatter.content}</p>
        <small>{post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <br />
      </div>
    ))}
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
          }
        }
      }
    }
  }
`

export default BlogPage

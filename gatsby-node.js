const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog-post.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              content
              date
              author
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
      }
    }
  `).then(res => {
    console.log("res", res)

    if (res.errors) {
      return Promise.reject(res.errors)
    }

    if (typeof window !== `undefined`) {
      const module = require("module")
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}

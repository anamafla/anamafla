const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog-post.js")

  console.log("posTemplate", postTemplate)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
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

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}

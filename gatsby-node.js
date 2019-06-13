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

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-router-dom/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

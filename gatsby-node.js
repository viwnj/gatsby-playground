const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allCosmicjsPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allCosmicjsPosts.edges.forEach(({ node }) => {
    createPage({
      path: `posts/${node.slug}`,
      component: path.resolve("./src/templates/BlogPost/index.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}

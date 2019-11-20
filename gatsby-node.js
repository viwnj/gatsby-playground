const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `posts/${node.slug}`,
      component: path.resolve("./src/templates/BlogPost/index.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}

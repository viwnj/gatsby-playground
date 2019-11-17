import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
import Author from "../components/Author"
import SEO from "../components/seo"

export default ({ data }) => {
  const {
    allCosmicjsPosts: { edges },
  } = data

  return (
    <Layout>
      <SEO
        title="#pragma once - A blog by Vitor Henrique"
        description="All sorts of random stuff. You might learn something"
      />
      <Author />
      <div>
        {edges.map(({ node }) => {
          const { id, metafields, title, created_at, slug } = node
          const [description] = metafields
          return (
            <PostLink
              title={title}
              date={created_at}
              excerpt={description.value}
              slug={slug}
              key={id}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    allCosmicjsPosts {
      totalCount
      edges {
        node {
          id
          slug
          title
          created_at
          metafields {
            id
            title
            value
          }
        }
      }
    }
  }
`

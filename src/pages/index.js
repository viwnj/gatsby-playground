import React from "react"
import { format, parseISO } from "date-fns"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
import Author from "../components/Author"
import SEO from "../components/seo"

export default ({ data }) => {
  const {
    allContentfulBlogPost: { edges },
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
          const { id, description, title, createdAt, slug } = node
          const formattedDate = format(parseISO(createdAt), "yyyy, MMMM,  do")

          return (
            <PostLink key={id} slug={slug}>
              <div>
                <h3>{title}</h3>
                <span>{formattedDate}</span>

                <p>{description.description}</p>
              </div>
            </PostLink>
          )
        })}
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    allContentfulBlogPost {
      totalCount
      edges {
        node {
          id
          slug
          title
          createdAt
          author {
            name
          }
          description {
            description
          }
        }
      }
    }
  }
`

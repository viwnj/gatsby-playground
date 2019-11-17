import React from "react"
import { graphql } from "gatsby"
import { Container, Post } from "./styles"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

export default function BlogPost({ data }) {
  const post = data.cosmicjsPosts
  return (
    <Layout>
      <SEO title={"#pragma once - " + post.title} />
      <Container>
        <h1>{post.title}</h1>
        <Post dangerouslySetInnerHTML={{ __html: post.content }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      title
      content
    }
  }
`

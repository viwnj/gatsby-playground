import React from "react"
import { graphql } from "gatsby"
import { Container, Post, AuthorSection } from "./styles"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  const {
    childContentfulBlogPostBodyTextNode: {
      childMarkdownRemark: { html },
    },
  } = post

  return (
    <Layout>
      <SEO title={"#pragma once - " + post.title} />
      <Container>
        <h1>{post.title}</h1>
        <img src={post.heroImage.fluid.src} alt={post.heroImage.description} />
        <Post dangerouslySetInnerHTML={{ __html: html }} />
        <AuthorSection>
          <img src={post.author.image.fluid.src} alt={post.author.name} />
          <div>
            <a href={`https://github.com/${post.author.github}`}>
              {post.author.name} — {post.author.company}
            </a>
            <em>{post.author.shortBio.childMarkdownRemark.excerpt}</em>
          </div>
        </AuthorSection>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title

      author {
        name
        company
        github
        shortBio {
          childMarkdownRemark {
            excerpt
          }
        }

        image {
          fluid {
            src
          }
        }
      }

      heroImage {
        description
        fluid {
          src
        }
      }

      childContentfulBlogPostBodyTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

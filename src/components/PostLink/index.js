import React from "react"
import { Link } from "gatsby"
import { Container } from "./styles"

export default function PostInfo({ slug, children }) {
  return (
    <Link to={`/posts/${slug}`}>
      <Container>{children}</Container>
    </Link>
  )
}

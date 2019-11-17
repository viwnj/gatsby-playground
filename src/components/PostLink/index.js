import React from "react"
import { Link } from "gatsby"
import { format, parseISO } from "date-fns"
import { Container } from "./styles"

export default function PostInfo({ title, date, excerpt, slug }) {
  const formattedDate = format(parseISO(date), "yyyy, MMMM,  do")
  return (
    <Link to={`/posts/${slug}`}>
      <Container>
        <h3>
          {title}
          <span>— {formattedDate}</span>
        </h3>
        <p>{excerpt}</p>
      </Container>
    </Link>
  )
}

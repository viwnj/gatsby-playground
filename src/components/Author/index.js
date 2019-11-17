import React from "react"
import { Container } from "./styles"

export default function Author() {
  return (
    <Container>
      <img
        alt="author profile"
        src="https://avatars1.githubusercontent.com/u/35904476?s=400&u=0e61472da83a1939fb8c0f0e97d9ec9b20e64372&v=4"
      />
      <div>
        <p>
          Personal Blog by <a href="https://github.com/viwnj">viwnj</a>{" "}
        </p>
        <p>Client side is bad, but I love it.</p>
      </div>
    </Container>
  )
}

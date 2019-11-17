import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { FaChevronLeft } from "react-icons/fa"
import Layout from "../components/Layout"

const styles = css`
  display: flex;
  align-items: center;
`

export default function NotFound() {
  return (
    <Layout>
      <h1>Oh snoot! It seems you've reached a dead end :(</h1>
      <Link to="/">
        <div css={styles}>
          <FaChevronLeft />
          Go back
        </div>
      </Link>
    </Layout>
  )
}

import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { FaMoon, FaSun } from "react-icons/fa"
import { Container } from "./styles"
import Switch from "react-switch"

export default function Navigation({ onSwitch, switchChecked }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Container>
      <Link to={`/`}>
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <Switch
        onChange={onSwitch}
        checked={switchChecked}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        handleDiameter={30}
        onHandleColor="#fcc13b"
        checkedIcon={
          <FaMoon color="#fcc13b" size={15} style={{ marginLeft: "5px" }} />
        }
        uncheckedIcon={
          <FaSun color="#fcc13b" size={15} style={{ marginLeft: "5px" }} />
        }
        onColor="#121212"
        offColor="#121212"
      />
    </Container>
  )
}

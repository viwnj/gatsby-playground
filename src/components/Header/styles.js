import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: ${rhythm(2)};

  h1 {
    color: ${props => props.theme.palette.colors[0]} !important;
    font-weight: bold;
  }
`

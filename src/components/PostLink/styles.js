import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

export const Container = styled.div`
  padding: 10px;
  background: ${props => props.theme.palette.background[1]};
  margin-bottom: ${rhythm(1)};

  h3 {
    color: ${props => props.theme.palette.font[0]};
  }

  span {
    font-style: italic;
    color: ${props => props.theme.palette.font[0]};
  }

  p {
    color: ${props => props.theme.palette.font[1]};
  }
`

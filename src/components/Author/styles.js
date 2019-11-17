import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

export const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(1.5)};
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0;
    margin-right: 7px;

    border: 0;
  }

  div {
    p {
      font-size: 18px;
      margin: 0;
      color: ${props => props.theme.palette.font[0]};
      a {
        color: ${props => props.theme.palette.colors[0]};
        text-decoration: underline;
      }
    }
  }
`

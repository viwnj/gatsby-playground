import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"

export const PageLayout = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: ${rhythm(1.5)};
  padding-top: ${rhythm(2)};

  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.palette.font[0]};
  }
`

import styled from "@emotion/styled"

export const Container = styled.div`
  h1 {
    color: ${props => props.theme.palette.font[0]};
  }
`

export const Post = styled.div`
  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${props => props.theme.palette.font[0]};
  }
`

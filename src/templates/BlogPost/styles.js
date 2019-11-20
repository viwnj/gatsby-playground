import styled from "@emotion/styled"

export const Container = styled.div`
  h1 {
    color: ${props => props.theme.palette.font[0]};
  }

  img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 5px;
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

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > img {
    margin: 0;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    a {
      font-weight: bold;
      color: ${props => props.theme.palette.font[0]};
    }
    em {
      color: ${props => props.theme.palette.font[0]};
    }
  }
`

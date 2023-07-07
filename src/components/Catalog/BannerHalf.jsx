import styled from "styled-components"

export const BannerHalf = ({ src }) => {
  return <Imagem src={src} />
}

const Imagem = styled.img`
  width: 100%;
  object-fit: cover;
`

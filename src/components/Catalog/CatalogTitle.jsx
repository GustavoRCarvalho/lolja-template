import styled from "styled-components"

export const CatalogTitle = ({ pathLabel, about }) => {
  return (
    <>
      <Title role="heading">{pathLabel.replace("busca=", "Busca por: ")}</Title>
      {about && <Paragraph>{about}</Paragraph>}
    </>
  )
}

const Title = styled.h1`
  margin: 0;

  font-size: 2em;
  line-height: 1.2;
  text-transform: uppercase;

  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  font-size: 1em;
  margin: 1rem 0 0;
  text-align: center;
`

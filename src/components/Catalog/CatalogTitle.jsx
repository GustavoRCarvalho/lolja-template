import styled from "styled-components"

export const CatalogTitle = ({ pathLabel }) => {
  return (
    <>
      <Title role="heading">{pathLabel.replace("busca=", "Busca por: ")}</Title>
      <Paragraph>
        Ela pode parecer colorida e alegre à primeira vista, mas ela é a mistura
        da primavera cheia de cor, com a energia do misticismo mais dark.
      </Paragraph>
    </>
  )
}

const Title = styled.h1`
  margin: 0;

  font-size: 2em;
  line-height: 1.2;
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  font-size: 1em;
  margin: 1rem 0 0;
`

import styled from "styled-components"

export const ProductImage = ({ images }) => {
  return (
    <CardImage>
      <Image src={images[0]} topImage />
      <Image src={images[1]} />
    </CardImage>
  )
}

const CardImage = styled.figure`
  position: relative;
  width: 100%;
  aspect-ratio: 0.75;

  margin: 0;

  @media screen and (max-width: 1024px) {
    max-height: 300px;
  }
`

const Image = styled.img`
  position: absolute;

  height: 100%;
  width: 100%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  left: 0;
  top: 0;
  object-fit: cover;

  opacity: 1;
  transition: opacity 250ms;

  :hover {
    opacity: 0;
    transition: opacity 250ms;
  }
`

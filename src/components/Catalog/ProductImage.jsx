import styled from "styled-components"

export const ProductImage = ({ images }) => {
  return (
    <CardImage>
      <Image src={images[1]} />
      <Image src={images[0]} topImage />
    </CardImage>
  )
}

const CardImage = styled.figure`
  position: relative;
  height: 100%;
  width: 100%;

  margin: 0;
`

const Image = styled.img`
  position: absolute;

  height: 100%;
  width: 100%;

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

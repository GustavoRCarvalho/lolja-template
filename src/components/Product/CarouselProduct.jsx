import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"

const CarouselContainer = styled(Carousel)`
  padding: 0;
  width: 50%;

  @media screen and (max-width: ${(props) => props.theme.maxWidthTablet}) {
    width: 100%;
    max-width: 40rem;

    .thumbs-wrapper {
      display: none;
    }
  }
`

export default function CarouselProduct({ title, imagesList }) {
  return (
    <CarouselContainer emulateTouch={true}>
      {imagesList.map((src, index) => {
        return <img alt={title} key={index} src={src} />
      })}
    </CarouselContainer>
  )
}

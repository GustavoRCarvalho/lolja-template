import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"

export const BannnerCarousel = ({ title, imagesList = [] }) => {
  console.log(imagesList)

  return (
    <CarouselContainer
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
      transitionTime={1000}
    >
      {imagesList.map((src, index) => {
        console.log(src)
        return <Image alt={title} key={index} src={src} />
      })}
    </CarouselContainer>
  )
}

const CarouselContainer = styled(Carousel)`
  padding: 0;
  z-index: 1;
`

const Image = styled.img``

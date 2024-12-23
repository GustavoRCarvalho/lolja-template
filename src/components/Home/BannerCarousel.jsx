import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import Banner1 from "../../assets/images/FakeAPIImages/Banner/Banner4.webp"
import Banner2 from "../../assets/images/FakeAPIImages/Banner/Banner5.webp"
import Banner3 from "../../assets/images/FakeAPIImages/Banner/Banner6.webp"

export const BannnerCarousel = () => {
  const CarouselImages = [Banner3, Banner1, Banner2]

  return (
    <CarouselContainer
      emulateTouch={true}
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
      transitionTime={1000}
    >
      {CarouselImages.map((src, index) => {
        return <Image alt={"Banner"} key={index} src={src} />
      })}
    </CarouselContainer>
  )
}

const CarouselContainer = styled(Carousel)`
  max-width: 100vw;
  padding: 0;
  user-select: none;
`

const Image = styled.img`
  max-height: 80dvh;
  object-fit: cover;
`

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import Banner1 from "../../assets/images/FakeAPIImages/Banner/Banner1.png"
import Banner2 from "../../assets/images/FakeAPIImages/Banner/Banner2.png"
import Banner3 from "../../assets/images/FakeAPIImages/Banner/Banner3.png"

export const BannnerCarousel = () => {
  const CarouselImages = () => {
    const List = [Banner1, Banner2, Banner3]
    return List
  }
  return (
    <CarouselContainer
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
      transitionTime={1000}
    >
      {CarouselImages().map((src, index) => {
        return <Image alt={"Banner"} key={index} src={src} />
      })}
    </CarouselContainer>
  )
}

const CarouselContainer = styled(Carousel)`
  padding: 0;
  z-index: 1;
`

const Image = styled.img``

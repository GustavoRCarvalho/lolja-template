import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { BannnerCarousel } from "./BannerCarousel"
import Banner1 from "../../assets/images/FakeAPIImages/Banner/Banner1.png"
import Banner2 from "../../assets/images/FakeAPIImages/Banner/Banner2.png"
import Banner3 from "../../assets/images/FakeAPIImages/Banner/Banner3.png"
import { InfoHomeLine } from "./InfoHomeLine"

export const Home = () => {
  const CarouselImages = () => {
    const List = [Banner1, Banner2, Banner3]
    return List
  }

  return (
    <HomeContainer>
      <BannnerCarousel title={"Banner"} imagesList={CarouselImages()} />
      <InfoHomeLine />
      <ContentContainer>HOME</ContentContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
  background-color: #66c80d;

  display: flex;
  flex-direction: column;
  align-content: center;
`

import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { BannnerCarousel } from "./BannerCarousel"
import { InfoHomeLine } from "./InfoHomeLine"
import { SwiperCreators } from "./SwiperCreators"

export const Home = () => {
  return (
    <HomeContainer>
      <BannnerCarousel />
      <InfoHomeLine />
      <SwiperCreators />
      <ContentContainer>HOME</ContentContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
  background-color: #66c80d;

  display: flex;
  flex-direction: column;
  align-items: center;
`

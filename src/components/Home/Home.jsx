import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { BannnerCarousel } from "./BannerCarousel"
import { InfoHomeLine } from "./InfoHomeLine"
import { Creators } from "./Creators"

export const Home = () => {
  return (
    <HomeContainer>
      <BannnerCarousel />
      <InfoHomeLine />
      <Creators />
      <ContentContainer>HOME</ContentContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
`

import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { BannnerCarousel } from "./BannerCarousel"
import { InfoHomeLine } from "./InfoHomeLine"
import { ListCreators } from "../../assets/images/FakeAPIImages/Creators"
import { ListProducts } from "../../assets/images/FakeAPIImages/Catalog"
import { SwiperProducts } from "./SwiperProducts"
import { SwiperCreators } from "./SwiperCreators"
import { SwiperWrapper } from "./SwiperWrapper"

export const Home = () => {
  return (
    <HomeContainer>
      <BannnerCarousel />
      <InfoHomeLine />
      <ContentContainer>HOME</ContentContainer>
      <SwiperWrapper
        list={ListCreators}
        title={"Encontre os produtos de seus creators favoritos"}
        Swiper={SwiperCreators}
      />
      <SwiperWrapper
        list={ListProducts}
        title={"Lançamentos"}
        Swiper={SwiperProducts}
      />
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
`

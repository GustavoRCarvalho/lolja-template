import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { BannnerCarousel } from "./BannerCarousel"
import { InfoHomeLine } from "./InfoHomeLine"
import { ListCreators } from "../../assets/images/FakeAPIImages/Creators"
import { ListProducts } from "../../assets/images/FakeAPIImages/Catalog"
import { SwiperProducts } from "./SwiperProducts"
import { SwiperCreators } from "./SwiperCreators"
import { SwiperWrapper } from "./SwiperWrapper"
import { Poster } from "./Poster"
import poster from "../../assets/images/FakeAPIImages/Posters/DESTAQUEBLUSAO.png"

export const Home = () => {
  return (
    <HomeContainer>
      <BannnerCarousel />
      <InfoHomeLine />
      <SwiperWrapper
        list={ListCreators}
        title={"Encontre os produtos de seus creators favoritos"}
        Swiper={SwiperCreators}
      />
      <PosterProductsContainer>
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        <SwiperProducts content={ListProducts["old skull"]} />
      </PosterProductsContainer>
      <SwiperWrapper
        list={ListProducts}
        title={"Lançamentos"}
        Swiper={SwiperProducts}
      />
      <PosterContainer>
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
      </PosterContainer>
      <SwiperWrapper
        list={ListProducts}
        title={"Mais vendidos"}
        Swiper={SwiperProducts}
      />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const PosterProductsContainer = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 50% 50%;
`

const PosterContainer = styled(ContentContainer)`
  display: grid;
  justify-content: space-around;
  row-gap: 1%;
  grid-template-columns: 49% 49%;
  margin-bottom: 2rem;
`

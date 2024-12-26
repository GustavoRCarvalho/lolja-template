import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { BannnerCarousel } from "./BannerCarousel"
import { InfoHomeLine } from "./InfoHomeLine"
import { listCreators } from "../../assets/images/FakeAPIImages/Creators"
import { SwiperProducts } from "./SwiperProducts"
import { SwiperCreators } from "./SwiperCreators"
import { SwiperWrapper } from "./SwiperWrapper"
import { Poster } from "./Poster"
import poster from "../../assets/images/FakeAPIImages/Posters/DESTAQUEBLUSAO.png"
import { useEffect, useState } from "react"
import { creatorListCall } from "../../api/api"

export const Home = () => {
  const [swiperData, setSwiperData] = useState(null)

  useEffect(() => {
    setTimeout(async () => {
      setSwiperData(await creatorListCall())
    }, 100)
  }, [])

  return (
    <HomeContainer>
      <BannnerCarousel />
      <InfoHomeLine />
      <SwiperWrapper
        list={listCreators}
        title={"Encontre os produtos de seus creators favoritos"}
        Swiper={SwiperCreators}
      />
      <PosterProductsContainer>
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        {swiperData && <SwiperProducts content={swiperData["old skull"]} />}
      </PosterProductsContainer>
      {swiperData && (
        <SwiperWrapper
          list={swiperData}
          title={"Lançamentos"}
          Swiper={SwiperProducts}
        />
      )}
      <PosterContainer>
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
        <Poster srcPoster={poster} title={"Blusão Cinza"} />
      </PosterContainer>
      {swiperData && (
        <SwiperWrapper
          list={swiperData}
          title={"Mais vendidos"}
          Swiper={SwiperProducts}
        />
      )}
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

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`

const PosterContainer = styled(ContentContainer)`
  display: grid;
  justify-content: space-around;
  row-gap: 1%;
  grid-template-columns: 49% 49%;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    row-gap: 0;
  }
`

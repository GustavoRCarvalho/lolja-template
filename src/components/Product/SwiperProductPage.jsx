import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { ProductCard } from "../Catalog/ProductCard"
import { SwiperNavigation } from "../common/SwiperNavigation"
import { ContentContainer } from "../common/ContentLimit"
import { GrayBackground } from "../common/GrayBackground"

export const SwiperProductPage = ({ content = [] }) => {
  function productsList(list) {
    return list.map((product, index) => {
      return (
        <SwiperSlideComponent key={product.title + index}>
          <ProductCard product={product} />
        </SwiperSlideComponent>
      )
    })
  }

  return (
    <SwiperProductBackground>
      <ContentContainer>
        <SwiperProductTitle>VOCÊ TAMBÉM VAI GOSTAR...</SwiperProductTitle>
        <SwiperNavigation>{productsList(content)}</SwiperNavigation>
      </ContentContainer>
    </SwiperProductBackground>
  )
}

const SwiperSlideComponent = styled(SwiperSlide)`
  max-width: 300px;
`

const SwiperProductTitle = styled.h1`
  font-size: 2em;

  margin-bottom: 2em;
`

const SwiperProductBackground = styled(GrayBackground)`
  line-height: 1.6em;

  padding-block: 2em;
  margin-bottom: 2em;
`

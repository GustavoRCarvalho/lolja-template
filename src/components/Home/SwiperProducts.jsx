import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { SwiperNavigation } from "./SwiperNavigation"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { ProductCard } from "../Catalog/ProductCard"

export const SwiperProducts = ({ content = [] }) => {
  function productsList(list) {
    return list.map((product, index) => (
      <SwiperSlideComponent key={product.title + index}>
        <NoStyleLinkRouter to={`/${product.title}`}>
          <ProductCard product={product} />
        </NoStyleLinkRouter>
      </SwiperSlideComponent>
    ))
  }

  return <SwiperNavigation>{productsList(content)}</SwiperNavigation>
}

const SwiperSlideComponent = styled(SwiperSlide)`
  max-width: 140px;
`

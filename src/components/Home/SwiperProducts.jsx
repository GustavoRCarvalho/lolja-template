import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { SwiperNavigation } from "./SwiperNavigation"
import { ProductCard } from "../Catalog/ProductCard"

export const SwiperProducts = ({ content = [] }) => {
  function productsList(list) {
    return list.map((product, index) => {
      return (
        <SwiperSlideComponent key={product.title + index}>
          <ProductCard product={product} title={product.title} />
        </SwiperSlideComponent>
      )
    })
  }

  return <SwiperNavigation>{productsList(content)}</SwiperNavigation>
}

const SwiperSlideComponent = styled(SwiperSlide)`
  max-width: 300px;
`

import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { ProductCard } from "../Catalog/ProductCard"
import { SwiperNavigation } from "../common/SwiperNavigation"

export const SwiperProducts = ({ content = [] }) => {
  function productsList(list) {
    return list.map((product, index) => {
      return (
        <SwiperSlideComponent key={product.title + index}>
          <ProductCard product={product} />
        </SwiperSlideComponent>
      )
    })
  }

  return <SwiperNavigation>{productsList(content)}</SwiperNavigation>
}

const SwiperSlideComponent = styled(SwiperSlide)`
  max-width: 300px;
`

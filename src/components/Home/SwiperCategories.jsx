import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { ContentContainer } from "../common/ContentLimit"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar } from "swiper"

export const SwiperCategories = ({ categories = [] }) => {
  function creatorsList(list) {
    console.log(list)
    return list.map((category, index) => (
      <SwiperSlideComponent key={category + index}>
        <CreatorImage>{category}</CreatorImage>
      </SwiperSlideComponent>
    ))
  }

  return (
    <SwiperContainer>
      <SwiperComponent
        spaceBetween={"10px"}
        slidesPerView={"auto"}
        scrollbar={{
          clickable: true,
        }}
        modules={[Scrollbar]}
      >
        {creatorsList(categories)}
      </SwiperComponent>
    </SwiperContainer>
  )
}

const CreatorImage = styled.button`
  background-color: ${(props) => props.theme.mediumGray};
  border-radius: 0.2rem;
  font-size: 0.7;
  font-weight: 700;
  letter-spacing: 0.23em;
  text-align: center;
  text-transform: uppercase;
  width: max-content;
  padding: 0.2rem 0.8rem;
  border: none;
  cursor: pointer;
`

const SwiperContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
`

const SwiperComponent = styled(Swiper)`
  padding-bottom: 1rem;
`

const SwiperSlideComponent = styled(SwiperSlide)`
  width: auto !important;
`

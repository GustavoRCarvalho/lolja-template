import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { ContentContainer } from "../common/ContentLimit"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Swiper.css"

export const SwiperCreators = ({ creators = [] }) => {
  function creatorsList(list) {
    return list.map((creator, index) => (
      <SwiperSlideComponent key={creator + index}>
        <CreatorImage src={creator} />
      </SwiperSlideComponent>
    ))
  }

  return (
    <SwiperContainer>
      <SwiperComponent
        spaceBetween={"10px"}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {creatorsList(creators)}
      </SwiperComponent>
    </SwiperContainer>
  )
}

const CreatorImage = styled.img`
  border-radius: 50%;
  width: 100%;
  padding-block: 1rem;
`

const SwiperContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
`

const SwiperComponent = styled(Swiper)`
  padding-bottom: 2rem;
`

const SwiperSlideComponent = styled(SwiperSlide)`
  max-width: 140px;
`

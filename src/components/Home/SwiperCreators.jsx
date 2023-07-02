import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { SwiperNavigation } from "./SwiperNavigation"

export const SwiperCreators = ({ creators = [] }) => {
  function creatorsList(list) {
    return list.map(({ creator, name }, index) => (
      <SwiperSlideComponent key={name + index}>
        <NoStyleLinkRouter to={`/${name}`}>
          <CreatorImage src={creator} title={name} />
        </NoStyleLinkRouter>
      </SwiperSlideComponent>
    ))
  }

  return <SwiperNavigation>{creatorsList(creators)}</SwiperNavigation>
}

const SwiperSlideComponent = styled(SwiperSlide)`
  max-width: 140px;
`

const CreatorImage = styled.img`
  border-radius: 50%;
  width: 100%;
  padding-block: 1rem;
`

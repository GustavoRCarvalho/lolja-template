import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { SwiperNavigation } from "../common/SwiperNavigation"
export const SwiperCreators = ({ content = [] }) => {
  function creatorsList(list) {
    return list.map(({ creator, name }, index) => (
      <SwiperSlideComponent key={name + index}>
        <NoStyleLinkRouter to={`/${name}`}>
          <CreatorImage src={creator} title={name} />
        </NoStyleLinkRouter>
      </SwiperSlideComponent>
    ))
  }

  return <SwiperNavigation>{creatorsList(content)}</SwiperNavigation>
}

const SwiperSlideComponent = styled(SwiperSlide)`
  max-width: 140px;
  width: 30%;
  min-width: 105px;
`

const CreatorImage = styled.img`
  border-radius: 50%;
  width: 100%;
  padding-block: 1rem;
`

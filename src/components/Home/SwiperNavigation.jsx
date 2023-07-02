import styled from "styled-components"
import { Swiper } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Swiper.css"
import { useRef } from "react"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

export const SwiperNavigation = ({ children }) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <SwiperWrapper>
      <SwiperComponent
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        spaceBetween={"10px"}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {children}
      </SwiperComponent>
      <SwiperButton ref={navigationPrevRef}>
        <LeftIcon />
      </SwiperButton>
      <SwiperButton right={0} ref={navigationNextRef}>
        <RightIcon />
      </SwiperButton>
    </SwiperWrapper>
  )
}

const SwiperWrapper = styled.div`
  position: relative;
`

const SwiperComponent = styled(Swiper)`
  margin-inline: 40px;
  padding-bottom: 2rem;
`

const SwiperButton = styled.button`
  background-color: #0000;
  border: none;
  position: absolute;
  top: 37%;
  right: ${(props) => props.right ?? "auto"};
  cursor: pointer;
  padding: 0;
`

const RightIcon = styled(FaCaretRight)`
  width: 1.8em;
  height: 2em;
`

const LeftIcon = styled(FaCaretLeft)`
  width: 1.8em;
  height: 2em;
`

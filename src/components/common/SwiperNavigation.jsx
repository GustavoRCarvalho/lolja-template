import styled from "styled-components"
import { Swiper } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useRef } from "react"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"
import { useCallback } from "react"

export const SwiperNavigation = ({ children, slidesPerView = "auto" }) => {
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <SwiperWrapper>
      <SwiperComponent
        ref={sliderRef}
        onInit={(swiper) => {
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        spaceBetween={"10px"}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {children}
      </SwiperComponent>
      <SwiperButton title="navPrev" left={0} onClick={handlePrev}>
        <LeftIcon />
      </SwiperButton>
      <SwiperButton title="navNext" right={0} onClick={handleNext}>
        <RightIcon />
      </SwiperButton>
    </SwiperWrapper>
  )
}

const SwiperWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
`

const SwiperComponent = styled(Swiper)`
  margin-inline: 40px;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    margin-inline: 0;
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    background: var(--orange);
    opacity: 1;
    width: 4px;
    height: 4px;
  }
  .swiper-pagination-bullet-active {
    background: var(--orange);
    width: 10px;
    height: 10px;
  }
`

const SwiperButton = styled.button`
  background-color: #0000;
  border: none;
  position: absolute;
  top: 37%;
  right: ${(props) => props.right ?? "auto"};
  left: ${(props) => props.left ?? "auto"};
  cursor: pointer;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const RightIcon = styled(FaCaretRight)`
  width: 1.8em;
  height: 2em;
`

const LeftIcon = styled(FaCaretLeft)`
  width: 1.8em;
  height: 2em;
`

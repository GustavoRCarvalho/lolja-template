import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar } from "swiper"
import { ContentContainer } from "../common/ContentLimit"

export const SwiperCategories = ({
  categories = [],
  category,
  setCategory,
}) => {
  function categoriesList(obj) {
    const categories = Object.keys(obj)

    return categories.map((categoryLabel, index) => (
      <SwiperSlideComponent key={categoryLabel + index}>
        <CategoryButton
          active={categoryLabel === category}
          onClick={() => setCategory(categoryLabel)}
        >
          {categoryLabel}
        </CategoryButton>
      </SwiperSlideComponent>
    ))
  }

  return (
    <CategoriesContainer>
      <SwiperComponent
        spaceBetween={"10px"}
        slidesPerView={"auto"}
        scrollbar={{
          clickable: true,
        }}
        modules={[Scrollbar]}
      >
        {categoriesList(categories)}
      </SwiperComponent>
    </CategoriesContainer>
  )
}

const CategoryButton = styled.button`
  background-color: var(--mediumGray);
  border-radius: 0.2rem;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.23em;
  text-align: center;
  text-transform: uppercase;
  width: max-content;
  padding: 0.2rem 0.8rem;
  border: none;
  cursor: pointer;

  border: ${(props) => props.active && "2px solid black"};
`

const SwiperComponent = styled(Swiper)`
  .swiper-wrapper {
    align-items: center;
  }

  padding-bottom: 1rem;
`

const SwiperSlideComponent = styled(SwiperSlide)`
  width: auto !important;
`

const CategoriesContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

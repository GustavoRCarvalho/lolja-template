import styled from "styled-components"
import { SwiperCategories } from "./SwiperCategories"
import { useState } from "react"
import { ContentContainer } from "../common/ContentLimit"

export const SwiperWrapper = ({ list, title, Swiper }) => {
  const firtsCategory = Object.keys(list)[0]
  const [category, setCategory] = useState(firtsCategory)

  return (
    <WrapperContainer>
      <WrapperTitle>{title}</WrapperTitle>
      <SwiperCategories
        categories={list}
        category={category}
        setCategory={setCategory}
      />
      <Swiper content={list[category]} />
    </WrapperContainer>
  )
}

const WrapperTitle = styled.h1`
  text-align: center;
`

const WrapperContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

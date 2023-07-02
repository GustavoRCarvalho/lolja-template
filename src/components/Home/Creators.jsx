import { SwiperCreators } from "./SwiperCreators"
import styled from "styled-components"
import { SwiperCategories } from "./SwiperCategories"
import { useState } from "react"
import { ContentContainer } from "../common/ContentLimit"
import { ListCategories } from "../../assets/images/FakeAPIImages/Creators"

export const Creators = () => {
  const firtsCategory = Object.keys(ListCategories)[0]
  const [category, setCategory] = useState(firtsCategory)

  return (
    <CreatorsContainer>
      <CreatorsTitle>
        Encontre os produtos de seus creators favoritos
      </CreatorsTitle>
      <SwiperCategories
        categories={ListCategories}
        category={category}
        setCategory={setCategory}
      />
      <SwiperCreators creators={ListCategories[category]} />
    </CreatorsContainer>
  )
}

const CreatorsTitle = styled.h1`
  text-align: center;
`

const CreatorsContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

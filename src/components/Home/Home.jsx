import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"

export const Home = () => {
  return (
    <HomeContainer>
      <ContentContainer>HOME</ContentContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
  background-color: #66c80d;

  display: flex;
  justify-content: center;
`

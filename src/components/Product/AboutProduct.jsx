import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { GrayBackground } from "../common/GrayBackground"

export const AboutProduct = ({ about }) => {
  return (
    <GrayBackground>
      <AboutContainer>
        <AboutText>{about}</AboutText>
      </AboutContainer>
    </GrayBackground>
  )
}

const AboutText = styled.p`
  width: 60em;
`
const AboutContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
`

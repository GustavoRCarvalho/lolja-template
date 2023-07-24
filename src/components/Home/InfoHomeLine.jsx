import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { AiFillCreditCard, AiFillYoutube } from "react-icons/ai"
import { FaTruckFast } from "react-icons/fa6"
import { GrayBackground } from "../common/GrayBackground"

export const InfoHomeLine = () => {
  return (
    <InfoBackground>
      <InfoContainer>
        <InfoItem>
          <IconCard />
          PARCELAMENTO EM ATÉ 6X SEM JUROS
        </InfoItem>
        <InfoItem>
          <IconTruck />
          ENTREGA PARA TODO O BRASIL
        </InfoItem>
        <InfoItem>
          <IconYoutube />
          LOJA OFICIAL DO YOUTUBE
        </InfoItem>
      </InfoContainer>
    </InfoBackground>
  )
}

const InfoBackground = styled(GrayBackground)`
  padding-block: 1rem;
`

const InfoContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;

  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin-inline: 1rem;
`

const IconCard = styled(AiFillCreditCard)`
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1.5rem;
`
const IconYoutube = styled(AiFillYoutube)`
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1.5rem;
`
const IconTruck = styled(FaTruckFast)`
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1.5rem;
`

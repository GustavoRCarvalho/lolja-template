import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { AiFillCreditCard, AiFillYoutube } from "react-icons/ai"
import { FaTruckFast } from "react-icons/fa6"

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

const InfoBackground = styled.section`
  background-color: ${(props) => props.theme.mediumGray};
  width: 100%;
  padding-block: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;

  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.15em;
`

const IconCard = styled(AiFillCreditCard)`
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1.5rem;

  cursor: pointer;
`
const IconYoutube = styled(AiFillYoutube)`
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1.5rem;

  cursor: pointer;
`
const IconTruck = styled(FaTruckFast)`
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1.5rem;

  cursor: pointer;
`

import styled from "styled-components"
import { FooterContainer } from "./FooterContainer"
import { FooterText } from "./FooterText"
import visa from "../../assets/images/formasDePagamento/visa.svg"
import paypal from "../../assets/images/formasDePagamento/paypal.svg"
import american from "../../assets/images/formasDePagamento/american-express.svg"
import boleto from "../../assets/images/formasDePagamento/boleto.svg"
import mastercard from "../../assets/images/formasDePagamento/mastercard.svg"
import elo from "../../assets/images/formasDePagamento/elo.svg"

const Container = styled(FooterContainer)`
  border-bottom: 1px solid #c7c7c7;
`

const Background = styled.div`
  width: 100%;

  background-color: #ececec;

  display: flex;
  align-items: center;

  flex-direction: column;
`

const PaymentImage = styled.img`
  margin: 0.5rem 1rem 0 0;
`

export const PaymentMethods = () => {
  return (
    <Background>
      <Container>
        <FooterText color="#666">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </FooterText>
      </Container>
      <FooterContainer>
        <FooterText color="#666">
          Formas de pagamento
          <br />
          <PaymentImage src={mastercard} alt="mastercard" />
          <PaymentImage src={elo} alt="elo" />
          <PaymentImage src={boleto} alt="boleto" />
          <PaymentImage src={american} alt="american" />
          <PaymentImage src={visa} alt="visa" />
          <PaymentImage src={paypal} alt="paypal" />
        </FooterText>
      </FooterContainer>
    </Background>
  )
}

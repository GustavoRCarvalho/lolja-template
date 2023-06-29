import styled from "styled-components"
import Contact from "./Contact"
import DevelopBy from "./DevelopBy"
import PaymentMethods from "./PaymentMethods"

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: auto;
`

export default function FooterPage(props) {
  return (
    <Footer>
      <PaymentMethods />
      <Contact />
      <DevelopBy />
    </Footer>
  )
}

import styled from "styled-components"
import { FooterContainer } from "./FooterContainer"
import { FooterText } from "./FooterText"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { FooterContainerBackground } from "./FooterBackground"

const IconLinkedin = styled(AiOutlineLinkedin)`
  height: 2rem;
  width: 2rem;
`

const IconGitHub = styled(AiOutlineGithub)`
  height: 2rem;
  width: 2rem;
`

export default function Contact() {
  return (
    <FooterContainerBackground color="#e0e0e0">
      <FooterContainer>
        <FooterText color="#666">LOGO</FooterText>
        <div>
          <FooterText color="#666">
            EMPRESA SA - CNPJ 0000.0000.0000-00
          </FooterText>
          <FooterText color="#666">
            Av Endereço False, 0000 - Cidade/CD - CEP: 00000-000
          </FooterText>
        </div>
        <div>
          <FooterText color="#666">WhatsApp: (00) 0000.0000</FooterText>
          <FooterText color="#666">Seg à sexta das 08h às 17h.</FooterText>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/gustavo-carvalho-0/">
            <IconLinkedin color="#666" />
          </a>
          <a href="https://github.com/GustavoRCarvalho">
            <IconGitHub color="#666" />
          </a>
        </div>
      </FooterContainer>
    </FooterContainerBackground>
  )
}

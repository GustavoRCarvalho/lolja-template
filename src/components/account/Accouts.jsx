import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { LoginAccount } from "./LoginAccount"

export const Accounts = () => {
  return (
    <ContentContainer>
      <AccountTitle>Conecte-se aqui</AccountTitle>
      <CardWrapper>
        <LoginAccount />
        <CardContainer>
          <CardTitle>Não possui cadastro</CardTitle>
          <span>Clique no botão abaixo e cadastre-se.</span>
          <CardButton>Criar Conta</CardButton>
        </CardContainer>
      </CardWrapper>
    </ContentContainer>
  )
}

const AccountTitle = styled.h1`
  font-size: 2em;
  text-align: center;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    grid-template-columns: 1fr;
  }

  margin-block: 2em;
`

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.mediumGray};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-inline: 1em;
  padding-block: 2em;

  border-radius: 1em;

  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    padding-block: 0;
  }
`

const CardTitle = styled.h2`
  font-size: 1.5em;
`

const CardButton = styled.button`
  background-color: ${(props) => props.theme.orange};
  color: white;

  width: 10em;

  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;

  border: none;
  border-radius: 1em;

  margin-inline: 3em;
  margin-block: 1.5em;
  padding-block: 1em;

  cursor: pointer;
  transition: background-color 250ms;

  :hover {
    background-color: ${(props) => props.theme.green};
  }

  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    width: 50%;
  }
`

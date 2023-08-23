import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { LoginAccount } from "./LoginAccount"
import { CreateAccount } from "./CreateAccount"

export const Accounts = () => {
  return (
    <ContentContainer>
      <AccountTitle>Conecte-se aqui</AccountTitle>
      <CardWrapper>
        <LoginAccount />
        <CreateAccount />
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

import { useState } from "react"
import {
  BackButton,
  CardButton,
  CardContainer,
  CardInput,
  CardTitle,
} from "./CardCommon"

export const LoginAccount = () => {
  const [isActive, setIsActive] = useState(false)

  function handleClick(e) {
    e.preventDefault()

    if (isActive) {
    } else {
      setIsActive(true)
    }
  }

  return (
    <CardContainer>
      <CardTitle>{isActive ? "Já sou cliente" : "Já tem uma conta?"}</CardTitle>
      {isActive ? (
        <>
          <CardInput title={"E-mail"} width={"100%"} />
          <CardInput title={"Senha"} width={"100%"} />
        </>
      ) : (
        <span>
          Clique no botão abaixo e faça o login para acessar sua conta.
        </span>
      )}
      <CardButton type="submit" onClick={handleClick}>
        Entrar
      </CardButton>
      {isActive && (
        <BackButton onClick={() => setIsActive(false)}>Voltar</BackButton>
      )}
    </CardContainer>
  )
}

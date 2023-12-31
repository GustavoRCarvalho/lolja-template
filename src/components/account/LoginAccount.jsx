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
  const [form, setForm] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

    if (isActive) {
      console.log(form)
      Object.keys(form).forEach((field) => {
        setForm((state) => {
          if (state[field].value === "") {
            return {
              ...state,
              [field]: { value: state[field].value, error: true },
            }
          } else {
            return {
              ...state,
              [field]: { value: state[field].value, error: false },
            }
          }
        })
      })
    } else {
      setIsActive(true)
    }
  }

  return (
    <CardContainer onSubmit={handleSubmit}>
      <CardTitle>{isActive ? "Já sou cliente" : "Já tem uma conta?"}</CardTitle>
      {isActive ? (
        <>
          <CardInput
            name={"email"}
            type={"email"}
            value={form.email?.value}
            setForm={setForm}
            error={form.email?.error}
            title={"E-mail"}
            width={"100%"}
          />
          <CardInput
            name={"password"}
            type={"password"}
            value={form.password?.value}
            setForm={setForm}
            error={form.password?.error}
            title={"Senha"}
            width={"100%"}
          />
        </>
      ) : (
        <span>
          Clique no botão abaixo e faça o login para acessar sua conta.
        </span>
      )}
      <CardButton type="submit">Entrar</CardButton>
      {isActive && (
        <BackButton onClick={() => setIsActive(false)}>Voltar</BackButton>
      )}
    </CardContainer>
  )
}

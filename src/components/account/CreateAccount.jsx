import { useState } from "react"
import {
  BackButton,
  CardButton,
  CardContainer,
  CardInput,
  CardTitle,
  CreateAccountInputsWrapper,
} from "./CardCommon"

export const CreateAccount = () => {
  const [isActive, setIsActive] = useState(false)
  const [form, setForm] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

    if (isActive && JSON.stringify(form) !== "{}") {
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
      <CardTitle>
        {isActive ? "Ainda não tenho cadastro" : "Não possui cadastro?"}
      </CardTitle>
      {isActive ? (
        <CreateAccountInputsWrapper>
          <CardInput
            name={"firstName"}
            type={"text"}
            value={form.firstName?.value}
            setForm={setForm}
            error={form.firstName?.error}
            title={"Nome"}
            width={"40%"}
          />
          <CardInput
            name={"lastName"}
            type={"text"}
            value={form.lastName?.value}
            setForm={setForm}
            error={form.lastName?.error}
            title={"Sobrenome"}
            width={"40%"}
          />
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
            width={"40%"}
          />
          <CardInput
            name={"passwordConfirm"}
            type={"password"}
            value={form.passwordConfirm?.value}
            setForm={setForm}
            error={form.passwordConfirm?.error}
            title={"Confirme Senha"}
            width={"40%"}
          />
        </CreateAccountInputsWrapper>
      ) : (
        <span>Clique no botão abaixo e cadastre-se.</span>
      )}
      <CardButton type="submit">Criar Conta</CardButton>
      {isActive && (
        <BackButton onClick={() => setIsActive(false)}>Voltar</BackButton>
      )}
    </CardContainer>
  )
}

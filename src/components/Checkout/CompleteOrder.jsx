import styled from "styled-components"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"

export const CompleteOrder = () => {
  return (
    <Container>
      <LabelContinue to="/">Continuar comprando</LabelContinue>
      <CompleteButton>Finalizar Pedido</CompleteButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CompleteButton = styled.button`
  background-color: var(--orange);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;

  padding: 1em 2em;

  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.2em;

  border-radius: 1.25em;
  border: none;

  :hover {
    background-color: var(--green);
  }

  &:disabled {
    background-color: #ddd;
    cursor: default;
  }

  transition: background-color 100ms;
`

const LabelContinue = styled(NoStyleLinkRouter)`
  color: #949494;

  text-decoration-line: underline;

  :hover {
    color: var(--orange);
  }

  cursor: pointer;
`

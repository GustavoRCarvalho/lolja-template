import styled from "styled-components"
import { moneyFormat } from "../common/MoneyFormat"
import { useDispatch } from "react-redux"
import { switchCartModal } from "../../store/modalSlice"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { useNavigate } from "react-router-dom"

export const CartFinal = ({ list }) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  function totalPrice(list) {
    let total = 0
    list.forEach(({ salePrice, quantity }) => {
      total += salePrice * quantity
    })
    return moneyFormat(total)
  }
  function totalInstallment(list) {
    let total = 0
    list.forEach(({ salePrice, quantity }) => {
      total += salePrice * quantity
    })
    return moneyFormat(total / 6)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(switchCartModal())
    navigate("/checkout")
  }
  return (
    <>
      <FinalLine>
        <LabelTotal>Subtotal</LabelTotal>
        <PriceTotal>
          <LabelTotal>{totalPrice(list)}</LabelTotal>{" "}
          <LabelInstallment>ou 6x de {totalInstallment(list)}</LabelInstallment>
        </PriceTotal>
      </FinalLine>
      <FinalLink>
        <FinalButton onClick={handleSubmit}>
          <LabelTotal>Finalizar pedido </LabelTotal>
          <LabelTotal>{totalPrice(list)}</LabelTotal>
        </FinalButton>
      </FinalLink>
      <LabelContinue onClick={() => dispatch(switchCartModal())}>
        Continuar comprando
      </LabelContinue>
    </>
  )
}

const LabelContinue = styled.span`
  color: #949494;

  text-decoration-line: underline;

  cursor: pointer;
`
const FinalLink = styled(NoStyleLinkRouter)`
  width: 100%;
  margin-block: 0.5em;
`

const FinalButton = styled.button`
  background-color: var(--orange);
  color: #fff;

  display: flex;
  justify-content: space-between;
  width: 100%;

  border: none;
  border-radius: 1.2em;
  letter-spacing: 0.05em;

  padding: 1em;

  line-height: 1.3em;
  text-transform: uppercase;

  cursor: pointer;
`

const FinalLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-block: 0.5em;
`

const PriceTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LabelTotal = styled.span`
  font-weight: bold;
`
const LabelInstallment = styled.span`
  font-size: 0.8em;
  font-weight: bold;
  color: #949494;
`

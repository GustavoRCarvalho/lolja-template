import { useEffect, useState } from "react"
import styled from "styled-components"
import { moneyFormat } from "../common/MoneyFormat"
import { Cupom } from "./Cupom"
import { Ship } from "./Ship"

const initialTotal = {
  sub: 0,
  installmentsPrice: 0,
  final: 0,
}

export const OrderResume = ({ products }) => {
  const [totals, setTotals] = useState(initialTotal)

  useEffect(() => {
    let { sub, installmentsPrice, final } = initialTotal

    setTotals(() => {
      products.forEach((product) => {
        sub += product.salePrice * product.quantity
        installmentsPrice += product.installmentsPrice * product.quantity
        final += product.salePrice * product.quantity
      })
      return { sub: sub, installmentsPrice: installmentsPrice, final: final }
    })
  }, [products])

  return (
    <ResumeWrapper>
      <TitleText>Resumo do pedido</TitleText>
      <span>Seu pedido vai gerar cashback!</span>
      <CashbackLine />
      <SpacedLine>
        <span>Subtotal do pedido</span>
        <span>{moneyFormat(totals?.sub)}</span>
      </SpacedLine>
      <Ship />
      <Cupom setTotal={setTotals} />
      <TotalLine>
        <span>Total:</span>
        <div>
          <span>{moneyFormat(totals?.final)}</span>
          <span>
            Em até 6x de{" "}
            <strong>{moneyFormat(totals?.installmentsPrice)}</strong>
          </span>
        </div>
      </TotalLine>
    </ResumeWrapper>
  )
}

export const ResumeInput = styled.input`
  padding: 0.5em;

  outline: none;
  border: 1px solid;
  border-color: ${(props) => (props.$error ? "red" : "#d8d8d8")};
  color: ${(props) => (props.$error ? "red" : "unset")};
  &::placeholder {
    color: ${(props) => (props.$error ? "red" : "unset")};
  }

  &:focus {
    border-color: var(--orange);
  }
`

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const TotalLine = styled.div`
  display: flex;
  justify-content: space-between;

  padding-block: 2em;

  span {
    display: block;
    text-align: end;

    font-weight: 600;
    &:nth-last-child(1) {
      font-weight: 500;
    }
  }
`

const CashbackLine = styled.div`
  background-color: var(--orange);

  width: 100%;
  height: 1em;

  margin-top: 0.2em;
`

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleText = styled.h2`
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: 0.06em;
`

const SpacedLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1em;

  color: #5a5a5a;
  span:nth-child(1) {
    font-weight: 600;
  }

  border-bottom: 1px solid #e4e4e4;
`

export const SpacedLineVert = styled(SpacedLine)`
  flex-direction: column;
  gap: 1em;
`

export const ClicableSpan = styled.span`
  text-decoration: ${(props) => props.$textDecoration ?? "unset"};

  cursor: pointer;

  &:hover {
    color: var(--orange);
  }
`

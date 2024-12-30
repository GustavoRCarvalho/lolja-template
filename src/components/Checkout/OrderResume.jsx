import { useEffect, useState } from "react"
import styled from "styled-components"
import { moneyFormat } from "../common/MoneyFormat"

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
        final += product.salePrice * product.quantity //mult. by desc
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
      <SpacedLine>
        <span>Entrega</span>
        <UnderlineSpan>Calcular</UnderlineSpan>
      </SpacedLine>
      <SpacedLine>
        <span>Cupom de desconto</span>
        <UnderlineSpan>Adicionar</UnderlineSpan>
      </SpacedLine>
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

const UnderlineSpan = styled.span`
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    color: var(--orange);
  }
`

import styled from "styled-components"
import { moneyFormat } from "../common/MoneyFormat"

export const Price = ({ product }) => {
  return (
    <PriceContainer>
      <PriceWrapper>
        <PriceOriginal>DE:</PriceOriginal>
        <PriceOriginal textDecoration={"line-through"}>
          {moneyFormat(product.price)}
        </PriceOriginal>
        <PriceSaleLabel>POR:</PriceSaleLabel>
        <PriceSale>{moneyFormat(product.salePrice)}</PriceSale>
        {product.installmentsPrice && (
          <PriceInstallment>
            {product.installmentsPrice[0]}x de{" "}
            {moneyFormat(product.installmentsPrice[1])} sem juros
          </PriceInstallment>
        )}
      </PriceWrapper>
      <SalePorcent>{product.salePorcent}</SalePorcent>
    </PriceContainer>
  )
}

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-block: 2em;
`

const PriceWrapper = styled.p`
  display: grid;
  gap: 0.5rem;
  grid-template-areas:
    "original-prefix original-price"
    "sale-prefix sale-price"
    "installments installments";
  grid-template-columns: min-content 2fr;
  align-items: center;
  margin: 0;
`

const PriceSaleLabel = styled.span`
  font-size: 1.2em;
  color: #000;
  font-weight: bold;

  width: 100%;
`

const PriceSale = styled.span`
  font-size: 1.7em;
  color: #000;
  font-weight: bold;

  width: 100%;
`

const PriceOriginal = styled.span`
  font-size: 1em;
  color: #828282;
  text-decoration: ${(props) => props.textDecoration ?? "none"};

  width: 100%;
`

const PriceInstallment = styled.span`
  grid-area: installments;
  font-size: 0.9em;
  font-weight: bold;
  color: #000;

  width: 100%;
`

const SalePorcent = styled.div`
  background-color: #00b081;
  color: #fff;
  font-size: 0.8em;

  padding: 0.4rem;
  margin: 0.4rem;
  border-radius: 0.5em;
`

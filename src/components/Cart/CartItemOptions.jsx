import styled from "styled-components"
import { moneyFormat } from "../common/MoneyFormat"

export const CartItemOptions = ({ product }) => {
  return (
    <ItemOptions>
      {product.size} - {product.gender} - {product.color}
      <ItemPrices>
        <Price>{moneyFormat(product.price)}</Price>
        <SalePrice>{moneyFormat(product.salePrice)}</SalePrice>
      </ItemPrices>
    </ItemOptions>
  )
}
const ItemOptions = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.9em;
  color: #9ca3af;

  margin: 0;
`

const ItemPrices = styled.div`
  display: flex;
  flex-direction: column;
`

const Price = styled.span`
  text-decoration: line-through;
`
const SalePrice = styled.span`
  color: #000;

  font-size: 1rem;
  font-weight: bold;
`

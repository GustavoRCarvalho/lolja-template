import styled from "styled-components"
import { CartItemActions } from "./CartItemActions"
import { CartItemOptions } from "./CartItemOptions"

export const CartItem = ({ product }) => {
  return (
    <ItemContainer>
      <ItemImage src={product.image} />
      <ItemInfoWrapper>
        <ItemTitle>{product.title}</ItemTitle>
        <CartItemOptions product={product} />
        <CartItemActions product={product} />
      </ItemInfoWrapper>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  background-color: #fff;
  border-radius: 0.2em;
  overflow: hidden;

  display: flex;
  flex: 1;

  :not(:first-child) {
    margin-top: 1em;
  }
`

const ItemImage = styled.img`
  width: 7em;
  height: 9em;
  object-fit: cover;
`

const ItemInfoWrapper = styled.div`
  flex: 1;

  margin: 1em;
`

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 1em;
`

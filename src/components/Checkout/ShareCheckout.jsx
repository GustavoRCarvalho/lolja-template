import styled from "styled-components"
import { IoMdShare } from "react-icons/io"

export const ShareCheckout = () => {
  return (
    <ShareContainer>
      <CheckoutText>Checkout</CheckoutText>
      <ShareLinkText
        onClick={() => {
          //compartilhar
        }}
      >
        <IoMdShare />
        <span>Compartilhar carrinho</span>
      </ShareLinkText>
    </ShareContainer>
  )
}

const ShareContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-block: 1em;
`

const CheckoutText = styled.span`
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: 0.06em;
`

const ShareLinkText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;

  :hover {
    color: var(--orange);
  }
  svg {
    width: 1em;
    height: 1em;
  }
  span {
    text-decoration: underline;
  }

  cursor: pointer;
`

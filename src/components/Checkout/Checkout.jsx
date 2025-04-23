import styled from "styled-components"
import { Logo } from "../Header/Logo"
import { ShareCheckout } from "./ShareCheckout"
import { CompleteOrder } from "./CompleteOrder"
import { ProductCheckout } from "./ProductCheckout"
import { OrderResume } from "./OrderResume"
import { useSelector } from "react-redux"

export const Checkout = () => {
  const { listCart } = useSelector((state) => state.cart)
  const cartProducts = [...listCart.values()]

  return (
    <Container>
      <OrderWrapper>
        <Logo />
        <ShareCheckout />
        <ProductsWrapper>
          <ProductCheckout products={cartProducts} />
        </ProductsWrapper>
        <CompleteOrder />
      </OrderWrapper>
      <PriceBackground>
        <PriceWrapper>
          <OrderResume products={cartProducts} />
        </PriceWrapper>
      </PriceBackground>
    </Container>
  )
}

const Container = styled.section`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  justify-content: end;
`

const PriceBackground = styled.div`
  background-color: #f7f7f7;
  width: 40%;
  height: 100%;
`

const PriceWrapper = styled.div`
  width: calc(100% - 2em);
  max-width: calc(1280px * 0.4);

  padding: 1em;
  margin-left: 2em;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
`

const OrderWrapper = styled.div`
  width: calc(60% - 2em);
  max-width: calc(1280px * 0.6 - 2em);
  height: calc(100% - 2em);

  padding: 1em;
  margin-right: 2em;

  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    margin-right: 0;
  }
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  height: 100%;

  overflow: hidden scroll;
  padding-right: 1em;

  ::-webkit-scrollbar {
    width: 3px;
    padding: 1em;
    margin: 1em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #cecece;
    border: 0;
    border-radius: 10px;
  }
`

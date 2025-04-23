import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { CartItem } from "./CartItem"
import { CloseModalButton } from "../common/CloseModalButton"
import { switchCartModal } from "../../store/modalSlice"
import { CartFinal } from "./CartFinal"

export const Cart = () => {
  const dispatch = useDispatch()
  const { listCart } = useSelector((state) => state.cart)
  const cartProducts = [...listCart.values()]

  const quantityCartItems = (list) => {
    if (list.length === 1 && list[0].quantity === 1) {
      return `1 item`
    }

    let totalQuantity = 0

    list.forEach(({ quantity }) => {
      totalQuantity += quantity
    })
    return `${totalQuantity} itens`
  }

  return (
    <Modal>
      <TitleWrapper>
        <CartTitle>
          Carrinho de compras{" "}
          <CartQuantity>({quantityCartItems(cartProducts)})</CartQuantity>
        </CartTitle>
        <CloseModalButton onClick={() => dispatch(switchCartModal())} />
      </TitleWrapper>
      <CartContainer>
        {cartProducts.length !== 0 ? (
          cartProducts.map((product, index) => {
            return <CartItem key={product.title + index} product={product} />
          })
        ) : (
          <CartEmpty>Seu carrinho está vazio</CartEmpty>
        )}
      </CartContainer>
      {cartProducts.length !== 0 && (
        <FinalWrapper>
          <CartFinal list={cartProducts} />
        </FinalWrapper>
      )}
    </Modal>
  )
}

const Modal = styled.div`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 30rem;

  color: #141414;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const TitleWrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;

  padding: 0.5em 1em;
`

const FinalWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5em 1em;
`

const CartTitle = styled.p`
  flex: 1;

  font-size: 1em;
  text-align: center;
  font-weight: bold;

  margin: 0em;
`

const CartQuantity = styled.span`
  color: #9ca3af;
`

const CartEmpty = styled.span`
  display: block;
  text-align: center;
  width: 100%;

  font-weight: bold;
  color: #9ca3af;
`

const CartContainer = styled.div`
  height: 100%;
  padding: 1em;

  align-items: center;
  overflow-y: scroll;
  overscroll-behavior: contain;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #777;
    border: 0;
    border-radius: 10px;
  }
`

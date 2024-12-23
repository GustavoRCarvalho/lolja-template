import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { CartItem } from "./CartItem"
import { CloseModalButton } from "../common/CloseModalButton"
import { switchCartModal } from "../../store/modalSlice"
import { CartFinal } from "./CartFinal"
import { useCookies } from "react-cookie"
import { useEffect } from "react"
import { setInitialCart } from "../../store/cartSlice"
import { useMemo } from "react"

export const Cart = () => {
  const [cookies, setCookies] = useCookies("cart")
  const dispatch = useDispatch()
  const { listCart } = useSelector((state) => state.cart)
  const cartData = useMemo(() => {
    if (JSON.stringify(listCart) === "[]") {
      return cookies.cart ?? []
    } else {
      return listCart
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies.cart])

  function quantityCartItems(list) {
    let totalQuantity = 0
    list.forEach(({ quantity }) => {
      totalQuantity += quantity
    })

    if (totalQuantity === 1) {
      return `${totalQuantity} item`
    } else {
      return `${totalQuantity} itens`
    }
  }

  useEffect(() => {
    if (cookies.cart !== undefined) {
      dispatch(setInitialCart(cartData))
    } else {
      setCookies("cart", [])
    }
  }, [cookies.cart, dispatch, cartData, setCookies])

  useEffect(() => {
    setCookies("cart", listCart)
  }, [listCart, setCookies])

  return (
    <Modal>
      <TitleWrapper>
        <CartTitle>
          Carrinho de compras{" "}
          <CartQuantity>({quantityCartItems(listCart)})</CartQuantity>
        </CartTitle>
        <CloseModalButton onClick={() => dispatch(switchCartModal())} />
      </TitleWrapper>
      <CartContainer>
        {listCart.length !== 0 ? (
          listCart.map((product, index) => {
            return <CartItem key={product.title + index} product={product} />
          })
        ) : (
          <CartEmpty>Seu carrinho está vazio</CartEmpty>
        )}
      </CartContainer>
      {listCart.length !== 0 && (
        <FinalWrapper>
          <CartFinal list={listCart} />
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

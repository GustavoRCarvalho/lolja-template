import { useLocation } from "react-router-dom"
import Content from "./Content"
import Modals from "./Modals"
import FooterPage from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { setInitialCart } from "../store/cartSlice"

export const ElementsController = () => {
  const location = useLocation()

  const isCheckoutRoute = location.pathname === "/checkout"

  const dispatch = useDispatch()
  const { listCart } = useSelector((state) => state.cart)

  useEffect(() => {
    if (listCart.size) return
    try {
      const cart = JSON.parse(localStorage.getItem("cart"))
      dispatch(setInitialCart(cart))
    } catch {
      null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify([...listCart.values()]))
    } catch {
      try {
        localStorage.clear()
      } catch {
        null
      }
    }
  }, [listCart])

  return (
    <>
      {!isCheckoutRoute && <Header />}
      <Content />
      {!isCheckoutRoute && <FooterPage />}
      <Modals />
    </>
  )
}

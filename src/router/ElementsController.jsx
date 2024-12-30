import { useLocation } from "react-router-dom"
import Content from "./Content"
import Modals from "./Modals"
import FooterPage from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

export const ElementsController = () => {
  const location = useLocation()

  const isCheckoutRoute = location.pathname === "/checkout"

  return (
    <>
      {!isCheckoutRoute && <Header />}
      <Content />
      {!isCheckoutRoute && <FooterPage />}
      <Modals />
    </>
  )
}

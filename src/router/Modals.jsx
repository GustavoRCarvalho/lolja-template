import { useSelector } from "react-redux"
import { CartModal } from "../components/Cart/CartModal"
// import { Cart } from "../Pages"

export default function Modals() {
  const { cartModal } = useSelector((state) => state.modal)

  return <>{cartModal ? <CartModal /> : null}</>
}

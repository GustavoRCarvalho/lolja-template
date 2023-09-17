import { useSelector } from "react-redux"
import { CartModal } from "../components/Cart/CartModal"
import { FilterModal } from "../components/Catalog/FilterModal"
import { MenuMobileModal } from "../components/Header/MenuMobileModal"
import { AcceptCookies } from "../components/Cookies/AcceptCookies"

export default function Modals() {
  const { cartModal, filterModal, menuModal } = useSelector(
    (state) => state.modal
  )

  return (
    <>
      {cartModal ? <CartModal /> : null}
      <FilterModal display={filterModal ? "block" : "none"} />
      <MenuMobileModal display={menuModal ? "block" : "none"} />
      <AcceptCookies />
    </>
  )
}

import { useSelector } from "react-redux"
import { CartModal } from "../components/Cart/CartModal"
import { FilterModal } from "../components/Catalog/FilterModal"

export default function Modals() {
  const { cartModal, filterModal } = useSelector((state) => state.modal)

  return (
    <>
      {cartModal ? <CartModal /> : null}
      <FilterModal display={filterModal ? "block" : "none"} />
    </>
  )
}

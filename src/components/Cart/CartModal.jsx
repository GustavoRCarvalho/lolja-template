import { BackgroundModal } from "../common/BackgroundModal"
import { useDispatch } from "react-redux"
import { switchCartModal } from "../../store/modalSlice"
import { Cart } from "./Cart"

export const CartModal = () => {
  const dispatch = useDispatch()

  function handleClose(id) {
    if (id === "modalCart") {
      dispatch(switchCartModal())
    }
  }

  return (
    <BackgroundModal
      id="modalCart"
      onClick={({ target: { id } }) => handleClose(id)}
    >
      <Cart />
    </BackgroundModal>
  )
}

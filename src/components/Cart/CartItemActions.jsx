import styled from "styled-components"
import { MdDeleteOutline } from "react-icons/md"
import { useDispatch } from "react-redux"
import {
  removeProductFromCart,
  updateCartProductQuantity,
} from "../../store/cartSlice"

export const CartItemActions = ({ product }) => {
  const dispatch = useDispatch()

  function quantityPlus(quantity, number = 0) {
    let newNumber = Number(quantity) + number
    dispatch(updateCartProductQuantity({ newNumber, product }))
  }
  function removeProduct(product) {
    dispatch(removeProductFromCart(product))
  }

  return (
    <ItemActions>
      <ItemQuantity>
        <QuantityButton onClick={() => quantityPlus(product.quantity, -1)}>
          -
        </QuantityButton>
        <QuantityInput readOnly value={product.quantity} />
        <QuantityButton onClick={() => quantityPlus(product.quantity, +1)}>
          +
        </QuantityButton>
      </ItemQuantity>
      <ItemRemove>
        <RemoveIcon onClick={() => removeProduct(product)} />
      </ItemRemove>
    </ItemActions>
  )
}
const ItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
`

const ItemRemove = styled.button`
  background-color: #0000;

  border: 1px solid #0000;
  padding: 0 0.5em;

  cursor: pointer;

  :active {
    border: 1px solid black;
    transition: color 0.1s;
  }
`

const RemoveIcon = styled(MdDeleteOutline)`
  width: 1.8em;
  height: 2.8em;
`

const QuantityInput = styled.input`
  background-color: #0000;

  font-size: 0.8em;
  width: 2em;

  border: none;
  outline: none;

  padding: 0;
  text-align: center;
`

const QuantityButton = styled.button`
  background-color: #0000;

  width: 2em;
  height: 2em;

  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.03em;

  :active {
    border: 1px solid black;
    transition: color 0.1s;
  }

  cursor: pointer;

  border: none;
  padding: 0;
`

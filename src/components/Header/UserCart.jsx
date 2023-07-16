import styled from "styled-components"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { switchCartModal } from "../../store/modalSlice"

export const UserCart = () => {
  const dispatch = useDispatch()

  return (
    <ContainterUserCart>
      <IconUser />
      <IconCart
        onClick={() => {
          dispatch(switchCartModal())
        }}
      />
    </ContainterUserCart>
  )
}

const ContainterUserCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const IconUser = styled(AiOutlineUser)`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 1rem;

  cursor: pointer;
`

const IconCart = styled(AiOutlineShoppingCart)`
  height: 1.5rem;
  width: 1.5rem;

  cursor: pointer;
`

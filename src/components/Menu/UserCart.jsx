import styled from "styled-components"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"

export const UserCart = () => {
  return (
    <ContainterUserCart>
      <IconUser />
      <IconCart />
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
  padding-right: 1rem;

  cursor: pointer;
`

const IconCart = styled(AiOutlineShoppingCart)`
  height: 1.5rem;
  width: 1.5rem;

  cursor: pointer;
`

import styled from "styled-components"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { switchMenuModal } from "../../store/modalSlice"

export const MenuMobileButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(switchMenuModal())
  }

  return <MenuIcon onClick={handleClick} />
}

const MenuIcon = styled(HiOutlineMenuAlt1)`
  width: 25px;
  height: 25px;

  cursor: pointer;

  @media screen and (min-width: ${(props) => props.theme.maxWidthMobile}) {
    display: none;
  }
`

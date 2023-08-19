import { useDispatch } from "react-redux"
import { BackgroundModal } from "../common/BackgroundModal"
import { switchMenuModal } from "../../store/modalSlice"
import styled from "styled-components"
import { CloseModalButton } from "../common/CloseModalButton"
import { MenuMobile } from "./MenuMobile"
import { useState } from "react"

export const MenuMobileModal = (props) => {
  const [menuExtension, setMenuExtension] = useState([])
  const dispatch = useDispatch()

  function handleClose(id) {
    if (id === "modalMenu") {
      dispatch(switchMenuModal())
    }
  }

  return (
    <Background
      {...props}
      id="modalMenu"
      onClick={({ target: { id } }) => handleClose(id)}
    >
      <Modal>
        <TitleWrapper>
          <CartTitle>Menu</CartTitle>
          <CloseModalButton onClick={() => dispatch(switchMenuModal())} />
        </TitleWrapper>
        <MenuMobile setMenuExtension={setMenuExtension} />
      </Modal>
    </Background>
  )
}

const CartTitle = styled.p`
  flex: 1;

  font-size: 1em;
  text-align: center;
  font-weight: bold;

  margin: 0em;
`

const TitleWrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;

  padding: 0.5em 1em;
`
const Background = styled(BackgroundModal)`
  justify-content: flex-start;
  display: ${(props) => props.display};
`

const Modal = styled.div`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 30rem;

  color: #141414;

  overflow-y: scroll;
  overscroll-behavior: contain;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #777;
    border: 0;
    border-radius: 10px;
  }

  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    width: 100%;
  }
`

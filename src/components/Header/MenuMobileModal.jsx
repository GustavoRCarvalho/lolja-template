import { useDispatch } from "react-redux"
import { BackgroundModal } from "../common/BackgroundModal"
import { switchMenuModal } from "../../store/modalSlice"
import styled from "styled-components"
import { CloseModalButton } from "../common/CloseModalButton"
import { MenuMobile } from "./MenuMobile"
import { useState } from "react"
import { SubMenuMobile } from "./SubMenuMobile"
import { AiFillCaretLeft } from "react-icons/ai"

export const MenuMobileModal = (props) => {
  const [menuExtension, setMenuExtension] = useState([])
  const dispatch = useDispatch()

  function handleClose(id) {
    if (id === "modalMenu") {
      setMenuExtension([])
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
        {JSON.stringify(menuExtension) === "[]" ? (
          <MenuMobile setMenuExtension={setMenuExtension} />
        ) : (
          <>
            <BackButton
              onClick={() => {
                setMenuExtension([])
              }}
            >
              <BackIcon />
              <BackSpan>Voltar</BackSpan>
            </BackButton>
            <SubMenuMobile
              list={menuExtension}
              setMenuExtension={setMenuExtension}
            />
          </>
        )}
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
  width: 40em;
  max-width: 90%;

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
`

const BackIcon = styled(AiFillCaretLeft)`
  cursor: pointer;
`

const BackSpan = styled.span`
  flex: 1;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  border: none;

  margin: 1em 1em 0 1em;
  padding-block: 0.7em;

  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  cursor: pointer;

  :hover {
    color: #fc6133;
  }
`

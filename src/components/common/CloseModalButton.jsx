import styled from "styled-components"
import { GrClose } from "react-icons/gr"

export const CloseModalButton = ({ onClick }) => {
  return (
    <CloseButton onClick={onClick}>
      <CloseIcon />
    </CloseButton>
  )
}

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3em;
  height: 3em;

  border-radius: 50%;

  border: none;
  padding: 0;

  cursor: pointer;
`

const CloseIcon = styled(GrClose)`
  width: 1.5em;
  height: 1.5em;
`

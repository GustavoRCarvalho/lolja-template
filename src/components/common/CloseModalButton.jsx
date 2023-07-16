import styled from "styled-components"
import { GrClose } from "react-icons/gr"

export const CloseModalButton = () => {
  return (
    <CloseButton>
      <CloseIcon />
    </CloseButton>
  )
}

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2em;
  height: 2em;

  border-radius: 50%;

  border: none;
  padding: 0;

  cursor: pointer;
`

const CloseIcon = styled(GrClose)``

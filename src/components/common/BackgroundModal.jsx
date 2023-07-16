import styled from "styled-components"

export const BackgroundModal = styled.div`
  backdrop-filter: blur(3px);

  position: fixed;
  height: 100%;
  width: 100%;

  top: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
  z-index: 2;
`

import styled from "styled-components"

export const FooterContainerBackground = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: ${(props) => props.color ?? "#3b3a38"};
`

import styled from "styled-components"

export const FooterContainer = styled.div`
  min-height: 50px;
  width: 80%;
  max-width: 1024px;
  padding: 0.5em 0 0.5em 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

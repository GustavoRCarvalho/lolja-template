import styled from "styled-components"
import { ContentContainer } from "../common/ContentLimit"

export const FooterContainer = styled(ContentContainer)`
  min-height: 50px;
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

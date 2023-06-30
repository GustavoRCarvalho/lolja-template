import styled from "styled-components"
import { CatalogTitle } from "./CatalogTitle"
import { CatalogLocation } from "./CatalogLocation"
import { ContentContainer } from "../common/ContentLimit"

export const Catalog = (props) => {
  return (
    <CatalogBackground>
      <CatalogContainer>
        <CatalogLocation />
        <CatalogTitle />
      </CatalogContainer>
    </CatalogBackground>
  )
}

const CatalogBackground = styled.div`
  background-color: ${(props) => props.theme.mediumGray};

  width: 100%;

  display: flex;
  justify-content: center;
`

const CatalogContainer = styled(ContentContainer)`
  background-color: ${(props) => props.theme.mediumGray};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem;
  padding-top: 1.5rem;
`

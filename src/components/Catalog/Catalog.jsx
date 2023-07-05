import styled from "styled-components"
import { CatalogTitle } from "./CatalogTitle"
import { Location } from "../common/Location"
import { ContentContainer } from "../common/ContentLimit"
import { useLocation } from "react-router-dom"

export const Catalog = (props) => {
  const { pathname } = useLocation()
  const pathLabel = pathname.replace("/", "").replace("-", " ")

  return (
    <CatalogBackground>
      <CatalogContainer>
        <Location pathLabel={pathLabel} />
        <CatalogTitle pathLabel={pathLabel} />
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

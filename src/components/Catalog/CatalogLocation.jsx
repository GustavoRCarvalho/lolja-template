import { useLocation } from "react-router-dom"
import styled from "styled-components"

export const CatalogLocation = () => {
  const { pathname } = useLocation()
  return (
    <LocationText>
      HOME / {pathname.replace("/", "").replace("-", " ")}
    </LocationText>
  )
}

const LocationText = styled.span`
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 0.15em;

  width: 100%;

  margin: 0.5rem 0;
`

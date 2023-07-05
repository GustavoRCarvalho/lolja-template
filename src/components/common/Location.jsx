import styled from "styled-components"

export const Location = ({ pathLabel = "" }) => {
  return <LocationText>HOME / {pathLabel.toUpperCase()}</LocationText>
}

const LocationText = styled.span`
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 0.15em;

  width: 100%;

  margin: 0.5rem 0;
`

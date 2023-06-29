import styled from "styled-components"

import logoLolja from "../../assets/images/logololja.svg"

export const Logo = () => {
  return <LogoImg src={logoLolja} alt="Logo" />
}

const LogoImg = styled.img`
  width: 100px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

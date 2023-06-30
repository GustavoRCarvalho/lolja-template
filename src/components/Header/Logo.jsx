import styled from "styled-components"

import logoLolja from "../../assets/images/logololja.svg"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"

export const Logo = () => {
  return (
    <NoStyleLinkRouter to={"/"}>
      <LogoImg src={logoLolja} alt="Logo" />
    </NoStyleLinkRouter>
  )
}

const LogoImg = styled.img`
  width: 100px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

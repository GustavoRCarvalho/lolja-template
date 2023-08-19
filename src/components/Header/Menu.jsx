import { useState } from "react"
import { MenuBar } from "./MenuBar"
import { MenuExtension } from "./MenuExtension"
import styled from "styled-components"

export const Menu = () => {
  const [menuBarExtension, setMenuBarExtension] = useState([])

  return (
    <Nav onMouseLeave={() => setMenuBarExtension([])}>
      <MenuBar setMenuBarExtension={setMenuBarExtension} />
      {menuBarExtension.length > 0 && (
        <MenuExtension menuBarExtension={menuBarExtension} />
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    display: none;
  }
`

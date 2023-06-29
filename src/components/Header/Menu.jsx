import { useState } from "react"
import { MenuBar } from "./MenuBar"
import { MenuExtension } from "./MenuExtension"

export const Menu = () => {
  const [menuBarExtension, setMenuBarExtension] = useState([])

  return (
    <nav onMouseLeave={() => setMenuBarExtension([])}>
      <MenuBar setMenuBarExtension={setMenuBarExtension} />
      {menuBarExtension.length > 0 && (
        <MenuExtension menuBarExtension={menuBarExtension} />
      )}
    </nav>
  )
}

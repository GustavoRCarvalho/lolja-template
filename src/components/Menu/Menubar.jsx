import styled from "styled-components"

const listMenuOption = [
  "COLEÇÕES",
  "CAMISETAS",
  "BLUSÃO",
  "MOLETOM",
  "MANGA LONGA",
  "PARCEIROS",
  "CREATORS",
  "ARTISTAS",
  "CANECAS",
]

export const MenuBar = () => {
  function menuListItems(list) {
    return list.map((label) => <MenuItem key={label}>{label}</MenuItem>)
  }

  return (
    <nav>
      <ListMenu>{menuListItems(listMenuOption)}</ListMenu>
    </nav>
  )
}

const ListMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  margin: 0;
  padding: 0;
  gap: 2rem;
`

const MenuItem = styled.li`
  font-family: "Dosis";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;

  cursor: pointer;
  border-bottom: 1px solid transparent;

  :hover {
    color: #fc6133;
    transition: color 250ms;

    border-bottom: 1px solid;
    transition: border 250ms;
  }
`

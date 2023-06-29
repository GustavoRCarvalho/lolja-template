import styled from "styled-components"

const menuOptions = {
  COLEÇÕES: [
    "BONES",
    "CAPRICHO",
    "CINELOLJA CLÁSSICOS",
    "DARK MOOD",
    "DIA DO LIVRO",
    "FESTIVAL",
    "FUTURE CHAOS",
    "GALINHA PINTADINHA",
    "GAME MASTER",
    "HALLOWEEN",
    "IDENTIDADE",
    "JARDIM SECRETO",
    "MANGA INK.",
    "MILLENNIUM",
    "OLD SKULL",
    "POP TRENDS",
    "TAROT",
    "URBAN COLLECTION",
  ],
  CAMISETAS: [
    "LANÇAMENTOS",
    "ANIMES",
    "BÁSICAS",
    "CAVEIRAS",
    "FILMES E SÉRIES",
    "FOOD",
    "GAMES",
    "HUMOR",
    "LITERATURA",
    "MÚSICA",
    "RAGLAN BRANCA",
    "RAGLAN CINZA",
    "REGATA",
  ],
  BLUSÃO: ["CINZA ESTONADO"],
  MOLETOM: [],
  "MANGA LONGA": [],
  PARCEIROS: [],
  CREATORS: [],
  ARTISTAS: [],
  CANECAS: [],
}

export const MenuBar = ({ setMenuBarExtension }) => {
  const listKeys = Object.keys(menuOptions)

  function menuListItems(list) {
    return listKeys.map((label) => (
      <MenuItem
        onMouseEnter={() => setMenuBarExtension(menuOptions[label])}
        key={label}
      >
        {label}
      </MenuItem>
    ))
  }

  return <ListMenu>{menuListItems(listKeys)}</ListMenu>
}

const ListMenu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;

  margin: 0;
  padding: 0;
  gap: 2rem;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 50px;

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

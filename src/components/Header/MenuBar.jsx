import styled from "styled-components"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { textRegexRouter } from "../common/textRegexRouter"

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
  MOLETOM: [
    "BÁSICO",
    "CALÇAS",
    "CANELA",
    "CINZA",
    "COLORIDOS",
    "PRETO",
    "RAGLAN",
  ],
  "MANGA LONGA": ["BRANCA", "PRETA", "RAGLAN CINZA"],
  PARCEIROS: [],
  CREATORS: [],
  ARTISTAS: [
    "ANA MAGANHA",
    "ANDRE CONSOLI",
    "ART CORVUS",
    "BERNARDO ABAD",
    "BUZSHEEP",
    "CÁ MASK",
    "CAMISA DE IMBECIL",
    "CARLOS RUAS",
    "EDUARDO ELY",
    "KARORINE",
    "PAULO GAZOLA",
    "STUDIO MOOTANT",
  ],
  CANECAS: [],
}

export const MenuBar = ({ setMenuBarExtension }) => {
  const listKeys = Object.keys(menuOptions)

  function menuListItems(list) {
    return list.map((item) => {
      const label = textRegexRouter(item)
      return (
        <NoStyleLinkRouter to={`/${label}`} key={item}>
          <MenuItem
            onMouseEnter={() => setMenuBarExtension(menuOptions[item] ?? [])}
          >
            {item}
          </MenuItem>
        </NoStyleLinkRouter>
      )
    })
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
  overflow: hidden;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  height: 50px;

  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: black;

  color: black;
  text-decoration-line: none;

  cursor: pointer;

  :hover {
    color: #fc6133;

    text-decoration-line: underline;
  }
`

import styled from "styled-components"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { switchMenuModal } from "../../store/modalSlice"
import { AiFillCaretRight } from "react-icons/ai"
import { useDispatch } from "react-redux"

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

export const MenuMobile = ({ setMenuExtension }) => {
  const dispatch = useDispatch()
  const listKeys = Object.keys(menuOptions)

  function menuListItems(list) {
    return list.map((item) => {
      return (
        <MenuItem key={item}>
          <NoStyleLinkRouter to={`/${item}`} key={item}>
            <MenuItemSpan onClick={() => dispatch(switchMenuModal())}>
              {item}
            </MenuItemSpan>
          </NoStyleLinkRouter>
          {JSON.stringify(menuOptions[item]) !== "[]" && (
            <SubMenuItemIcon
              onClick={() => setMenuExtension(menuOptions[item] ?? [])}
            />
          )}
        </MenuItem>
      )
    })
  }

  return <ListMenu>{menuListItems(listKeys)}</ListMenu>
}

const SubMenuItemIcon = styled(AiFillCaretRight)`
  cursor: pointer;
  :hover {
    color: var(--orange);
  }
`

const MenuItemSpan = styled.label`
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: black;

  cursor: pointer;

  :hover {
    color: var(--orange);

    text-decoration-line: underline;
  }
`

const ListMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 1em;
  gap: 2rem;
  overflow: auto;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-decoration-line: none;
`

import styled from "styled-components"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { switchMenuModal } from "../../store/modalSlice"
import { useDispatch } from "react-redux"

export const SubMenuMobile = ({ list, setMenuExtension }) => {
  const dispatch = useDispatch()

  function menuListItems(list) {
    return list.map((item) => {
      return (
        <MenuItem key={item}>
          <NoStyleLinkRouter to={`/${item}`} key={item}>
            <MenuItemSpan
              onClick={() => {
                setMenuExtension([])
                dispatch(switchMenuModal())
              }}
            >
              {item}
            </MenuItemSpan>
          </NoStyleLinkRouter>
        </MenuItem>
      )
    })
  }

  return (
    <>
      <ListMenu>{menuListItems(list)}</ListMenu>
    </>
  )
}

const MenuItemSpan = styled.label`
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: black;

  cursor: pointer;

  :hover {
    color: #fc6133;

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
  overflow: hidden;

  overflow: auto;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-decoration-line: none;
`

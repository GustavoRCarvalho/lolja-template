import styled from "styled-components"

export const MenuExtension = ({ menuBarExtension }) => {
  function menuListItems(list) {
    return list.map((label) => <MenuItem key={label}>{label}</MenuItem>)
  }

  return (
    <ListMenuContainer>
      <ListMenu>{menuListItems(menuBarExtension)}</ListMenu>
    </ListMenuContainer>
  )
}

const ListMenuContainer = styled.div`
  background-color: #f2f2f2;

  display: flex;
  justify-content: center;

  position: absolute;
  width: 100%;
  left: 0;

  border-top: 1px solid rgb(252 97 51 / 54%);
`

const ListMenu = styled.ul`
  list-style-type: none;

  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;

  max-width: 1280px;
  width: 95%;

  margin: 0;
  max-height: 350px;

  padding-inline-start: 10rem;
  padding-block: 1rem;

  row-gap: 0.5rem;
  column-gap: 15rem;
`

const MenuItem = styled.li`
  font-family: "Dosis";
  color: #4f4f4f;
  font-size: 13px;
  letter-spacing: 0.03em;
  line-height: 2.5;

  cursor: pointer;
  border-bottom: 1px solid transparent;

  :hover {
    color: #fc6133;
    transition: color 250ms;

    border-bottom: 1px solid;
    transition: border 250ms;
  }
`

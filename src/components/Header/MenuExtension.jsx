import styled from "styled-components"

export const MenuExtension = ({ menuBarExtension }) => {
  function menuListItems(list) {
    return list.map((label) => <MenuItem key={label}>{label}</MenuItem>)
  }

  return <ListMenu>{menuListItems(menuBarExtension)}</ListMenu>
}

const ListMenu = styled.ul`
  list-style-type: none;

  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  position: absolute;

  width: calc(100vw - 20%);
  max-height: 300px;

  margin: 0;
  padding-block: 1rem;

  row-gap: 0.5rem;
  column-gap: 10rem;

  border-top: 1px solid rgb(252 97 51 / 54%);
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

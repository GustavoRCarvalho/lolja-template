import styled from "styled-components"
import { Search } from "./Search"
import { Logo } from "./Logo"
import { UserCart } from "./UserCart"
import { ContentContainer } from "../common/ContentLimit"
import { MenuBar } from "./Menubar"

export const Header = () => {
  return (
    <Menu>
      <ContainerSearch>
        <Logo />
        <Search />
        <UserCart />
      </ContainerSearch>
      <ContainerMenu>
        <ContentContainer>
          <MenuBar />
        </ContentContainer>
      </ContainerMenu>
    </Menu>
  )
}

const Menu = styled.header`
  display: flex;
  flex-direction: column;
`

const ContainerSearch = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  margin-block: 0.5rem;
`

const ContainerMenu = styled.div`
  background-color: #f2f2f2;
  width: 100%;
`

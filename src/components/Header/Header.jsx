import styled from "styled-components"
import { Search } from "./Search"
import { Logo } from "./Logo"
import { UserCart } from "./UserCart"
import { ContentContainer } from "../common/ContentLimit"
import { Menu } from "./Menu"
import { MenuMobileButton } from "./MenuMobileButton"

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerSearch>
        <MenuMobileButton />
        <Logo />
        <Search />
        <UserCart />
      </ContainerSearch>
      <ContainerMenu>
        <ContentContainer>
          <Menu />
        </ContentContainer>
      </ContainerMenu>
    </ContainerHeader>
  )
}

const ContainerHeader = styled.header`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 2;
`

const ContainerSearch = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 0.5rem;
`

const ContainerMenu = styled.div`
  background-color: var(--mediumGray);
  width: 100%;

  display: flex;
  justify-content: center;
`

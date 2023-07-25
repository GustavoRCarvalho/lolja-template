import { useDispatch } from "react-redux"
import { BackgroundModal } from "../common/BackgroundModal"
import { switchFilterModal } from "../../store/modalSlice"
import styled from "styled-components"
import { Filters } from "./Filters"
import { useEffect } from "react"
import { staticCatalogData } from "../../assets/images/FakeAPIImages/Catalog"
import { useLocation } from "react-router-dom"
import { setFilterPrice } from "../../store/filterSlice"
import { useState } from "react"
import { CloseModalButton } from "../common/CloseModalButton"

export const FilterModal = (props) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const pathLabel = pathname.replace("/", "").replace(/-/g, " ")
  const [staticData, setStaticData] = useState({})

  function handleClose(id) {
    if (id === "modalFilter") {
      dispatch(switchFilterModal())
    }
  }

  useEffect(() => {
    const staticResponse = staticCatalogData({ name: pathLabel })
    setStaticData(staticResponse)
    dispatch(setFilterPrice(staticResponse?.filters?.["preço"]))
    console.log("effect modal filter")
  }, [pathLabel, dispatch])

  return (
    <Background
      {...props}
      id="modalFilter"
      onClick={({ target: { id } }) => handleClose(id)}
    >
      <Modal>
        <TitleWrapper>
          <CartTitle>Filtros</CartTitle>
          <CloseModalButton onClick={() => dispatch(switchFilterModal())} />
        </TitleWrapper>
        <Filters listFilters={staticData.filters} />
      </Modal>
    </Background>
  )
}

const CartTitle = styled.p`
  flex: 1;

  font-size: 1em;
  text-align: center;
  font-weight: bold;

  margin: 0em;
`

const TitleWrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;

  padding: 0.5em 1em;
`
const Background = styled(BackgroundModal)`
  justify-content: flex-start;
  display: ${(props) => props.display};
`

const Modal = styled.div`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 30rem;

  color: #141414;

  overflow-y: scroll;
  overscroll-behavior: contain;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #777;
    border: 0;
    border-radius: 10px;
  }

  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    width: 100%;
  }
`

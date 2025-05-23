import styled from "styled-components"
import { CatalogTitle } from "./CatalogTitle"
import { Location } from "../common/Location"
import { ContentContainer } from "../common/ContentLimit"
import { useLocation } from "react-router-dom"
import { BannerHalf } from "./BannerHalf"
import BannerHalfImage from "../../assets/images/FakeAPIImages/Banner/BannerHalf.png"
import { useEffect, useState } from "react"
import { staticCatalogData } from "../../assets/images/FakeAPIImages/Catalog"
import { Filters } from "./Filters"
import { CatalogProducts } from "./CatalogProducts"
import { useDispatch } from "react-redux"
import { setFilterPrice } from "../../store/filterSlice"

export const Catalog = (props) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const pathLabel = decodeURI(pathname.replace("/", "").replace(/-/g, " "))
  const [staticData, setStaticData] = useState({})

  useEffect(() => {
    const staticResponse = staticCatalogData({ name: pathLabel })
    setStaticData(staticResponse)
    dispatch(setFilterPrice(staticResponse.filters["preço"]))
  }, [pathLabel, dispatch])

  return (
    <CatalogBackground>
      <BannerHalf src={BannerHalfImage} />
      <ColorBackground>
        <TitleContainer>
          <Location pathLabel={pathLabel} />
          <CatalogTitle pathLabel={pathLabel} about={staticData.about} />
        </TitleContainer>
      </ColorBackground>
      <CatalogContainer>
        {JSON.stringify(staticData) !== "{}" && (
          <FiltersDesktop>
            <FilterTitle>Filtros</FilterTitle>
            <Filters listFilters={staticData.filters} />
          </FiltersDesktop>
        )}
        <CatalogProducts
          pathLabel={pathLabel}
          totalPages={staticData.totalPages}
        />
      </CatalogContainer>
    </CatalogBackground>
  )
}

const CatalogBackground = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ColorBackground = styled.div`
  background-color: var(--mediumGray);
  width: 100%;

  display: flex;
  justify-content: center;
`

const TitleContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem;
  padding-top: 1.5rem;
`

const CatalogContainer = styled(ContentContainer)`
  background-color: #fff;

  display: flex;
  justify-content: center;

  padding-bottom: 2rem;
`

const FiltersDesktop = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const FilterTitle = styled.h2`
  width: 100%;

  font-size: 2em;
`

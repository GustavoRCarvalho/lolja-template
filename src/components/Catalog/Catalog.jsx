import styled from "styled-components"
import { CatalogTitle } from "./CatalogTitle"
import { Location } from "../common/Location"
import { ContentContainer } from "../common/ContentLimit"
import { useLocation } from "react-router-dom"
import { BannerHalf } from "./BannerHalf"
import BannerHalfImage from "../../assets/images/FakeAPIImages/Banner/BannerHalf.png"
import { useEffect, useState } from "react"
import { ListCatalog } from "../../assets/images/FakeAPIImages/Catalog"
import { Filters } from "./Filters"
import { CatalogProducts } from "./CatalogProducts"

export const Catalog = (props) => {
  const { pathname } = useLocation()
  const pathLabel = pathname.replace("/", "").replace("-", " ")
  const [catalog, setCatalog] = useState({})

  useEffect(() => {
    setCatalog(ListCatalog({ name: pathLabel, quantity: 18 }))
  }, [pathLabel])

  return (
    <CatalogBackground>
      <BannerHalf src={BannerHalfImage} />
      <ColorBackground>
        <TitleContainer>
          <Location pathLabel={pathLabel} />
          <CatalogTitle pathLabel={pathLabel} about={catalog.about} />
        </TitleContainer>
      </ColorBackground>
      <CatalogContainer>
        <Filters filters={catalog.filters} />
        <CatalogProducts listProducts={catalog.products} />
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
  background-color: ${(props) => props.theme.mediumGray};
  width: 100%;

  display: flex;
  justify-content: center;
`

const TitleContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-bottom: 2rem;
  padding-top: 1.5rem;
`

const CatalogContainer = styled(ContentContainer)`
  background-color: #fff;

  display: flex;
  justify-content: center;

  padding-bottom: 2rem;
`

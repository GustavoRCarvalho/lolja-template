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
import { ColorRing } from "react-loader-spinner"

export const Catalog = (props) => {
  const { pathname } = useLocation()
  const pathLabel = pathname.replace("/", "").replace(/-/g, " ")
  const [actualPage, setActualPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [catalog, setCatalog] = useState({})
  const [filters, setFilters] = useState({})

  useEffect(() => {
    setLoading(true)
    const responseCatalog = ListCatalog({
      name: pathLabel,
      quantity: 18,
      actualPage: actualPage,
      filters: filters,
    })
    setTimeout(() => {
      setCatalog(responseCatalog)
      setLoading(false)
    }, 1500)
  }, [pathLabel, actualPage, filters])

  useEffect(() => {
    setCatalog({})
  }, [pathLabel])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [actualPage])

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
        <Loading>
          <ColorRing
            visible={loading}
            height="60"
            width="60"
            ariaLabel="blocks-loading"
            colors={["#ff0516", "#ffe600", "#00ff22", "#00a2ff", "#b700ff"]}
          />
        </Loading>
        {catalog.filters && (
          <Filters filters={catalog.filters} setFilters={setFilters} />
        )}
        <CatalogProducts
          listProducts={catalog.products}
          totalPages={catalog.totalPages}
          actualPage={actualPage}
          setActualPage={setActualPage}
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

const Loading = styled.div`
  position: absolute;
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

  padding-bottom: 2rem;
  padding-top: 1.5rem;
`

const CatalogContainer = styled(ContentContainer)`
  background-color: #fff;

  display: flex;
  justify-content: center;

  padding-bottom: 2rem;
`

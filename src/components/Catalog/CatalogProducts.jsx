import styled from "styled-components"
import { ProductCard } from "./ProductCard"
import { Pagination } from "./Pagination"
import { useEffect } from "react"
import { ColorRing } from "react-loader-spinner"
import { useState } from "react"
import { listCatalog } from "../../assets/images/FakeAPIImages/Catalog"
import { useSelector } from "react-redux"
import { FilterMobileButton } from "./FilterMobileButton"

export const CatalogProducts = ({ pathLabel, totalPages = 0 }) => {
  const { filters } = useSelector((state) => state.filter)
  const [loading, setLoading] = useState(false)
  const [catalog, setCatalog] = useState([])
  const [actualPage, setActualPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    const interval = setTimeout(() => {
      setCatalog(
        listCatalog({
          name: pathLabel,
          quantity: 18,
          actualPage: actualPage,
          filters: filters,
        })
      )
      setLoading(false)
    }, 1500)

    return () => {
      clearInterval(interval)
    }
  }, [pathLabel, actualPage, filters])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [actualPage])

  return (
    <ProductsContainer>
      <FilterMobileButton />
      <Loading>
        <ColorRing
          visible={loading}
          height="60"
          width="60"
          ariaLabel="blocks-loading"
          colors={["#ff0516", "#ffe600", "#00ff22", "#00a2ff", "#b700ff"]}
        />
      </Loading>
      <ProductsWrapper>
        {catalog.map((product, index) => (
          <ProductCard key={product.title + index} product={product} />
        ))}
      </ProductsWrapper>
      {!!totalPages && (
        <Pagination
          totalPages={totalPages}
          actualPage={actualPage}
          setActualPage={setActualPage}
        />
      )}
    </ProductsContainer>
  )
}

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

const ProductsWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 6rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
  }
`

const Loading = styled.div`
  position: absolute;
`

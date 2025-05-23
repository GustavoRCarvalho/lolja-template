import styled from "styled-components"
import { ProductCard } from "./ProductCard"
import { Pagination } from "./Pagination"
import { useEffect } from "react"
import { ColorRing } from "react-loader-spinner"
import { useState } from "react"
import { useSelector } from "react-redux"
import { FilterMobileButton } from "./FilterMobileButton"
import { productsCall } from "../../api/api"

export const CatalogProducts = ({ pathLabel, totalPages = 0 }) => {
  const { filters } = useSelector((state) => state.filter)
  const [loading, setLoading] = useState(false)
  const [catalog, setCatalog] = useState(null)
  const [actualPage, setActualPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    const interval = setTimeout(async () => {
      const response = await productsCall()
      setCatalog(response)
      setLoading(false)
    }, 250)

    return () => {
      clearInterval(interval)
      setLoading(false)
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
        {catalog &&
          catalog.map((product, index) => (
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

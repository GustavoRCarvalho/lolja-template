import styled from "styled-components"
import { ProductCard } from "./ProductCard"
import { Pagination } from "./Pagination"

export const CatalogProducts = ({
  listProducts = [],
  totalPages = 0,
  actualPage,
  setActualPage,
}) => {
  return (
    <ProductsContainer>
      <ProductsWrapper>
        {listProducts.map((product, index) => (
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
`

const ProductsWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 6rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

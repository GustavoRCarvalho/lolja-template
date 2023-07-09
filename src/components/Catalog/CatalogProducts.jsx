import styled from "styled-components"
import { ProductCard } from "./ProductCard"

export const CatalogProducts = ({ listProducts = [] }) => {
  return (
    <ProductsContainer>
      {listProducts.map((product, index) => (
        <ProductCard
          key={product.title + index}
          product={product}
          title={product.title}
        />
      ))}
    </ProductsContainer>
  )
}

const ProductsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 6rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

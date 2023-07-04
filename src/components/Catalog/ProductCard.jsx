import styled from "styled-components"
import { ProductImage } from "./ProductImage"

export const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage images={product.images} />
      <ProductTitle>{product.title}</ProductTitle>
      <PriceContainer>
        <ProductContent>
          <PriceOriginal>DE:</PriceOriginal>
          <PriceOriginal textDecoration={"line-through"}>
            R$ {product.price}
          </PriceOriginal>
          <PriceSale>POR:</PriceSale>
          <PriceSale>R$ {product.salePrice}</PriceSale>
          <PriceInstallment>
            {product.installmentsPrice[0]}x de R$ {product.installmentsPrice[1]}{" "}
            sem juros
          </PriceInstallment>
        </ProductContent>
      </PriceContainer>
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  height: 450px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  border-radius: 15px;
  overflow: hidden;
`

const ProductTitle = styled.h2`
  font-size: 1.1em;

  margin: 0;
  padding: 0;
`

const PriceSale = styled.span`
  font-size: 1em;
  color: #000;
  font-weight: bold;

  width: 100%;
`
const PriceOriginal = styled.span`
  font-size: 0.8em;
  color: #828282;
  text-decoration: ${(props) => props.textDecoration ?? "none"};

  width: 100%;
`
const PriceInstallment = styled.span`
  grid-area: installments;
  font-size: 0.7em;
  color: #828282;

  width: 100%;
`

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const ProductContent = styled.p`
  display: grid;
  gap: 0 0.5rem;
  grid-template-areas:
    "original-prefix original-price"
    "sale-prefix sale-price"
    "installments installments";
  grid-template-columns: min-content 2fr;
`

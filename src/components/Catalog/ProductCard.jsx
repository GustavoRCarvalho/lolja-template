import styled from "styled-components"
import { ProductImage } from "./ProductImage"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { moneyFormat } from "../common/MoneyFormat"
import { useLocation } from "react-router"

export const ProductCard = ({ product }) => {
  const { pathname } = useLocation()

  const path = pathname.split("/")[1]

  return (
    <NoStyleLinkRouter
      to={`/${pathname !== "/" ? path : "HOME"}/${product.title}`}
    >
      <Card>
        <ProductImage images={product.images} />
        <ProductTitle>{product.title}</ProductTitle>
        <PriceContainer>
          <ProductContent>
            <PriceOriginal>DE:</PriceOriginal>
            <PriceOriginal textDecoration={"line-through"}>
              {moneyFormat(product.price)}
            </PriceOriginal>
            <PriceSale>POR:</PriceSale>
            <PriceSale>{moneyFormat(product.salePrice)}</PriceSale>
            <PriceInstallment>
              {product.installmentsPrice[0]}x de{" "}
              {moneyFormat(product.installmentsPrice[1])} sem juros
            </PriceInstallment>
          </ProductContent>
        </PriceContainer>
        <SalePorcent>{product.salePorcent}</SalePorcent>
      </Card>
    </NoStyleLinkRouter>
  )
}

const Card = styled.div`
  position: relative;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    max-height: 400px;
  }
`

const SalePorcent = styled.div`
  position: absolute;

  background-color: #00b081;
  color: #fff;
  font-size: 0.8em;

  padding: 0.4rem;
  margin: 0.4rem;
  border-radius: 0.5em;
  left: 0;
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

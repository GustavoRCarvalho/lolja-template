import styled from "styled-components"
import { Location } from "../common/Location"
import { ContentContainer } from "../common/ContentLimit"
import { useLocation } from "react-router-dom"
import { product } from "../../assets/images/FakeAPIImages/Product"
import CarouselProduct from "./CarouselProduct"
import { Price } from "./Price"
import { BuyForm } from "./BuyForm"
import { AboutProduct } from "./AboutProduct"

import moletomSizes from "../../assets/images/FakeAPIImages/Product/moletomSizes.png"
import { SwiperProductPage } from "./SwiperProductPage"
import { createList } from "../../assets/images/FakeAPIImages/Catalog"

export const Product = () => {
  const { pathname } = useLocation()
  const pathLabel = pathname.replace("/", "").replace(/-/g, " ").split("/")[0]

  return (
    <>
      <ProductContainer>
        <CarouselProduct title={product.title} imagesList={product.images} />
        <InfoWrapper>
          <Location pathLabel={pathLabel} />
          <TitleProduct>{product.title}</TitleProduct>
          <Price product={product} />
          <BuyForm product={product} />
        </InfoWrapper>
      </ProductContainer>
      <AboutProduct about={product.about} />
      <ImageSizesContainer>
        <ImageSizes src={moletomSizes} alt="guia de tamanhos" />
      </ImageSizesContainer>
      <SwiperProductPage content={createList(10)} />
    </>
  )
}

const ImageSizes = styled.img`
  width: 100%;
  max-width: 50em;
`

const ImageSizesContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
`

const ProductContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;

  padding-bottom: 2rem;
  padding-top: 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.maxWidthTablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 30em;

  margin-left: 3rem;
  @media screen and (max-width: ${(props) => props.theme.maxWidthTablet}) {
    width: 100%;
    max-width: 40em;
    margin-left: 0;
  }
`

const TitleProduct = styled.h1`
  margin: 0;
  font-size: 2.5em;
`

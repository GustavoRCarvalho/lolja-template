import styled from "styled-components"
import { Location } from "../common/Location"
import { ContentContainer } from "../common/ContentLimit"
import { useLocation } from "react-router-dom"
import { ColorRing } from "react-loader-spinner"
import { product } from "../../assets/images/FakeAPIImages/Product"
import CarouselProduct from "./CarouselProduct"
import { Price } from "./Price"
import { BuyForm } from "./BuyForm"
import { AboutProduct } from "./AboutProduct"

import moletomSizes from "../../assets/images/FakeAPIImages/Product/moletomSizes.png"
import { SwiperProductPage } from "./SwiperProductPage"
import { createList } from "../../assets/images/FakeAPIImages/Catalog"
import { useEffect, useState } from "react"

export const Product = () => {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)
  const [productData, setProductData] = useState({})
  const pathArray = pathname.replace("/", "").replace(/-/g, "").split("/")
  const pathLabel = pathArray[0]
  const title = pathArray[1]
  const productDataFinish = JSON.stringify(productData) !== "{}"

  useEffect(() => {
    setProductData({})
    setLoading(true)
    setTimeout(() => {
      window.scroll(0, 0)
      setProductData(product({ title: title }))
      setLoading(false)
    }, 1500)
  }, [title])

  return (
    <>
      <Loading visible={loading}>
        <ColorRing
          height="60"
          width="60"
          ariaLabel="blocks-loading"
          colors={["#ff0516", "#ffe600", "#00ff22", "#00a2ff", "#b700ff"]}
        />
      </Loading>
      {productDataFinish && (
        <>
          <ProductContainer>
            <CarouselProduct
              title={productData.title}
              imagesList={productData.images}
            />
            <InfoWrapper>
              <Location pathLabel={pathLabel} />
              <TitleProduct>{productData.title}</TitleProduct>
              <Price product={productData} />
              <BuyForm product={productData} />
            </InfoWrapper>
          </ProductContainer>
          <AboutProduct about={productData.about} />
          <ImageSizesContainer>
            <ImageSizes src={moletomSizes} alt="guia de tamanhos" />
          </ImageSizesContainer>
        </>
      )}
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

const Loading = styled.div`
  display: ${(props) => (props.visible ? "" : "none")};
  height: 50vh;
`

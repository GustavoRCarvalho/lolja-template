import styled from "styled-components"
import { Location } from "../common/Location"
import { ContentContainer } from "../common/ContentLimit"
import { useLocation } from "react-router-dom"
import { ColorRing } from "react-loader-spinner"
import CarouselProduct from "./CarouselProduct"
import { Price } from "./Price"
import { BuyForm } from "./BuyForm"
import { AboutProduct } from "./AboutProduct"
import moletomSizes from "../../assets/images/FakeAPIImages/Product/moletomSizes.png"
import { SwiperProductPage } from "./SwiperProductPage"
import { useEffect, useState } from "react"
import { productCall, productsCall } from "../../api/api"

export const Product = () => {
  const { pathname } = useLocation()
  const [productData, setProductData] = useState(null)
  const [swiperData, setSwiperData] = useState(null)
  const pathArray = pathname.replace("/", "").split("/")
  const pathLabel = decodeURI(pathArray[0])
  const title = decodeURI(pathArray[1])

  useEffect(() => {
    setProductData(null)
    setSwiperData(null)
    setTimeout(async () => {
      window.scroll(0, 0)
      const responseProd = await productCall(title)
      setProductData(responseProd)

      const responseSwiper = await productsCall(10)
      setSwiperData(responseSwiper)
    }, 250)
  }, [title])

  return (
    <>
      {!productData ? (
        <Loading>
          <ColorRing
            height="60"
            width="60"
            ariaLabel="blocks-loading"
            colors={["#ff0516", "#ffe600", "#00ff22", "#00a2ff", "#b700ff"]}
          />
        </Loading>
      ) : (
        <>
          <ProductContainer>
            <CarouselProduct
              title={productData.title}
              imagesList={productData.images}
            />
            <InfoWrapper>
              <Location pathLabel={pathLabel} />
              <TitleProduct>{productData.title}</TitleProduct>
              <Price {...productData} />
              <BuyForm {...productData} />
            </InfoWrapper>
          </ProductContainer>
          <AboutProduct about={productData.about} />
          <ImageSizesContainer>
            <ImageSizes src={moletomSizes} alt="guia de tamanhos" />
          </ImageSizesContainer>
        </>
      )}
      {swiperData && <SwiperProductPage key={title} content={swiperData} />}
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

  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
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
  height: 50vh;
`

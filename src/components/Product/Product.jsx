import styled from "styled-components"
import { Location } from "../common/Location"
import { ContentContainer } from "../common/ContentLimit"
import { useLocation } from "react-router-dom"

export const Product = () => {
  const { pathname } = useLocation()
  const pathLabel = pathname.replace("/", "").replace("-", " ")

  return (
    <ProductBackground>
      <ProductContainer>
        <Location pathLabel={pathLabel} />
        Produto
      </ProductContainer>
    </ProductBackground>
  )
}

const ProductBackground = styled.div`
  background-color: ${(props) => props.theme.mediumGray};

  width: 100%;

  display: flex;
  justify-content: center;
`

const ProductContainer = styled(ContentContainer)`
  background-color: ${(props) => props.theme.mediumGray};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem;
  padding-top: 1.5rem;
`

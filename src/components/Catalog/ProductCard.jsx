import styled from "styled-components"

export const ProductCard = ({ product }) => {
  return <Card>{product.title}</Card>
}

const Card = styled.div`
  background-color: #3cef27;
  height: 200px;
`

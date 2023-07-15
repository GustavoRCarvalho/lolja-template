import { Route, Routes } from "react-router-dom"
import { Catalog } from "../components/Catalog/Catalog"
import { Home } from "../components/Home/Home"
import { Product } from "../components/Product/Product"
import styled from "styled-components"

export default function Content(props) {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":catalog" element={<Catalog />} />
        <Route path=":catalog/:product" element={<Product />} />
        {/* <Route path="about" element={<About />} />
        <Route path="roupas">
          <Route path="id=:id" element={<Product />} />
        </Route> */}
        <Route path="*" element={<div>Error NOT Found</div>} />
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

import { Route, Routes } from "react-router-dom"
import { Catalog } from "../components/Catalog/Catalog"
import { Home } from "../components/Home/Home"
import { Product } from "../components/Product/Product"
import styled from "styled-components"
import { Accounts } from "../components/account/Accouts"

export default function Content(props) {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accounts" element={<Accounts />}></Route>
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
  min-height: 70vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

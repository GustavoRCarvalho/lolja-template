import { Route, Routes } from "react-router-dom"
import { Catalog } from "../components/Catalog/Catalog"
import { Home } from "../components/Home/Home"

export default function Content(props) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/busca=:search" element={<Home />} />
        <Route path=":catalog" element={<Catalog />} />
        {/* <Route path="about" element={<About />} />
        <Route path="roupas">
          <Route path="id=:id" element={<Product />} />
        </Route> */}
        <Route path="*" element={<div>Error NOT Found</div>} />
      </Routes>
    </main>
  )
}

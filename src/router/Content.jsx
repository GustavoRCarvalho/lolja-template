import { Route, Routes } from "react-router-dom"
import { Catalog } from "../components/Catalog/Catalog"

export default function Content(props) {
  return (
    <main>
      <Routes>
        <Route path="" element={<Catalog />} />
        {/* <Route path="about" element={<About />} />
        <Route path="roupas">
          <Route path="id=:id" element={<Product />} />
          <Route path=":catalog" element={<Catalog />} />
        </Route> */}
        <Route path="*" element={<div>Error NOT Found</div>} />
      </Routes>
    </main>
  )
}

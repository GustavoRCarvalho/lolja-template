import { Header } from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import Content from "./router/Content"
import FooterPage from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <FooterPage />
      </BrowserRouter>
    </div>
  )
}

export default App

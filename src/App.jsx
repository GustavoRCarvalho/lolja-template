import { Header } from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import Content from "./router/Content"
import FooterPage from "./components/Footer/Footer"
import { Provider } from "react-redux"
import store from "./store/store"
import Modals from "./router/Modals"
import { CookiesProvider } from "react-cookie"

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Content />
          <FooterPage />
          <Modals />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  )
}

export default App

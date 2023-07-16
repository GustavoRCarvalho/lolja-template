import { Header } from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import Content from "./router/Content"
import FooterPage from "./components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme"
import { Provider } from "react-redux"
import store from "./store/store"
import Modals from "./router/Modals"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Content />
          <FooterPage />
          <Modals />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App

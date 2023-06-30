import { Header } from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import Content from "./router/Content"
import FooterPage from "./components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Content />
        <FooterPage />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

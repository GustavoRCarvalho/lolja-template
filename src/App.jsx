import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import { CookiesProvider } from "react-cookie"
import { ElementsController } from "./router/ElementsController"

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <ElementsController />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  )
}

export default App

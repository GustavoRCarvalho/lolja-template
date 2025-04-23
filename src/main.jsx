import "./index.css"
import App from "./App.jsx"
import { render } from "preact"

import { enableMapSet } from "immer"

enableMapSet()

import { worker } from "./mocks/browser"
worker.start({
  onUnhandledRequest: "bypass",
})

render(<App />, document.getElementById("root"))

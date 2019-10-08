import React from "react"
import { render } from "react-dom"
import Example from "react-library-starter"

const App = () => (
  <div>
    <Example />
  </div>
)

render(<App />, document.getElementById("app"))

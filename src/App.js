import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import React, { Fragment, useEffect } from "react"

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div className="App">
      <h1>Main Page</h1>
    </div>
  )
}

export default App

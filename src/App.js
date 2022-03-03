import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import React, { Fragment, useEffect } from "react"
import SearchBar from "./components/layout/SearchBar"
import Tickets from "./components/tickets/Tickets"

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Tickets />
      </div>
    </Fragment>
  )
}

export default App

import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import React, { Fragment, useEffect } from "react"
import SearchBar from "./components/layout/SearchBar"
import Tickets from "./components/tickets/Tickets"
import AddBtn from "./components/layout/AddBtn"
import AddTicketModal from "./components/tickets/AddTicketModal"
import EditTicketModal from "./components/tickets/EditTicketModal"
import AddTechModal from "./components/techs/AddTechModal"
import TechListModal from "./components/techs/TechListModal"

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddTicketModal />
        <EditTicketModal />
        <AddTechModal />
        <TechListModal />
        <Tickets />
      </div>
    </Fragment>
  )
}

export default App

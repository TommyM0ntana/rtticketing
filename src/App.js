import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import React, { useEffect } from "react"
import SearchBar from "./components/layout/SearchBar"
import Tickets from "./components/tickets/Tickets"
import AddBtn from "./components/layout/AddBtn"
import AddTicketModal from "./components/tickets/AddTicketModal"
import EditTicketModal from "./components/tickets/EditTicketModal"
import AddTechModal from "./components/techs/AddTechModal"
import TechListModal from "./components/techs/TechListModal"
import { Provider } from "react-redux"
import store from "./store"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <SearchBar />
        <AddBtn />
        <AddTicketModal />
        <EditTicketModal />
        <AddTechModal />
        <TechListModal />
        <Tickets />
      </div>
      <Footer />
    </Provider>
  )
}

export default App

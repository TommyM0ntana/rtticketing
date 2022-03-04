import React, { useEffect } from "react"
import { connect } from "react-redux"
import Ticket from "./Ticket"
import Preloader from "../layout/Preloader"
import PropTypes from "prop-types"
import { getTickets } from "../../actions/ticketsActions"

const Tickets = ({ ticket: { tickets, loading }, getTickets }) => {
  useEffect(() => {
    getTickets()
  }, [])

  if (loading || tickets === null) {
    return <Preloader />
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h6 className="center">Request Tracker System</h6>
      </li>
      {!loading && tickets.length === 0 ? (
        <p className="center">No tickets to show...</p>
      ) : (
        tickets.map((ticket) => <Ticket ticket={ticket} key={ticket.id} />)
      )}
    </ul>
  )
}

Tickets.propTypes = {
  ticket: PropTypes.object.isRequired,
  getTickets: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

export default connect(mapStateToProps, { getTickets })(Tickets)

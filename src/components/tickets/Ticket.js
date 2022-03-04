import React from "react"
import Moment from "react-moment"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { deleteTicket, setCurrent } from "../../actions/ticketsActions"

import M from "materialize-css/dist/js/materialize.min.js"

const Ticket = ({ ticket, deleteTicket, setCurrent }) => {
  const onDelete = () => {
    deleteTicket(ticket.id)
    M.toast({ html: "Ticket Deleted" })
  }

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            ticket.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(ticket)}
        >
          {ticket.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{ticket.id}</span> last updated by{" "}
          <span className="black-text">{ticket.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{ticket.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
  deleteTicket: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteTicket, setCurrent })(Ticket)

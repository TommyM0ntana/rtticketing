import React from "react"
import Moment from "react-moment"
import PropTypes from "prop-types"

const Ticket = ({ ticket }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-ticket-modal"
          className={`modal-trigger ${
            ticket.attention ? "red-text" : "blue-text"
          }`}
        >
          {ticket.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{ticket.id}</span> last updated by{" "}
          <span className="black-text">{ticket.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{ticket.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
}

export default Ticket

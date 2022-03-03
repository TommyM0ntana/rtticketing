import React, { useState } from "react"
import M from "materialize-css/dist/js/materialize.min.js"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addTicket } from "../../actions/ticketsActions"

const AddTicketModal = ({ addTicket }) => {
  const [message, setMessage] = useState("")
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState("")

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" })
    } else {
      const newTicket = {
        message,
        attention,
        tech,
        date: new Date(),
      }

      addTicket(newTicket)

      M.toast({ html: `Ticket added by ${tech}` })
      setMessage("")
      setTech("")
      setAttention(false)
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Ticket</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Ticket Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}
AddTicketModal.propTypes = {
  addTicket: PropTypes.func.isRequired,
}
const modalStyle = {
  width: "75%",
  height: "75%",
}
export default connect(null, { addTicket })(AddTicketModal)

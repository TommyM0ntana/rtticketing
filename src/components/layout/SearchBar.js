import React, { useRef } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { searchTickets } from "../../actions/ticketsActions"

const SearchBar = ({ searchTickets }) => {
  const text = useRef("")

  const onChange = (e) => {
    searchTickets(text.current.value)
  }

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search ticket.."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

SearchBar.propTypes = {
  searchTickets: PropTypes.func.isRequired,
}

export default connect(null, { searchTickets })(SearchBar)

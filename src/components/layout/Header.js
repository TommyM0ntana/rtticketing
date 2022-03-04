import React from "react"
import "./Header.css"

export const Header = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="main-nav">
          <li>
            <a className="title" href="/">
              RTS
            </a>
          </li>
          <li>
            <a href="/">Tickets</a>
          </li>

          <li>
            <a href="/">Reports</a>
          </li>
          <li>
            <a href="/">Tools</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

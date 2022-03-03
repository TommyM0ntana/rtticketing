import React, { useState, useEffect } from "react"
import Ticket from "./Ticket"
import Preloader from "../layout/Preloader"

const Tickets = () => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(tickets)

  useEffect(() => {
    getTickets()
  }, [])

  const getTickets = async () => {
    setLoading(true)
    const res = await fetch("/tickets")
    const data = await res.json()
    console.log(data)

    setTickets(data)
    setLoading(false)
  }

  if (loading) {
    return <Preloader />
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Tickets</h4>
      </li>
      {!loading && tickets.length === 0 ? (
        <p className="center">No Tickets to show...</p>
      ) : (
        tickets.map((ticket) => <Ticket ticket={ticket} key={ticket.id} />)
      )}
    </ul>
  )
}

export default Tickets

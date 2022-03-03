import { GET_TICKETS, SET_LOADING, TICKETS_ERROR, ADD_TICKET } from "./types"

export const getTickets = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch("/tickets")
    const data = await res.json()

    dispatch({
      type: GET_TICKETS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TICKETS_ERROR,
      payload: err.response.data,
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const addTicket = (ticket) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch("/tickets", {
      method: "POST",
      body: JSON.stringify(ticket),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()

    dispatch({
      type: ADD_TICKET,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TICKETS_ERROR,
      payload: err.response.data,
    })
  }
}

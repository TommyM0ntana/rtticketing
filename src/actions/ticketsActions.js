import { GET_TICKETS, SET_LOADING, TICKETS_ERROR } from "./types"

export const getTickets = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch("/tickets")
    const data = await res.json()

    dispatch({
      type: GET_TICHETS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TICHETS_ERROR,
      payload: err.response.data,
    })
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

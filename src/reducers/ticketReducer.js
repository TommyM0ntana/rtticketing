import {
  GET_TICKETS,
  SET_LOADING,
  TICKETS_ERROR,
  ADD_TICKET,
} from "../actions/types"

const initialState = {
  tickets: null,
  current: null,
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        loading: false,
      }
    case ADD_TICKET:
      return {
        ...state,
        ticket: [...state.logs, action.payload],
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case TICKETS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

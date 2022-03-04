import { combineReducers } from "redux"
import ticketReducer from "./ticketReducer"
import techReducer from "./techReducer"

export default combineReducers({
  ticket: ticketReducer,
  tech: techReducer,
})

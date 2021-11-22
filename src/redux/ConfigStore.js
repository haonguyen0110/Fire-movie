import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { MovieReducer } from"./reducers/MovieReducer";
import {MemberReducer} from "./reducers/MemberReducer"
import { BookingReducer } from "./reducers/BookingReducer";


const rootReducer = combineReducers({
  MovieReducer,
  MemberReducer,
  BookingReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))
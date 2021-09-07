import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer
});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;

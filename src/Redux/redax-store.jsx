import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth-reduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer,
  form: formReducer,
  auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;

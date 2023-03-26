import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/RootReducer";

export default function configureStore() {
  return createStore(RootReducer, applyMiddleware(thunk));
}

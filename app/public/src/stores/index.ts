import { applyMiddleware, compose, createStore } from "redux";
import Thunk from "redux-thunk";
import Reducer from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export default function createFinalStore() {
  const thunk_middle_ware = Thunk;
  const middlewares = applyMiddleware(thunk_middle_ware);
  const isDevelopEnv = process.env.NODE_ENV === "development";
  const store = createStore(Reducer, {}, middlewares);
  return store;
}

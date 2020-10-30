import { createStore, applyMiddleware } from "redux";
import AllReducers from "./reducers/AllReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
export let store = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(thunk))
  );

 store.subscribe(() => console.log(store.getState()));

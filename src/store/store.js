import { createStore, applyMiddleware } from "redux";
import { fetchUsers, fetchPosts, fetchComments } from "../actions/action";
import Reducer from "../reducers/Reducer";
import thunk from "redux-thunk";

export const store = createStore(Reducer, applyMiddleware(thunk));
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
store.dispatch(fetchComments());
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import {
  reducerShowNewTask,
  reducerFecthTask,
  reducerShowEditTask,
  reducerIdEditTask
} from "./Reducer/reducer";
import createSagaMiddleware from "redux-saga";
import { watcherFetchData } from "./Saga/sagas";

var saga = createSagaMiddleware();

var reducer = combineReducers({
  showNewTask: reducerShowNewTask,
  showEditTask: reducerShowEditTask,
  data: reducerFecthTask,
  edit: reducerIdEditTask
});

var store = createStore(reducer, applyMiddleware(saga));


window.onclick = e => {
  if (document.getElementById("background") == e.target)
    store.dispatch({ type: "SET_SHOW_NEWTASK" });
};


saga.run(watcherFetchData);
store.dispatch({ type: "REQUEST_TASK" });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

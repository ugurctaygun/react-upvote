import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Styles/main.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { loadState, saveState } from "./Features/LocalStorage";
import linkReducer from "./Features/LinkSlice";
import { updateState } from "./Features/LinkSlice";

const persistedState = loadState();

const store = configureStore({
  persistedState,
  reducer: {
    links: linkReducer,
  },
});

if (persistedState) {
  let { linkList } = persistedState.links.value;
  store.dispatch(
    updateState({
      linkList: linkList,
    })
  );
}

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

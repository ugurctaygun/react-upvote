import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { loadState, saveState } from "./features/LocalStorage";
import linkReducer from "./features/LinkSlice";
import { updateState } from "./features/LinkSlice";

const persistedState = loadState();

const store = configureStore({
  persistedState,
  reducer: {
    links: linkReducer,
  },
});

if (persistedState) {
  let { linkList } = persistedState.tasks.value;
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

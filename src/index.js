import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";

// store.dispatch({ type: "account/withdraw", payload: 250 });
// store.dispatch({ type: "account/deposit", payload: 700000000000 });
// var statusBalance = store.getState();
// console.log(statusBalance);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

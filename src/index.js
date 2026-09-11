import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { withdraw } from "./features/accounts/accountSlice";

store.dispatch({type: 'account/deposite',payload:250})
store.dispatch(withdraw(50));
console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

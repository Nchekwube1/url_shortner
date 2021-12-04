import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/index.scss";

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

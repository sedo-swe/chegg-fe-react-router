import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NRApp from "./nestedRoutes/NRApp";
import RRApp from "./reactRouter/RRApp";

ReactDOM.render(
  <React.StrictMode>
      <App />
      <NRApp />
      <RRApp />
  </React.StrictMode>,
  document.getElementById("root")
);
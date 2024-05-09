import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Components/App/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (!localStorage.getItem("saved-coins")) {
  localStorage.setItem("saved-coins", JSON.stringify([]));
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

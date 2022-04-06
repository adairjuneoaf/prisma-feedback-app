// Main Dependencies
import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Components Dependencies
import { App } from "./App";

// Styles Dependencies
import "./styles/global.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

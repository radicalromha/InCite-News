import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

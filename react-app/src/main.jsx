import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import App from './containers/App';
import ErrorBoundary from "./components/ErrorBoundry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

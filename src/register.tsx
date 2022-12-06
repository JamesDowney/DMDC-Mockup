import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RegisterPage } from "./pages/RegisterPage";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <RegisterPage />
  </React.StrictMode>
);

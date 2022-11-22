import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { TechnicalSupportPage } from "./pages/TechnicalSupportPage";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <TechnicalSupportPage />
  </React.StrictMode>
);

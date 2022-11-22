import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { LoggedInMainPage } from "./pages/LoggedInMainPage";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <LoggedInMainPage />
  </React.StrictMode>
);

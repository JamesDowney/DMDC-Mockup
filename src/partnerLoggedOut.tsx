import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { PartnerLoggedOutPage } from "./pages/PartnerLoggedOutPage";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <PartnerLoggedOutPage />
  </React.StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { KnowledgePage } from "./pages/KnowledgePage";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <KnowledgePage />
  </React.StrictMode>
);

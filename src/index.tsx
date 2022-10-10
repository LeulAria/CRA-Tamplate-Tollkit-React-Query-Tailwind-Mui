import "./index.css";
import React from "react";
import Setup from "./Setup";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Setup />
  </React.StrictMode>
);

reportWebVitals();

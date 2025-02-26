import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Main from "./Landing/Main";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

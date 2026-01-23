import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/reset.scss";
import "./scss/style.scss";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  </StrictMode>,
);

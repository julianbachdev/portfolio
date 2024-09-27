import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ModalContextProvider } from "./contexts/ModalContext.jsx";
import "./style.css";
import "./queries.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </StrictMode>
);

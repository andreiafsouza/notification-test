import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Notifications } from "react-push-notification";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Notifications />
    <App />
  </StrictMode>
);

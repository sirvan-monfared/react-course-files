import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import NavigationContextProvider from "./store/NavigationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </StrictMode>
);

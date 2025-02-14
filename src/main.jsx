import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* make app inside the ContextProvider so that it can access the state */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

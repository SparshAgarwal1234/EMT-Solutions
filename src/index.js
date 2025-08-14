import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./features/store";


import { ClerkProvider } from "@clerk/clerk-react";

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.render(
  <Provider store={Store}>
    <AuthContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import {store,persiststore} from "./redux/store";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
        <React.StrictMode>
        <PersistGate persistor={persiststore}>
          <App />
        </PersistGate>
          </React.StrictMode>
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>,
  document.getElementById("root")
);

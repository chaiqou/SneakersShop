import React from "react";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/Header";
import CheckoutPage from "./pages/checkoutpage/checkoutpage";
import Signinandsignup from "./pages/signin-and-signup/Signin-and-signup";
import { Switch, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import {GlobalStyle} from './global.styles'


function App() {
  return (
    <div>
    <GlobalStyle />
      <Header />
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/signin" component={Signinandsignup} />
        </Switch>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;

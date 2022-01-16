import React from "react";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/Header";
import Signinandsignup from "./pages/signin-and-signup/Signin-and-signup";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Signinandsignup} />
      </Switch>
    </div>
  );
}

export default App;

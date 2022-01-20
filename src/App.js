import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/Header";
import Signinandsignup from "./pages/signin-and-signup/Signin-and-signup";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "../src/firebase/Firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  });
  return (
    <div>
      <Header currentUser={currentUser} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Signinandsignup} />
      </Switch>
    </div>
  );
}

export default App;

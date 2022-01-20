import React from "react";
import SignIn from "../../components/sign-in/Signin";
import SignUp from "../../components/sign-up/SignUp";
import "./Signin-and-signup.styles.scss";

const Signinandsignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Signinandsignup;

import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../../components/customButton/CustomButton";
import "./Signin.styles.scss";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          login(email, password).then((response) => history.push("/"));
        }}
      >
        <FormInput
          type="email"
          handleChange={handleEmail}
          name="email"
          label="Email"
          required
          value={email}
        />
        <FormInput
          type="password"
          handleChange={handlePassword}
          required
          label="Password"
          value={password}
          name="password"
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={() => signInWithGoogle()} type="button">
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;

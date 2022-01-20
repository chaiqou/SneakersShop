import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../../components/customButton/CustomButton";
import "./Signin.styles.scss";
import { SignInWithGoogle, auth } from "../../firebase/Firebase";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEmail(value);
    setPassword(value);
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          handleChange={handleChange}
          name="email"
          label="Email"
          required
          value={email}
        />

        <FormInput
          type="password"
          handleChange={handleChange}
          required
          label="Password"
          value={password}
          name="password"
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton isGoogleSignIn type="button" onClick={SignInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;

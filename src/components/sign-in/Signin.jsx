import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../../components/customButton/CustomButton";
import "./Signin.styles.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
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

        <CustomButton type="submit" value="submit form">
          {" "}
          Sign in{" "}
        </CustomButton>
      </form>
    </div>
  );
};

export default Signin;

import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../customButton/CustomButton";
import { useAuth } from "../../context/AuthContext";
import styled from 'styled-components'

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

`

const StyledTitle = styled.h2`
  margin: 10px 0;

`

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const { register } = useAuth();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <StyledSignUp>
      <StyledTitle>I don't have a account</StyledTitle>
      <span>Sign up with your email and password</span>
      <form
        className="sign-up-form"
        onSubmit={async (e) => {
          e.preventDefault();
          register(email, password)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        }}
      >
        <FormInput
          type="text"
          name="username"
          value={username}
          onChange={handleChangeUsername}
          label="Username"
          required
        ></FormInput>
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          pattern=".{8,}"
          title="8 characters minimum"
          onChange={handleChangePassword}
          value={password}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          pattern=".{8,}"
          title="8 characters minimum"
          onChange={handleChangeConfPassword}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </StyledSignUp>
  );
};

export default SignUp;
